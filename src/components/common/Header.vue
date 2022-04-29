<template>
    <header>
      <v-app-bar app light hide-on-scroll>
        <v-layout justify-center align-center class="header-size">
      <v-app-bar-nav-icon>
        <router-link to="/">
        <v-img src="@assets/logo.png"></v-img>
        </router-link>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
      class="sp-header d-flex d-md-none"
      @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer
      v-model="drawer"
      right
      light
      fill-height
      temporary>
      <v-list nav dense>
      <v-list-item>
      <router-link to="/" class="header-link">
        Top
      </router-link>
      <router-link to="/about" class="header-link">
        About
      </router-link>
      <router-link to="/expriences" class="header-link">
        Experiences
      </router-link>
      <router-link to="/products" class="header-link">
        Products
      </router-link>
      <router-link to="/skills" class="header-link">
        Skills
      </router-link>
      <router-link to="/contact" class="header-link">
        Contact
      </router-link>
      </v-list-item>
      </v-list>
      </v-navigation-drawer>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      drawer: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_size.scss';

header {
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 10;
}

.navi-icon{
  margin: 0 0 0 auto;
}

.header-link {
  height: $header-height_pc;
  line-height: $header-height_pc;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: $text-color;
  text-decoration: none;
  width: 150px;
  display: inline-block;

  &:hover {
    background-color: darken(white, 5%);
  }

  &:link {
    color: $text-color;
  }
}

.clear {
  clear: left;
}
</style>
