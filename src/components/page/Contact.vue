<template>
    <section id="contact" class="contact-wrapper">
        <pageTitle title="Contact" />
        <v-form class="box-wrapper">
          <table>
            <tbody>
          <tr>
          <th>Name</th><td>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="20"
            label="your name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field></td></tr><tr>
          <th>Address</th><td>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="your e-mail address"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field></td></tr><tr>
          <th>Subject</th><td>
          <v-text-field
            v-model="subject"
            label="subject"
          ></v-text-field></td></tr><tr>
          <th>Message</th><td>
          <v-text-field
            v-model="message"
            :error-messages="messageErrors"
            label="messages to me"
            required
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          ></v-text-field></td></tr><tr>
          <th /><td>
          <v-btn
            class="mr-4"
            @click="openDialog"
          >
            preview
          </v-btn>
          <v-btn @click="submit">
            submit
          </v-btn></td></tr>
          </tbody>
          </table>
        </v-form>
        <Preview
        :prev-dialog="preview"
        @openDialog="openDialog"
        />
    </section>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'
import Preview from '../parts/preview'
import {validationMixin} from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Contact',
    components: {
        pageTitle,
        Preview,
    },
    mixins: [validationMixin],
    validations: {
      name:{ required, maxLength: maxLength(20) },
      email: { required, email },
      message: { required },
    },
    data:() =>({
        snackbar: true,
        preview: false,
        name:'',
        email:'',
        subject:'',
        message:'',
    }),
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      messageErrors () {
        const errors =[]
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.required && errors.push('Message is required')
        return errors
      },
    },
    methods: {
        openDialog: function(){
          this.snackbar =!this.snackbar
          this.preview = !this.preview
          scrollBy(0,0)
        },
        submit: async function(){
           /* var params = new URLSearchParams()
            params.append('name', this.name)
            params.append('mail', this.mail)
            params.append('subject', this.subject)
            params.append('message', this.message)
            await this.axios
            .post('/api/contact', params)*/
            location.href = '/contact/accepted'
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.contact-wrapper {
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
    display: flex;
  }
}

.form-field {
  background-color: darken(white,10%);
  display: flex;
}

/*スマートフォン*/
@media (max-width: 670px) {
  .box-wrapper {
    .td {
      display: block;
      font-size: 16px;
      width: 100%;
      padding: 5px 0;
      border-bottom: none;
    }
  }
}
</style>
