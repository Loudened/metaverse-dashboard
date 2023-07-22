
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    publicPath: '/dashboard/',
    assetsDir: './dashboard/',
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' },
            host: '127.0.0.1',
            port: 8080,
            public: '127.0.0.1:8080'
        }
    }
}
