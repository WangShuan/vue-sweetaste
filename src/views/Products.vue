<template>
  <div>
    <div class="container sm-px0">
      <div class="mainImg">
        <img
          src="~@/assets/images/sm-想吃甜點是不需要理由的.svg"
          alt="想吃甜點是不需要理由的"
          class="mainImg-titleImg float-right"
        />
      </div>
      <div class="flex-between">
        <ul class="l-list text-bold">
          <li class="l-list-item bg-primary">甜點類別</li>
          <li
            class="l-list-item pointer"
            v-for="(item, index) in categories"
            :key="index"
            :class="{
              'l-list-item-active': $route.params.category === item.path,
            }"
          >
            <router-link class="d-block w-100" :to="item.path">
              {{ item.name }}（{{ item.qty }}）
            </router-link>
          </li>
        </ul>
        <ul class="cardGroup" :key="key">
          <li class="l-card" v-for="item in currentProducts" :key="item.bgName">
            <div
              class="l-card-img"
              :style="{
                backgroundImage: `url(${item.imageUrl})`,
              }"
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
              <div class="l-card-title-price text-bold">
                NT$ {{ item.price }}
              </div>
            </div>
            <div class="l-card-footer pointer" @click="addCart(item)">
              加入購物車
            </div>
          </li>
        </ul>
      </div>
      <ul v-if="category === '所有甜點'" class="l-pagination">
        <li @click="lessPage()" class="l-pagination-item pointer">
          <span class="material-icons l-pagination-icon"> arrow_left </span>
        </li>
        <li
          class="l-pagination-item pointer"
          v-for="item in pagination"
          :key="item"
          :class="{
            'l-pagination-item-active': item === page,
          }"
          @click="page = item"
        >
          {{ item }}
        </li>
        <li @click="addPage()" class="l-pagination-item pointer">
          <span class="material-icons l-pagination-icon"> arrow_right </span>
        </li>
      </ul>
      <ul v-else class="l-pagination">
        <li class="l-pagination-item pointer">
          <span class="material-icons l-pagination-icon"> arrow_left </span>
        </li>
        <li class="l-pagination-item pointer l-pagination-item-active">1</li>
        <li class="l-pagination-item pointer">
          <span class="material-icons l-pagination-icon"> arrow_right </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      categories: [
        { name: "所有甜點", qty: 18, path: "all-desserts" },
        { name: "本日精選", qty: 6, path: "desserts-of-the-day" },
        { name: "人氣推薦", qty: 6, path: "popular-recommendation" },
        { name: "新品上市", qty: 6, path: "new-arrival" },
      ],
      category: "",
      page: 1,
      key: 0,
    };
  },
  computed: {
    currentProducts: function () {
      const vm = this;
      let arr = [];
      if (vm.category === "所有甜點") {
        if (vm.page === 1) {
          arr = vm.products.slice(0, 6);
        } else if (vm.page === 2) {
          arr = vm.products.slice(6, vm.page * 6);
        } else if (vm.page === 3) {
          arr = vm.products.slice(12, vm.products.length);
        }
      } else {
        vm.products.forEach((item) => {
          if (item.category === vm.category) {
            arr.push(item);
          }
        });
      }
      return arr;
    },
    pagination: function () {
      if (this.category === "所有甜點") {
        return 3;
      } else {
        return 1;
      }
    },
  },
  methods: {
    updateData(item) {
      const vm = this;
      const ret = vm.products.find((itm) => {
        return itm.id === item.id;
      });
      ret.isFavorite = !ret.isFavorite;
      vm.key++;
    },
    addPage() {
      const vm = this;
      if (vm.page < 3) {
        vm.page++;
      }
    },
    lessPage() {
      const vm = this;
      if (vm.page > 1) {
        vm.page--;
      }
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
    const ret = vm.categories.find((item) => {
      return item.path === vm.$route.params.category;
    });
    vm.category = ret.name;
    vm.products.forEach((item) => {
      item.isFavorite = false;
    });
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/scss/pages/products.scss"
</style>
