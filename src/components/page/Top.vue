<template>
  <main>
    <section id="top" class="top-wrapper">
      <h1>{{ msg }}</h1>
    </section>
    <About />
    <Experiences />
    <Products />
    <Skills />
    <Contact />
  </main>
</template>

<script>
import About from '@/components/page/About'
import Experiences from '@/components/page/Expriences'
import Products from '@/components/page/Products'
import Skills from '@/components/page/Skills'
import Contact from '@/components/page/Contact'

export default {
  name: 'Top',
  components: { 
      About, 
      Experiences, 
      Products, 
      Skills, 
      Contact 
    },

  data() {
    return {
      msg: "Welcome to Shinya Matayoshi's Portfolio Site",
    }
  },
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_size.scss';

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', YuGothic,
    'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo,
    sans-serif;
}

body {
  margin: 0;
}

a:link {
  color: #0044cc;
}

main {
  background-color: white;
}

.top-wrapper {
  margin-top: $header-height_pc;
  background-image: url("~@/assets/top.jpg");
  text-align: center;
  padding: 38vh 0;
}

h1 {
  font-size: 50px;
  color: white;
  letter-spacing: 3px;
  font-weight: normal;
  border-bottom: 1px solid white;
  padding-right: 20px;
  padding-left: 20px;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

h3 {
  color: white;
  font-weight: normal;
  font-size: 25px;
  margin-top: 200px;
}

.share {
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  display: block;
}
.button {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100px;
  display: inline-block;
  margin: 20px;
  margin-top: 0px;
  transition: all 0.3s;

  &:hover {
    background-color: darken(white, 10%);
  }
}

/* タブレット */
@media (max-width: 1250px) {
  .top-wrapper {
    margin-top: $header-height_tablet;
  }
  h1 {
    font-size: 40px;
  }
}
/* スマートフォン */
@media (max-width: 670px) {
  .top-wrapper {
    padding: 20vh 0;
    margin-top: $header-height_sp;
    background: linear-gradient(
      to bottom,
      $main-color-1 0%,
      $main-color-2 100%
    );
  }

  .share {
    position: relative;
  }
  h1 {
    padding-top: 10vh;
    font-size: 30px;
  }

  h3 {
    margin-top: 100px;
    margin-bottom: 10px;
  }
  .button {
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
}
</style>
