const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //关闭语法检查
    lintOnSave: false,
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: "4s",
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}