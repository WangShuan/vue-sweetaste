<template>
  <div>
    <form class="content">
      <div class="login">
        <h2 class="login-title">會員登入</h2>
        <div class="inputGroup">
          <label class="login-input-icon">
            <span class="material-icons"> person </span>
          </label>
          <input
            type="text"
            name="account"
            placeholder="電子信箱/手機號碼"
            class="login-input"
            required
            minlength="10"
          />
          <label class="login-input-icon">
            <span class="material-icons"> vpn_key </span>
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="請輸入使用者密碼"
            class="login-input"
            minlength="6"
          />
        </div>
        <div class="login-checkbox">
          <input type="checkbox" name="remember" /> 記住我
        </div>
        <input
          type="submit"
          class="login-btn pointer w-100 border-0"
          value="登入帳號"
        />
      </div>
      <div class="connect">
        <h3 class="connect-title sm-none">—— 連結社群帳號 ——</h3>
        <ul class="connect-btnGroup">
          <li class="connect-btnGroup-item pointer">
            <img
              class="connect-btnGroup-item-icon facebook"
              src="~@/assets/images/ic-facebook-logotype.svg"
              alt="facebook"
            />
          </li>
          <li class="connect-btnGroup-item pointer">
            <img
              class="connect-btnGroup-item-icon google"
              src="~@/assets/images/ic-google.svg"
              alt="google"
            />
          </li>
          <li class="connect-btnGroup-item pointer">
            <img
              class="connect-btnGroup-item-icon yahoo"
              src="~@/assets/images/ic-yahoo.svg"
              alt="yahoo"
            />
          </li>
        </ul>
      </div>
    </form>
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
@import "@/assets/scss/pages/login.scss";
</style>
