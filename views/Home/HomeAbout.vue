<template>
  <div class="home-about">
    <h2>HomeAbout</h2>
    <span>{{a}}-{{userId}}-{{userName}}</span>
  </div>
</template>
<script>
  export default {
    name: 'HomeAbout',
    getters: [
      'a',
      // 'userId',
      // 'userName'
    ],
    actions: [
      'something'
    ],
    payload: [{
      name: 'HomeUserInfo', getters: [
        'userId'
      ]
    }],
    proxys: {
      something ({commit}) {
        commit.updateA({a: 2, b:3})
      }
    },
    data () {
      return {
        userId: 0
      }
    },
    created () {
      setTimeout(() =>{
        this.something()
      })
    }
  }
</script>
