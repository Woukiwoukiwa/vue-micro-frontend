  
module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            vue: 'vue'
        }
    },
    css: {
        extract: false
    }
};