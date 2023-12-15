
/** @type {import('next').NextConfig} */
const webpack = require("webpack");
module.exports = {
    // ... your config

    // This is for debugging to work
    webpack(config) {
        config.output = config.output || {};
        config.output.devtoolModuleFilenameTemplate = function (info) {
            return "file:///" + encodeURI(info.absoluteResourcePath);
        };
        return config;
    },
};