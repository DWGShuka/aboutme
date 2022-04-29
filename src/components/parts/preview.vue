<template>
<v-dialog v-model="dialog" max-width="700" persistent>
  <v-btn
    fixed
    bottom
    left
    @click="dialog = false"
    class="preview_close_btn grey lighten-1"
  ><v-icon>close</v-icon></v-btn>
    <section id="preview" class="preview-wrapper">
        <pagetitle title="Preview" />
        <div class="preview-wrapper">
            <table>
            <tbody>
                <th>Name</th>
                <td class="last-td">
                 {{ name }}
            </td>
                <th>Adress</th>
                <td class="last-td">
                 {{ email }}
            </td>
                <th>Subject</th>
                <td class="last-td">
                 {{ subject }}
            </td>
                <th>Message</th>
                <td class="last-td">
                 {{ message }}
            </td>
        </tbody>
      </table>
    </div>
  </section>
</v-dialog>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'

export default {
    name: 'Preview',
    compornents:{
        pageTitle,
    },
    props:{
        Preview: Boolean,
    },
    data: () => ({}),
    computed: {
        dialog: function(){
            return this.preview
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.preview-wrapper {
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
