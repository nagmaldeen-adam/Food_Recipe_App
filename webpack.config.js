const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const miniExtractPlugin = require("mini-css-extract-plugin");
module.exports={
    entry:["regenerator-runtime/runtime.js","/src/index.js"],
    output:{ path:path.resolve(__dirname,"dist"), },
    devServer:{
        hot:true,
        port:3001
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env" ,"@babel/preset-react"],
                },
            },
            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    miniExtractPlugin.loader,"css-loader","sass-loader",
                ],
            },
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:"./src/index.html",
        }),
        new  miniExtractPlugin(),
    ],
    
}; 