#!/usr/bin/env python3
"""
Range-capable static server for the workshop deck.

Why this exists: `python -m http.server` does not support HTTP Range requests,
so an <audio> element reports a seekable range of 0-0 and the player's scrub bar
cannot be dragged. GitHub Pages does support ranges, so this only matters for
local/offline use — but that is exactly when you are presenting.

    python serve.py            # serves ./dist  on http://127.0.0.1:8080
    python serve.py 9000       # custom port
    python serve.py 9000 .     # serve the repo root instead

Standard library only. Handles GET, HEAD and single-range requests.
"""
import os, re, sys, mimetypes, posixpath
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from functools import partial

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
ROOT = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else os.path.abspath("dist")
CHUNK = 64 * 1024

mimetypes.add_type("audio/mpeg", ".mp3")
mimetypes.add_type("video/mp4", ".mp4")
mimetypes.add_type("application/javascript", ".js")


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt, *args):
        sys.stderr.write("  %s\n" % (fmt % args))

    # ── helpers ────────────────────────────────────────────────
    def _resolve(self):
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        path = posixpath.normpath(path)
        if path.endswith("/"):
            path += "index.html"
        full = os.path.abspath(os.path.join(ROOT, path.lstrip("/")))
        if not full.startswith(ROOT):          # no escaping the root
            return None
        return full

    def _send(self, code, body=b"", ctype="text/plain", extra=None):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        if self.command != "HEAD" and body:
            self.wfile.write(body)

    # ── GET / HEAD ─────────────────────────────────────────────
    def do_HEAD(self):
        self.do_GET(head_only=True)

    def do_GET(self, head_only=False):
        full = self._resolve()
        if not full or not os.path.isfile(full):
            self._send(404, b"Not found")
            return

        size = os.path.getsize(full)
        ctype = mimetypes.guess_type(full)[0] or "application/octet-stream"
        rng = self.headers.get("Range")

        if not rng:
            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(size))
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Cache-Control", "no-cache")
            self.end_headers()
            if self.command == "HEAD":
                return
            with open(full, "rb") as f:
                while True:
                    b = f.read(CHUNK)
                    if not b:
                        break
                    self.wfile.write(b)
            return

        # single range only:  bytes=start-end
        m = re.match(r"bytes=(\d*)-(\d*)$", rng.strip())
        if not m:
            self._send(416, b"Bad range", extra={"Content-Range": f"bytes */{size}"})
            return
        s, e = m.group(1), m.group(2)
        if s == "":                                  # suffix range: bytes=-500
            length = int(e)
            start = max(0, size - length)
            end = size - 1
        else:
            start = int(s)
            end = int(e) if e else size - 1
        if start >= size or start > end:
            self._send(416, b"Range not satisfiable",
                       extra={"Content-Range": f"bytes */{size}"})
            return
        end = min(end, size - 1)
        length = end - start + 1

        self.send_response(206)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(length))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        if self.command == "HEAD":
            return
        with open(full, "rb") as f:
            f.seek(start)
            remaining = length
            while remaining > 0:
                b = f.read(min(CHUNK, remaining))
                if not b:
                    break
                self.wfile.write(b)
                remaining -= len(b)


if __name__ == "__main__":
    if not os.path.isdir(ROOT):
        sys.exit(f"No such folder: {ROOT}\nRun `node build.mjs` first, or pass a folder to serve.")
    srv = ThreadingHTTPServer(("127.0.0.1", PORT), partial(Handler))
    print("deck  ->  http://127.0.0.1:%d/" % PORT)
    print(f"serving {ROOT}")
    print("Range requests enabled (audio scrubbing works).  Ctrl-C to stop.\n")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")
