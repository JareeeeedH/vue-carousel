<template>
  <div class="wrapper">

    <div class="show-content">
      <template  v-if="imageList.length !== 0">
        <div class="carousel">
          <swiper class="swiper" :options="swiperOption">
            <!-- img render here -->
            <swiper-slide v-for="(img,index) in imageList" :key="index">
              <img :src="img.imgSrc" alt="">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </template>
      <template v-else>
        <div class="empty-content">
          <h5>請上傳輪播照片。</h5>
        </div>
      </template>

      <ul class="img-list">
        <li class="each-img" v-for="(img, index) in imageList" :key="img.id">
          <span class="img-content">{{ index+1}}.  {{ img.name }}</span>
          <span class="tool-area">
            <i class="fas fa-angle-up" @click="sortHandler(1, index)"></i>
            <i class="fas fa-angle-down" @click="sortHandler(-1, index)"></i>
            <i class="fas fa-trash-alt" @click="deleteHandler(index)"></i>
          </span>
        </li>
      </ul>
    </div>

    <div class="uploader">
      <Loader />
    </div>
    
  </div>
</template>

<style scoped lang='scss'>

.wrapper{
  width: 100%;
  padding: 50px;
}

.show-content{
  display: flex;
}

.carousel{
  max-width: 500px;
  width: 50%;
  animation: fade-in 1.2s;

  img{
    width: 100%;
  }
}

.empty-content{
  max-width: 500px;
  width: 50%;
  height: 300px;
  border: 2px grey solid;
  background: rgba(#ffffff,0.5);
  text-align: center;
  h5{
    font-size: 1.5rem;
    text-align: center;
  }
}

.img-list{
  width: 50%;
  height: 450px;
  list-style: none;
  overflow: auto;
  animation: text-in 3s;
}

.each-img{
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid grey;
  font-weight: 500;
  font-size: 1.5rem;
}

.img-content{
  width: 50%;
}

.tool-area{
  width: 50%;
  display: flex;
  justify-content: space-around;
  font-size: 1.25rem;
}

@mixin slowMove{
  transition: all 0.2s
}

@mixin scaleUp{ 
  transform: scale(2);
}

.fa-angle-up,
.fa-angle-down{
  cursor: pointer;
  color: rgb(255, 255, 255);
  @include slowMove;

  &:hover{
    color: rgb(212, 230, 54);
    @include scaleUp;
  }
}

.fa-trash-alt{
  cursor: pointer;
  color: white;
  @include slowMove;

  &:hover{
    color: red;
    @include scaleUp
  }
}

.swiper{
  border-radius: 5px 5px 10px 10px;
}

.uploader{
  width: 70%;
}

@keyframes fade-in{
  0%{
    opacity: 0;
    transform: scale(0) rotate(-15deg)
  }

  50%{
    opacity: 0.5;
    transform: scale(1.05) rotate(5deg)
  }

  100%{
    opacity: 1;
    transform: scale(1) rotate(0deg)
  }
}

@keyframes text-in{
  0%{
    opacity: 0;

  }
  100%{
    opacity: 1;

  }
}

@media screen and (max-width:768px) { 
  .wrapper{
    padding: 20px
  }
  .each-img{
    font-size: 1rem;
    font-weight: 500;
  }
  .tool-area{
    font-size: 1rem;
  }
  .img-list{
  height: 200px;
  overflow: auto;
  }
}

</style>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import Loader from '../components/FineupLoader.vue'

export default {
    name: 'swiper-example-pagination-progress',
    title: 'Progress pagination',
    components: {  
      Loader 
      },

    data() {
      return {
        swiperOption: {
          autoplay:true,
          effect : 'cube',
          mousewheel: true,
          keyboard : true,

          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },

    computed: mapState({
      imageList(state){
        return state.photoNameList.map((item)=>{

          let imgContent = {};
          imgContent.id = Math.round(Math.random()*10000);
          imgContent.name = item;
          imgContent.imgSrc = require(`../../../nodejs/public/${item}`);

          return imgContent;
        })
      },
    }),

    methods:{
      ...mapActions(['deleteImg', 'sortImg']),
      
      deleteHandler(index){
        this.deleteImg(index)
      },

      // 判斷方向&打action。
      sortHandler(direction, index){
        let listLength = this.imageList.length;

        if(direction === 1 && index === 0){
          return
        }

        if(direction === -1 && index === listLength - 1){
          return
        }

        this.sortImg({direction, index});

      },
    },

  }


</script>
