const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "react-native",
    "components",
    "nativewind",
    "react-native-css-interop",
  ],
};

module.exports = withExpo(nextConfig);
