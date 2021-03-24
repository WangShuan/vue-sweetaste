<template>
  <div>
    <div class="container sm-px0">
      <div class="mainImg">
        <div class="imgBtn-group mx-auto">
          <div
            class="imgBtn pointer"
            v-for="(item, index) in categories"
            :key="item.name"
            @click="goPage(item)"
          >
            <div
              class="imgBtn-bg"
              :style="{
                backgroundImage: `url(${require(`@/assets/images/btn${
                  index + 1
                }.jpeg`)})`,
              }"
            ></div>
            <div class="imgBtn-text">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light w-100">
      <div class="l-article md-none">
        <div
          class="l-article-img"
          :style="{
            backgroundImage: `url(${require('@/assets/images/media1.jpeg')})`,
          }"
        >
          <img
            class="l-article-titleImg"
            src="~@/assets/images/lg-為什麼一定要吃甜點.svg"
            alt="為什麼一定要吃甜點"
          />
          <div class="l-article-content">
            青山依舊在，幾度夕陽紅。慣看秋月春風。<br />
            一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
            是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light w-100">
      <div class="l-article l-article-mt md-none">
        <div
          class="l-article-img bgPositionRight"
          :style="{
            backgroundImage: `url(${require('@/assets/images/media2.jpeg')})`,
          }"
        >
          <img
            class="l-article-titleImg"
            src="~@/assets/images/lg-為什麼選擇了做甜點.svg"
            alt="為什麼選擇了做甜點"
          />
          <div class="l-article-content">
            青山依舊在，幾度夕陽紅。慣看秋月春風。<br />
            一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
            是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
          </div>
        </div>
      </div>
    </div>
    <div class="md-block l-article">
      <div
        class="l-article-img"
        :style="{
          backgroundImage: `url(${require('@/assets/images/media1.jpeg')})`,
        }"
      >
        <img
          class="l-article-flatTitleImg"
          src="~@/assets/images/sm-橫式-為什麼一定要吃甜點.svg"
          alt="為什麼一定要吃甜點"
        />
        <div class="l-article-content">
          青山依舊在，幾度夕陽紅。慣看秋月春風。<br />
          一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
          是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        </div>
      </div>
    </div>
    <div class="md-block l-article-mt l-article">
      <div
        class="l-article-img bgPositionRight"
        :style="{
          backgroundImage: `url(${require('@/assets/images/media2.jpeg')})`,
        }"
      >
        <img
          class="l-article-flatTitleImg"
          src="~@/assets/images/sm-橫式-為什麼選擇了做甜點.svg"
          alt="為什麼選擇了做甜點"
        />
        <div class="l-article-content">
          青山依舊在，幾度夕陽紅。慣看秋月春風。<br />
          一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
          是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex-center">
        <img
          class="centerImg sm-none"
          src="~@/assets/images/lg-想吃甜點是不需要理由的.svg"
          alt="想吃甜點是不需要理由的"
        />
        <img
          class="centerFlatImg sm-block"
          src="~@/assets/images/sm-橫式-想吃甜點是不需要理由的.svg"
          alt="想吃甜點是不需要理由的"
        />
      </div>
      <ul class="flex-center cardGroup" :key="key">
        <li v-for="item in randoms" :key="item.id" class="l-card">
          <div
            class="l-card-img"
            :style="{ 'background-image': `url(${item.imageUrl})` }"
          >
            <span class="l-card-tag">{{ item.category }}</span>
            <a href="#" class="l-card-icon" @click.prevent="updateData(item)">
              <span v-if="!item.isFavorite" class="material-icons">
                favorite_border
              </span>
              <span v-else class="material-icons"> favorite </span>
            </a>
          </div>
          <div class="l-card-title">
            <div class="l-card-title-name border-right">{{ item.title }}</div>
            <div class="l-card-title-price text-bold">NT$ {{ item.price }}</div>
          </div>
          <div class="l-card-footer pointer" @click="addCart(item)">
            加入購物車
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: "本日精選", path: "desserts-of-the-day" },
        { name: "人氣推薦", path: "popular-recommendation" },
        { name: "新品上市", path: "new-arrival" },
      ],
      key: 0,
      products: [],
    };
  },
  computed: {
    randoms: function () {
      let arr = [];
      for (var i = 0; i < 3; i++) {
        let j = Math.floor(Math.random() * Math.floor(this.products.length));
        arr.push(this.products[j]);
      }
      return arr;
    },
  },
  methods: {
    goPage(item) {
      this.$router.push(`/products/${item.path}`);
    },
    updateData(item) {
      const vm = this;
      const ret = vm.randoms.find((itm) => {
        return itm.id === item.id;
      });
      ret.isFavorite = !ret.isFavorite;
      vm.key++;
    },
    addCart(item) {
      this.$parent.addCart(item);
    },
  },
  created() {
    const vm = this;
    vm.products = vm.$parent.products;
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/scss/pages/home.scss"
</style>
