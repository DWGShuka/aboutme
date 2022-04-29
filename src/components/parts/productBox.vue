<template>
  <div class="product-box">
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      <h2>{{ item.name }}</h2>
    </a>
    <p class="box-content">
      {{ item.content }}
    </p>
    <p class="sub-content">
      {{ item.subContent }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductBox',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.product-box {
  @include box-shadow;
  @include box(40%);
}

h2 {
  @include box-title;
}

.box-content {
  @include box-content;
}

.sub-content {
  @include box-sub-content;
}
</style>
