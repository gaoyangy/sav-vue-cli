// @NOTICE This file is generated by sav.

// 程序入口文件
// 宏定义采用注释的方式, 需要打包工具根据环境变量来匹配
// 区块宏 IS_DEV     是否开发环境
// 区块宏 IS_PROD    是否生产环境
// 区块宏 IS_MOCK    是否mock环境
// 区块宏 IS_LOCAL   是否本地环境
import {Sav, SavVue} from 'sav/dist/sav-client.js'
import {Vue, VueRouter, Flux, FluxVue} from './client-plugins.js'
import routes from './routes.js'
import App from './App.vue'
import contract from '../contract/index.js'

// 定义路由

let router = new VueRouter(Object.assign({
  mode: 'hash', // 'history' 或者 'hash' 自己配
  routes,
  linkActiveClass: 'is-active'
}))

let flux = new Flux({
// #if IS_DEV
  noProxy: true, // 开发模式下不使用Proxy方便调用dispatch
// #endif
  strict: true
})

// flux服务在这里嵌入
flux.declare({
  actions: {
    updateA ({commit}) {
      commit.updateA({a: 1})
    }
  },
  mutations: {
    updateA (_, a) {
      return a
    }
  },
  state: {
    a: 0,
    // userId: '0',
    // userName: 's'
  }
})

let sav = new Sav({
// #if IS_MOCK
  mockState: true,
// #endif
})
sav.declare(contract)
let savVue = new SavVue({
  flux,
  router,
  sav,
  Vue
})

let ret = {
  router,
  flux,
  sav,
  savVue
}

export default ret

let vm = ret.vm = new Vue(Object.assign({
  vaf: new FluxVue({flux}),
  router
}, App))

vm.$mount('#app')

