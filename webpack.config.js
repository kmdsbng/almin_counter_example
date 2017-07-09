const path = require("path");

//devtool: process.env.WEBPACK_DEVTOOL || "source-map",
//    module: {
//        rules: [
//            {
//                test: /\.js$/,
//                exclude: /node_modules/,
//                loader: "babel-loader",
//                options: {
//                    cacheDirectory: true
//                }
//            }

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "public", "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },


    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    //externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //},
};
