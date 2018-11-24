<template>
  <div id="app">
    <Header></Header>
    <Split></Split>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/views/Header'
import Split from '@/components/Split'
import Footer from '@/views/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Split,
    Footer
  }
}
</script>

<style lang="stylus" scoped>

</style>
