<template>
  <div class="container sm-px0">
    <div v-if="cart.length" class="content" :key="key">
      <ul class="l-cartList">
        <li class="l-cartList-title">您的購物車</li>
        <li class="l-cartList-item" v-for="item in cart" :key="item.id">
          <div
            class="l-cartList-item-img"
            :style="{ 'background-image': `url(${item.imageUrl})` }"
          ></div>
          <div class="l-cartList-item-title">
            {{ item.title }}<br />NT$ {{ item.price }}
          </div>
          <div class="l-cartList-item-qty">
            <a
              href="#"
              @click.prevent="lessQty(item)"
              class="l-cartList-item-qty-btn"
              >-</a
            ><input
              class="l-cartList-item-qty-input"
              type="text"
              :value="item.qty"
            /><a
              href="#"
              @click.prevent="addQty(item)"
              class="l-cartList-item-qty-btn"
              >+</a
            >
          </div>
          <div class="l-cartList-item-totalPrice">
            NT$ {{ item.price * item.qty }}
          </div>
          <div
            @click="delProduct(item)"
            class="l-cartList-item-deleteBtn pointer sm-none"
          >
            <img src="~@/assets/images/ic-trash.svg" alt="" />
          </div>
        </li>
      </ul>
      <div class="l-order">
        <div class="l-order-title">訂單摘要</div>
        <div class="flex-between l-order-text">
          <span>小計</span>
          <span>NT$ {{ totalPrice }}</span>
        </div>
        <div class="flex-between l-order-text">
          <span>運費</span>
          <span>NT$ 300</span>
        </div>
        <div class="flex-between l-order-total">
          <span>總計</span>
          <span>NT$ {{ totalPrice + 300 }}</span>
        </div>
        <router-link to="/checkout" class="l-order-btn pointer">
          結帳
        </router-link>
      </div>
    </div>
    <div v-else class="col-md-12 text-center" style="margin: 30vh 0">
      <h2 class="mb-4 text-dark">當前購物車為空!</h2>
      <router-link to="/products/all-desserts" class="btn btn-link btn-lg"
        >去逛逛</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      key: 0,
      totalPrice: 0,
    };
  },
  methods: {
    lessQty(item) {
      if (item.qty > 1) {
        item.qty--;
      } else if (item.qty == 1) {
        this.delProduct(item);
      }
      this.getTotal();
    },
    addQty(item) {
      item.qty++;
      this.getTotal();
    },
    delProduct(item) {
      const vm = this;
      const i = vm.cart.findIndex((itm) => {
        return itm.id === item.id;
      });
      vm.cart.splice(i, 1);
      vm.$parent.updateCart(item);
      vm.getTotal();
    },
    getTotal() {
      const vm = this;
      let ret = 0;
      vm.cart.forEach((item) => {
        ret += item.price * item.qty;
      });
      vm.totalPrice = ret;
    },
  },
  created() {
    const vm = this;
    vm.cart = vm.$parent.cart;
    vm.getTotal();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/cart.scss";
</style>
