<template>
  <div id="app">
      <clock></clock>
      <div class="coverflow-container">
          <coverflow :coverList="coverList" :coverWidth="360" :coverHeight="240" :index="coverIndex" :coverSpace="100" :coverShadow="false"></coverflow>
      </div>
  </div>
</template>

<script>
import clock from './components/clock.vue'
import coverflow from 'vue-coverflow';

export default {
  name: 'app',
  components: {
    clock,
    coverflow,
  },
  created() {
    // for (let i = 0; i < 6; i++) {
    //   let path = `1(${i+1}).JPG`;
    //   this.coverList.push({
    //     cover: require('../src/assets/photo/' + path),
    //     title: i,
    //   });
    // }
  },
  methods: {
  },
  data() {
    return {
      coverIndex: 0,
      coverList: [
        {
          cover: require('../src/assets/photo/1 (1).png'),
          title: '猪猪燕',
        },
        {
          cover: require('../src/assets/photo/1 (2).png'),
          title: '燕仔',
        },
        {
          cover: require('../src/assets/photo/1 (3).png'),
          title: '燕儿',
        },
      ],
    };
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    .coverflow-container {
        width: 980px;
        margin: 0 auto;
    }
</style>
