const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './client/index.js',
  },
  output : {
    path: path.resolve(__dirname, 'build'),
    filename : "bundle.js",
    publicPath: '/build',
  },
  module : {
    rules : [
        {
            test : /\.jsx?/,
            exclude : /node_modules/,
            use : {
                loader: "babel-loader",
                options : {
                    presets : ["@babel/preset-env", "@babel/preset-react"],
                }
            }
        },
        {
            test : /\.s[ac]ss$/i,
            use: [
                "style-loader", "css-loader"
            ]
        }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/client'),
    },
    compress: true,
    port: 8000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};