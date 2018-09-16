// 一个常见的`webpack`配置文件
module.exports = {
    devtool:'eval-source-map',
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer : {
        port : "8080",
        contentBase : "./public",
        historyApiFallback : true,
        inline : true
    },
    module : {
        rules : [
            {
                test : /(\.jsx|\.js)$/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : [
                            "env","react"
                        ]
                    }
                },
                exclude : /node_modules/
            }
        ]
    }
};
