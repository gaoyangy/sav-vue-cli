<template>
  <div class="home-index">
    <h2>HomeIndex</h2>
    <i>{{name}}</i>
    <button @click="add">Add</button>
    <router-link :to="{name: 'HomeAbout'}">About</router-link>
  </div>
</template>
<script>
  export default {
    name: 'HomeIndex',
    getters: [
      'a'
    ],
    actions: [
    'updateA'
    ],
    data () {
      return {
        name : "111111"
      }
    },
    methods: {
      add () {
        console.log(this.getHomeNavMenu)
        this.updateA()
      }
    }
  }
</script>
