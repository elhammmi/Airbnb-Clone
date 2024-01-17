
/** @type {import('next').NextConfig} */
const webpack = require("webpack");
module.exports = {
    // ... your config
    images: {
        domains: [
          'res.cloudinary.com', 
          'avatars.githubusercontent.com',
          'lh3.googleusercontent.com'
        ]
      },
    // This is for debugging to work
    webpack(config) {
        config.output = config.output || {};
        config.output.devtoolModuleFilenameTemplate = function (info) {
            return "file:///" + encodeURI(info.absoluteResourcePath);
        };
        return config;
    },
};