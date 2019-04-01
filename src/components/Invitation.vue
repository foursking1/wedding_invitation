<template>
  <div class="wedding-invitation" :class="{ 'invitation-bounce':canOpen }">
    <div class="invitation-container" :class="{ 'invitation-down':isOpening }">
      <div class="invitation-cover">
        
        <v-touch v-on:swipeup="swiperleft" v-on:swipedown="swiperright" class="wrapper">
        

        <div class="cover-content" :class="{'invitation-up':isOpening}">
          
          <transition name="fade">
          <div class='gallery-inside' v-show="isFirstPage==1">
              <div class='content-swiper'>
                <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEB2875f4e1ec3682ab6bf6d96602edff17?method=download&shareKey=0c57b9ee5207cd1583115237db96584d">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEB90520684209dbc1a43c908398aaac388?method=download&shareKey=bd748a3f5be4e941dddae8b156c0019b">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEB5a2c5286519893f7aec68eaa2f7e3759?method=download&shareKey=e76d96a46056757f741c46ae8d4ad3b2">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEB7b47aa986ac121ec4475c7b2584cf9c6?method=download&shareKey=1b3ad3b9b68e260086efe13763427bae">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEBaf0903071b0311a22c6b0ef09bef4273?method=download&shareKey=bad84aebfde8af042f4a47500ccc7264">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEBdc35ea7b7ab646b038ddb0d1a8cbaa3f?method=download&shareKey=bf179706398c4c660ae9ad5464fa6e5b">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEBee1a644de4eb7c87ae419c574e4137c7?method=download&shareKey=65ca11590c5586dd94b1b98b2ac00cef">
                </swiper-slide>
                <swiper-slide>
                  <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEBa70cde2469f05d72f809be2eb6842c43?method=download&shareKey=7b180a834c791283c2c80f8bbc4d3917">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                </swiper>
              </div>

              <p><b>新郎叶宇飞</b>，金牛座，急性子<br>爱打篮球，爱吃美食<br><b>新娘盛佳丽</b>，天枰座，慢性子<br>爱做瑜伽，爱吃新郎做的美食</p>

              <div class="arrow-up">
                <!-- background -->
              </div>
          </div>
          </transition>

          <transition name="fade">
          <div class="content-inside" v-show="isFirstPage==2">

            <img class="content-inside-photo" src="https://note.youdao.com/yws/api/personal/file/WEB16bc5be3611203060ea53eb9b48339c2?method=download&shareKey=19fb4c3cd6021fed8201db399973a285">
            <p>我们结婚啦！</p>
            <p><b>叶宇飞 & 盛佳丽</b></p>
            <p>时间：2019年4月20日(周六)， 晚上6点</p>
            <p><b>地点</b>：<b>丽水市莲都区<br>东方文廷酒店5楼万华厅</b></p>
            <div class="arrow-up"></div>
          </div>
          </transition>

           <transition name="fade">
           <div class="content-map" v-show="isFirstPage==3">
             <div class="amap-page-container">
              <el-amap vid="amapDemo"  :center="center" :zoom="zoom" class="amap-demo">
                <el-amap-marker vid="component-marker" :position="center" ></el-amap-marker>
              </el-amap>
            </div>

            <!-- <p class='text'>公交→杭州1号线南苑站下车，步行600米<br>驾车→自行导航，酒店是迎宾路店<br>不是萧山店哦</p> -->
            <input
              class="content-inside-input"
              placeholder="一定要留言哦！有彩蛋！" 
              @keyup.enter="sendBarrage"
              @focus="isFocused = true"
              @blur="isFocused = false, hasEntered = false"
              v-model="wish"
              ref="wishInput"
            >
            <button class="content-inside-button" @click="sendBarrage">发送</button>
            <p v-if="!wish && isFocused && hasEntered">留言有弹幕哦</p>
            <div class="arrow-up"></div>
          </div>
          </transition>

        </div>
        </v-touch>
        <div class="cover-inside-left" :class="{'opening':isOpening}"></div>
        <div class="cover-inside-right" :class="{'opening':isOpening}"></div>
        <img class="cover-inside-open" src="../images/seal2.png" @click="openInvitation" :class="{'invitation-flight':isOpening}">
        <img class="cover-inside-seal" src="../images/seal.png" @click="openInvitation" :class="{'invitation-flight':isOpening}">
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ['canOpen'],
  data() {
    return {
      isFirstPage: 1,
      isOpening: false,
      wish: '',
      isFocused: false,
      hasEntered: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }

      },

      zoom: 15,
      center: [119.92,28.46]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    // 打开邀请函
    openInvitation(){
      this.isOpening = true
    },

    swiperleft() {
      if(this.isFirstPage <=2 ) {
        this.isFirstPage += 1
      } else {
        this.isFirstPage = 1;
      }
    },
    swiperright() {
      if(this.isFirstPage >= 2) {
        this.isFirstPage -= 1
      } else {
        this.isFirstPage = 3
      }
    },
    // 发送弹幕
    sendBarrage(){
      
      this.axios.get("http://www.fast2do.com:3389/add/" + this.wish)

      this.$nextTick(() => {
        this.hasEntered = true
        if (!this.wish) {
          return
        }
        this.isOpening = false
        this.$refs.wishInput.blur()
        setTimeout(() => {
          this.$emit('sendBarrage', this.wish)
        }, 660)
      })
    },
  },
  mounted() {
      this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less">

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .swiper-pagination-bullet-active {
     background-color: #a2a8a8d2;
  }

  .swiper-pagination-bullet {
    background-color: #ffffffd2;
    opacity: 0.8;
  }

  .wedding-invitation{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    padding-top: 60px;
    z-index: 4;
    transform: scale(0.05);
    -webkit-transform: scale(0.05);
    opacity: 0;
    transition: transform 0.8s cubic-bezier(.26,1.84,.39,.61), opacity 0.5s linear;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(.26,1.84,.39,.61), opacity 0.5s linear;
    background-size: 100%;
    overflow: hidden;
    &.invitation-bounce{
      opacity: 1;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    .invitation-container{
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
      -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
      &.invitation-down{
        transform: translateY(20px);
        -webkit-transform: translateY(20px);
      }
      .invitation-cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #D65047;
        border-radius: 10px;
        perspective: 500px;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15);
        .cover-content{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 10px 20px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
          -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
          &.invitation-up{
            transform: translateY(-60px);
            -webkit-transform: translateY(-60px);
          }

          .gallery-inside{
            position: absolute;
            height: 100%;
            // z-index: 100;
            width: 100%;
            // height: 100%;
            padding: 20px;
            color: #a9895d;
            background-image:url('../images/background.jpg');
            background-repeat:no-repeat;
            background-position:center;
            background-size: cover;
            //background-color: #FFF1DE;
            text-align: center;
            .content-swiper{
              margin-left: -20px;
              .content-inside-photo{
                
                width: 80%;
                margin-bottom: 10px;
                padding: 5px;
                border: 1px solid #f7debb;
              }
            }
            .arrow-up{
              position: absolute;
              margin-left: auto;
              left: 0;
              right: 0;
              height: 5%;
              bottom: 0;
              margin-bottom: 10px;
              text-align: center;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url('../images/up.png');
              opacity:0.7;
            }
          }

          .content-map {
            position: absolute;
            height: 100%;
            width: 100%;
            padding: 20px;
            color: #a9895d;
            background-image:url('../images/background.jpg');
            background-repeat:no-repeat;
            background-position:center;
            background-size: cover;
            //background-color: #FFF1DE;
            text-align: center;
            .amap-page-container {
              margin-top: 20%;
              // margin-left: 8%;
              height: 50%;
              width: 90%;
              border: 1px solid #f7debb;
            }
            .text {
              margin-top: 10%;
            }
            .content-inside-input{
              display: inline-block;
              width: 80%;
              // height: 35px;
              // margin-top: 10px;
              // outline: none;
              // border: none;
              border-bottom: 1px solid #f7debb;
              color: #a9895d;
              background: transparent;
              &::-webkit-input-placeholder { color: #E8D1B1;font-size: 12px; }
              &::-moz-placeholder { color: #E8D1B1;font-size: 12px; }
              &:-ms-input-placeholder { color: #E8D1B1;font-size: 12px; }
              &:-moz-placeholder { color: #E8D1B1;font-size: 12px; }
            }
            .content-inside-button {
              outline: none;
              border: none;
              background-color:  #a9895d;
              margin-top: 2px;
              margin-left: 10px;
            }
            .arrow-up{
              position: absolute;
              margin-left: auto;
              left: 0;
              right: 0;
              height: 5%;
              bottom: 0;
              margin-bottom: 10px;
              text-align: center;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url('../images/up.png');
              opacity:0.7;
            }
          }

          .content-inside{
            position: absolute;
            height: 100%;
            padding: 20px;
            color: #a9895d;
            background-image:url('../images/background.jpg');
            background-repeat:no-repeat;
            background-position:center;
            background-size: cover;
            //background-color: #FFF1DE;
            text-align: center;
            //overflow: auto;
            p{
              margin-top: 0;
              margin-bottom: 5px;
            }
            .content-inside-photo{
              width: 100%;
              margin-bottom: 10px;
              padding: 5px;
              border: 1px solid #f7debb;
            }
            .arrow-up{
              position: absolute;
              margin-left: auto;
              left: 0;
              right: 0;
              bottom: 0;
              margin-bottom: 20px;
              height: 5%;
              text-align: center;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url('../images/up.png');
              opacity:0.7;
            }
          }
        }
        .cover-inside-left{
          position: absolute;
          left: 0;
          top: 0;
          width: 70%;
          height: 100%;
          border-radius: 10px;
          background-color: #D65047;
          box-shadow: 5px 0 10px rgba(0,0,0,0.2);
          z-index: 6;
          transition: transform 0.5s;
          -webkit-transition: -webkit-transform 0.5s;
          transform-origin: 0 50%;
          -webkit-transform-origin: 0 50%;
          &.opening{
            transform: rotate3d(0,1,0,-140deg);
            -webkit-transform: rotate3d(0,1,0,-140deg);
          }
        }
        .cover-inside-right{
          position: absolute;
          right: 0;
          top: 0;
          width: 40%;
          height: 100%;
          border-radius: 10px;
          background-color: #D65047;
          box-shadow: -5px 0 10px rgba(0,0,0,0.2);
          z-index: 5;
          transition: transform 0.5s;
          -webkit-transition: -webkit-transform 0.5s;
          transform-origin: 100% 50%;
          -webkit-transform-origin: 100% 50%;
          &.opening{
            transform: rotate3d(0,1,0,140deg);
            -webkit-transform: rotate3d(0,1,0,140deg);
          }
        }
        .cover-inside-seal{
          position: absolute;
          left: 70%;
          bottom: 100px;
          width: 80px;
          height: 80px;
          margin-left: -40px;
          z-index: 7;
          transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%;
          transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
          -webkit-transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
          &.invitation-flight{
            opacity: 0;
          }
        }

        .cover-inside-open{
          position: absolute;
          top: 100px;
          margin-left: 40px;
          z-index: 9;
          transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%;
          transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
          -webkit-transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
          &.invitation-flight{
            opacity: 0;
          }
        }
      }
    }
  }


  
</style>
