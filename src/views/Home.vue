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
      products: [
        {
          category: "本日精選",
          id: "-Wksl_mamnasde4HiNeU",
          imageUrl: "https://bit.ly/2QbVsVR",
          is_enabled: 1,
          origin_price: "130",
          price: "120",
          title: "藍莓布丁",
          unit: "杯",
          num: 1,
        },
        {
          category: "人氣推薦",
          id: "-weqljkljlk-wemcxzpiwq",
          imageUrl: "https://bit.ly/2QiWeQW",
          is_enabled: 1,
          origin_price: "130",
          price: "120",
          title: "綜合水果布丁",
          unit: "杯",
          num: 1,
        },
        {
          category: "本日精選",
          id: "-213lhk-mxooxosad",
          imageUrl:
            "https://images.unsplash.com/photo-1611524021194-c6acb2df869f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
          is_enabled: 1,
          origin_price: "130",
          price: "130",
          title: "栗子派",
          unit: "個",
          num: 1,
        },
        {
          category: "新品上市",
          id: "-Wksl_mamnasde4qweseU",
          imageUrl:
            "https://images.unsplash.com/photo-1603032305813-be7441bc1037?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
          is_enabled: 1,
          origin_price: "170",
          price: "160",
          title: "黑糖蛋糕",
          unit: "個",
          num: 1,
        },
        {
          category: "新品上市",
          id: "-Wldl_12mcl123d38hdw",
          imageUrl: "https://bit.ly/2Dwoxd7",
          is_enabled: 1,
          origin_price: "430",
          price: "389",
          title: "6吋塔塔乳酪",
          unit: "個",
          num: 1,
        },
        {
          category: "人氣推薦",
          id: "-Wksl_mamn2zBjQuqaseU",
          imageUrl: "https://bit.ly/2zBjQuq",
          is_enabled: 1,
          origin_price: "80",
          price: "60",
          title: "招牌多那茲",
          unit: "個",
          num: 1,
        },
        {
          category: "新品上市",
          id: "-Wksl_mamnasde42zBDAxX",
          imageUrl: "https://bit.ly/2zBDAxX",
          is_enabled: 1,
          origin_price: "130",
          price: "130",
          title: "蔓越莓蛋糕",
          unit: "塊",
          num: 1,
        },
        {
          category: "人氣推薦",
          id: "-Wksl_2zKOP7we4HiNeU",
          imageUrl: "https://bit.ly/2zKOP7w",
          is_enabled: 1,
          origin_price: "170",
          price: "150",
          title: "草莓田園派",
          unit: "個",
          num: 1,
        },
      ],
      randoms: [],
      key: 0,
    };
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
    vm.$http
      .get("https://vue-course-api.hexschool.io/api/sweetaste/products")
      .then((res) => {
        res.data.products.forEach((item) => {
          vm.products.push(item);
        });
      });
    let arr = vm.products;
    for (let i = 0; i < 3; i++) {
      const ran = Math.floor(Math.random() * arr.length);
      vm.randoms.push(arr.splice(ran, 1)[0]);
    }
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/scss/pages/home.scss"
</style>
