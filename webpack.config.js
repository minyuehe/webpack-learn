const path = require('path');  // 默认导出是在根目录下的dist目录生层main.js，输出路径较多需要借助path模块

// console.log(path.resolve());  //类似于pwd，获取当前文件路径
// console.log(path.join(__dirname, './dist'));
// TODO 学习node执行机制？为什么有exports, require, module, __filename, __dirname
// https://juejin.cn/post/6844904080955932680


const config = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /.css$/, // 1.config配置 2.内联 3.CLI
                        use: [
                            { loader: 'style-loader' },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                }
                            },
                        ]
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: ['style-loader', 'css-loader', 'sass-loader']
                    }
                ]
            }
        ],
    }

};

module.exports = config;