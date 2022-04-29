<template>
  <section id="about" class="about-wrapper">
    <pageTitle title="About" />
    <div class="box-wrapper">
      <table>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index">
            <th>{{ contact.key }}</th>
            <td v-if="contact.url" class="last-td">
              <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                {{ contact.value }}
              </a>
            </td>
            <td v-else class="last-td">
              {{ contact.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'

export default {
  name: 'About',
  components: {
    pageTitle,
  },

  data() {
    return {
      contacts: [
        { key: 'Name', value: '又吉 真也(Matayoshi Shinya)', url: '' },
        { key: 'Corp.', value: '株式会社ソフィア', url: 'https://sophia-holdings.jp/' },
        {
          key: 'GitHub',
          value: 'ShinyaMatayoshi',
          url: 'https://github.com/ShinyaMatayoshi',
        },
        {
          key: 'Twitter',
          value: '@k14i12d1',
          url: 'https://twitter.com/k14i12d1',
        },
        { key: 'Mail', value: 'k14i12d35@gmail.com', url: '' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.about-wrapper {
  @include section;
}

.box-wrapper {
  @include box-wrapper;
  color: $text-color;

  table {
    text-align: left;
  }

  th {
    padding-right: 20px;
    font-weight: normal;
    color: $sub-text-color;
  }

  td {
    font-size: 20px;
    padding: 5px 8px 5px 0;
  }
}

a {
  text-decoration: none;
}

/*スマートフォン*/
@media (max-width: 670px) {
  .box-wrapper {
    td {
      display: block;
      font-size: 16px;
      width: 100%;
      padding: 5px 0;
      border-bottom: none;
    }
  }
}
</style>
