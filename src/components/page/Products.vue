<template>
  <section id="products" class="products-wrapper">
    <pageTitle title="Products" />
    <div class="products">
      <productBox v-for="product in products" :key="product.link" :item="product" />
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'
import productBox from '@/components/parts/productBox'

export default {
  name: 'Products',
  components: {
    pageTitle,
    productBox,
  },
  data() {
    return {
      products: [
        {
          name: 'Medjed',
          content:
            '2Dシューティングゲームです。学生の頃4人ほどの有志のチームで作成しました。(コーディングは2人)',
          subContent: 'C++',
          link: 'https://github.com/DWGShuka/Medjed/',
        },
        {
          name: 'Portfolio Site',
          content:
            '私のPortfolio(このページ)です。いろいろなサイトを参考にしながら1週間前後で完成させました。',
          subContent: 'Vue.js, JavaScript',
          link: 'https://ShinyaMatayoshi.github.io',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

.products-wrapper {
  @include section;
}

.products {
  @include box-wrapper;
}

a {
  text-decoration: none;
}
</style>
