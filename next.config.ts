import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['three', 'three-globe', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    // Important: Handle Three.js and WebGPU/WebGL modules
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/': 'three/examples/jsm/',
      'three-mesh-bvh': 'three-mesh-bvh/src/index.js',
    };
    return config;
  },
};

export default nextConfig;