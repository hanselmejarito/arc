import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Workspace root (parent) — avoids broken module resolution when
  // both root and next-app have package-lock.json / next installs.
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
