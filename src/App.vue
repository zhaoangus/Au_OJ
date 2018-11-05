<template>
  <div id="app">
    <Header></Header>
    <Split></Split>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Split from '@/components/Split'
export default {
  name: 'App',
  components: {
    Header,
    Split
  }
}
</script>

<style>

</style>
