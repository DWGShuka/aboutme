<template>
  <v-footer padless class="grey darken-2">
    <v-container class="footer-sizing">
      <v-layout column>
        <v-flex>
          <v-container fuild class="d-flex sp-footer">
            <div class="flex-grow-1"></div>
            <v-btn 
              href="https://github.com/ShinyaMatayoshi"
              class="ml-3 sp-footer-btn grey white--text"
              target="_blank"
              >Github</v-btn>
            <v-btn
              href="https://twitter.com/k14i12d1"
              class="ml-3 sp-footer-btn grey white--text"
              target="_blank"
              >Twitter</v-btn>
          </v-container>
        </v-flex>
        <v-divider color="white"></v-divider>
        <p class="copyright">All Rights Reserved by Shinya Matayoshi.</p>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_size.scss';

.container.footer-sizing {
  max-width: 1200px;
}

.copyright {
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .sp-footer {
    flex-flow: column;
    height: auto;
    text-align: center;
  }
  .sp-footer-logo {
    margin: 0 auto;
  }
  .sp-footer-btn {
    margin-top: 20px;
  }
}
</style>
