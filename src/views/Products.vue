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
      <div class="flex-between flex-wrap">
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
      products: this.$parent.products,
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
    const ret = vm.categories.find((item) => {
      return item.path === vm.$route.params.category;
    });
    vm.category = ret.name;
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/scss/pages/products.scss"
</style>
