<template>
  <div id="app">
    <!-- <p>count: {{count}} </p>
    <div @click="countAdd()">点我自增</div> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    countAdd () {
      const a = 12
      this.$store.commit('countAdd', a)
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
