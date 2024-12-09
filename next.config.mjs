import { withPayload } from "@payloadcms/next/withPayload";

import bundleanalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleanalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    reactCompiler: false,
  },
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(withBundleAnalyzer(nextConfig));
