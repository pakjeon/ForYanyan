<template>
  <div id="app">
      <clock :d="day" :h="hour" :m="minute" :s="second"></clock>
      <div class="coverflow-container">
          <coverflow :coverList="coverList" :coverWidth="360" :coverHeight="240" :index="coverIndex" :coverSpace="100" :coverShadow="false"></coverflow>
      </div>
  </div>
</template>

<script>
import clock from './components/clock.vue'
import coverflow from 'vue-coverflow';
import Fireworks from '../src/common/utils'

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
    setInterval(this.timer, 1000);

    document.onclick = function (e){
      let evt=e||window.event;	//兼容性处理
      for(let i=0;i<20;i++){		//随机烟花的数量
        let div=document.createElement("div");
        let b=new Fireworks(div,evt.pageX,evt.pageY);
        b.move();
      }
    }
  },
  methods: {
    timer() {
      let start = new Date(2018, 5, 16, 2); // 2015.7.2
      let t = new Date() - start;
      let h = ~~(t / 1000 / 60 / 60 % 24);
          if (h < 10) {
        h = "0" + h;
      }
      let m = ~~(t / 1000 / 60 % 60);
      if (m < 10) {
        m = "0" + m;
      }

      let s = ~~(t / 1000 % 60);
      if (s < 10) {
        s = "0" + s;
      }
      this.day = ~~(t / 1000 / 60 / 60 / 24);
      this.hour = h;
      this.minute = m;
      this.second = s;
    },
},
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
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
    background-color: #ccc;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    .coverflow-container {
        width: 980px;
        margin: 0 auto;
    }
    .fireworks {
        width: 60px;
        height: 60px;
        text-shadow: 1px 1px 1px #ccc;
        /*border-radius: 50%;*/
        position: absolute;
    }
</style>
