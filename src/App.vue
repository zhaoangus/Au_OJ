<template>
  <div id="app">
    <Header></Header>
    <Split></Split>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Split from '@/components/Split'
import Footer from '@/components/Footer'
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
