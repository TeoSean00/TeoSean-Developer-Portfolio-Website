module.exports = {
  publicPath: '/TeoSean-Developer-Portfolio-Website/'
}

const { defineConfig } = require('@vue/cli-service')
const { matchedRouteKey } = require('vue-router')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
