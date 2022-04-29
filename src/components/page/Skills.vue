<template>
  <section id="skills" class="skills-wrapper">
    <pageTitle title="Skills" />
    <div class="skills">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          {{ skill.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/parts/pageTitle'
export default {
  name: 'Skills',
  components: {
    pageTitle,
  },
  data() {
    return {
      skills: [
        { name: 'R' },
        { name: 'Python(3.x)' },
        { name: 'JavaScript (ES6)' },
        { name: 'Vue.js / Node.js' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'Java'},
        { name: 'SpringBoot2'},
        { name: 'GitHub' },
        { name: 'Docker' },
        { name: 'TeraTerm' },
        { name: 'Circle CI' },
        { name: 'PostgresSQL' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';
.skills-wrapper {
  @include section;
  // flex-direction: row-reverse;
  background-color: $background-color1;
}
.skills {
  @include box-wrapper;
  width: 100%;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 670px) {
    grid-template-columns: 200px;
  }
}

li {
  width: 100%;
  text-align: left;
  font-size: 16px;
  padding: 8px 0;
  color: $text-color;
}
</style>
