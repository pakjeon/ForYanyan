<template>
  <div id="app">
      <clock :d="day" :h="hour" :m="minute" :s="second" class="clock"></clock>
<!--      <line-star></line-star>-->
<!--      <div class="coverflow-container">-->
<!--          <coverflow :coverList="coverList" :coverWidth="360" :coverHeight="240" :index="coverIndex" :coverSpace="100" :coverShadow="false"></coverflow>-->
<!--      </div>-->
      <div class="main">
<!--          <audio src="../src/assets/music/a.mp3" autoplay="autoplay"></audio>-->
          <!-- swiper1 -->
          <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide class="slide-1"></swiper-slide>
              <swiper-slide class="slide-2"></swiper-slide>
              <swiper-slide class="slide-3"></swiper-slide>
              <swiper-slide class="slide-4"></swiper-slide>
              <swiper-slide class="slide-5"></swiper-slide>
              <swiper-slide class="slide-6"></swiper-slide>
              <swiper-slide class="slide-7"></swiper-slide>
              <swiper-slide class="slide-8"></swiper-slide>
              <swiper-slide class="slide-9"></swiper-slide>
              <swiper-slide class="slide-10"></swiper-slide>
              <swiper-slide class="slide-11"></swiper-slide>
              <swiper-slide class="slide-12"></swiper-slide>
              <swiper-slide class="slide-13"></swiper-slide>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
              <swiper-slide class="slide-1"></swiper-slide>
              <swiper-slide class="slide-2"></swiper-slide>
              <swiper-slide class="slide-3"></swiper-slide>
              <swiper-slide class="slide-4"></swiper-slide>
              <swiper-slide class="slide-5"></swiper-slide>
              <swiper-slide class="slide-6"></swiper-slide>
              <swiper-slide class="slide-7"></swiper-slide>
              <swiper-slide class="slide-8"></swiper-slide>
              <swiper-slide class="slide-9"></swiper-slide>
              <swiper-slide class="slide-10"></swiper-slide>
              <swiper-slide class="slide-11"></swiper-slide>
              <swiper-slide class="slide-12"></swiper-slide>
              <swiper-slide class="slide-13"></swiper-slide>
          </swiper>
      </div>

  </div>
</template>

<script>
import clock from './components/clock.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import lineStar from './components/lineStar.vue'
// import coverflow from 'vue-coverflow';
// import Fireworks from '../src/common/utils'

export default {
  name: 'app',
  components: {
    clock,
    // lineStar,
    // coverflow,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      coverIndex: 0,
      // coverList: [
      //   {
      //     cover: require('../src/assets/photo/1 (1).png'),
      //     title: '猪猪燕',
      //   },
      //   {
      //     cover: require('../src/assets/photo/1 (2).png'),
      //     title: '燕仔',
      //   },
      //   {
      //     cover: require('../src/assets/photo/1 (3).png'),
      //     title: '燕儿',
      //   },
      // ],
    };
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
    //
    // document.onclick = function (e){
    //   let evt=e||window.event;	//兼容性处理
    //   for(let i=0;i<20;i++){		//随机烟花的数量
    //     let div=document.createElement("div");
    //     let b=new Fireworks(div,evt.pageX,evt.pageY);
    //     b.move();
    //   }
    // }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
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
}
</script>


<style lang="scss">
    body {
        margin: 0;
    }
#app {
    background: -webkit-linear-gradient(aqua, pink); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(aqua, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(aqua, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(aqua, pink); /* 标准的语法 */
    height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    /*display: flex;*/
    /*align-items: center;*/
    /*flex-direction: column;*/
    /*justify-content: space-between;*/
}
    .clock {
        width: 100%;
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
    .main {
        width: 1080px;
        height: 500px;
        background-color: #f2f2f2;
        margin: 0 auto;
        .swiper-container {
            background: #fefefe;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
        }
        .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform,-webkit-transform;
            box-sizing: content-box;
        }
        .swiper-slide {
            text-align: center;
            font-size: 38px;
            font-weight: 700;
            background-color: #eee;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform,-webkit-transform;
            &.slide-1 {
                background: url('../src/assets/photo/1.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-2 {
                background: url('../src/assets/photo/2.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-3 {
                background: url('../src/assets/photo/3.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-4 {
                background: url('../src/assets/photo/4.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-5 {
                background: url('../src/assets/photo/5.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-6 {
                background: url('../src/assets/photo/6.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-7 {
                background: url('../src/assets/photo/7.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-8 {
                background: url('../src/assets/photo/8.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-9 {
                background: url('../src/assets/photo/9.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-10 {
                background: url('../src/assets/photo/10.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-11 {
                background: url('../src/assets/photo/11.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-12 {
                background: url('../src/assets/photo/12.png') center no-repeat;
                background-size: 100%;
            }
            &.slide-13 {
                background: url('../src/assets/photo/13.png') center no-repeat;
                background-size: 100%;
            }
        }
        .swiper-button-next,.swiper-button-prev {
            position: absolute;
            top: 50%;
            width: 27px;
            height: 44px;
            margin-top: -22px;
            z-index: 10;
            cursor: pointer;
            background-size: 27px 44px;
            background-position: 50%;
            background-repeat: no-repeat;
        }
        .swiper-button-prev {
            /*background-color: red;*/
            background: url("../src/assets/photo/left.png") 50% 50% no-repeat;
            background-size: cover;
            left: 10px;
            right: auto;
        }
        .swiper-button-next {
            /*background-color: green;*/
            background: url("../src/assets/photo/right.png") 50% 50% no-repeat;
            background-size: cover;
            right: 10px;
            left: auto;
        }
        .swiper-button-disabled {
            opacity: .35;
            cursor: auto;
            pointer-events: none;
        }
        .gallery-top {
            height: 80%!important;
            width: 100%;
        }
        .gallery-thumbs {
            height: 20%!important;
            box-sizing: border-box;
            padding: 10px 0;
        }
        .gallery-thumbs .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
        }
        .gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }
    }
</style>
