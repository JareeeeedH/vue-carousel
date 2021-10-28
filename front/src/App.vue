<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss">

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body, html{
  width: 100%;
  height: 100%;
  background: linear-gradient(to Right, rgb(206, 206, 206), rgb(18, 32, 78))
}
</style>
