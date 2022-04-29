<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
//import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
* {
  font-family: 'Noto Sans JP';
}
</style>
