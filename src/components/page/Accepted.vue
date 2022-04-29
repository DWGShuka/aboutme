<template>
  <section id="accepted" class="accepted-wrapper">
    <pageTitle title="Accepted" />
    <div class="accepted">
        コンタクト機能は現在未実装です<br />
        お手数おかけして申し訳ございませんが<router-link to="about">こちら</router-link>のメールアドレスよりお問い合わせください
    </div>
    <button href="/">
    back to Top
    </button>
  </section>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'
export default {
    name: 'Accepted',
    components: {
        pageTitle,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';
.accepted-wrapper {
  @include section;
  // flex-direction: row-reverse;
  background-color: $background-color1;
}
.accepted {
  @include box-wrapper;
  width: 100%;
}
div {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 670px) {
    grid-template-columns: 200px;
  }
}
</style>
