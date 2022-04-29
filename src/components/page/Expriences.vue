<template>
  <section id="experiences" class="experiences-wrapper">
    <pageTitle title="Experiences" />
    <v-app>
      <v-timeline :reverse="reverse" :dense="dense">
        <v-timeline-item
          v-for="(experience, index) in experiences"
          :key="index"
          color="#2F80ED"
          fill-dot
          small
        >
          <span slot="">{{ experience.term }}</span>
          <span class="elevation-2">
            <v-card-title class="headline">
              {{ experience.key}}<br>{{experience.value }}
            </v-card-title>
            <v-card-text>
              {{ experience.description }}
            </v-card-text>
          </span>
        </v-timeline-item>
      </v-timeline>
    </v-app>
  </section>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'

export default {
  name: 'Experiences',
  components: {
    pageTitle,
  },

  data() {
    return {
      width: window.innerWidth,
      experiences: [
       /*コピペ用 
       {
          key: '',
          value: '',
          term: '',
          description:
            '',
          language: ''
        },*/
        {
          key: '東京消防庁',
          value: 'キッティング',
          term: '2020/11(a month)',
          description:
            'ルーター、L2スイッチ、無線APの初期設定、設定時のログの作成、リース先対応表の作成',
          language: 'TeraTerm'
        },
        {
          key: 'Webサービスアプリ運営会社',
          value: '求人サイト構築支援',
          term: '2020/6~2020/10',
          description:
            'テスト仕様書作成、単体テスト、結合テスト、総合テストの実施、エビデンスの作成、発見したバグの修正(フロント、バックともに対応)、二重送信防止機能の実装を1人称で対応(バックエンド側でのトークンによる制御およびJSによるボタンの非活性化)',
          language: 'Java8(SpringBoot2),JavaScript(Vue.js),PostgreSQL'
        },
      ],
    }
  },

  computed: {
    dense() {
      return !(this.width > 670)
    },
    reverse() {
      return this.width > 670
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.width = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';
//@import '~vuetify/src/styles/styles.sass';

.experiences-wrapper {
  @include section;
  background-color: $background-color1;
}

.headline {
  justify-content: center;
}
</style>
