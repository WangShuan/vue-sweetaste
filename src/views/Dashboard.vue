<template>
  <div>
    <div class="container sm-px0" :key="key">
      <header>
        <div class="sm-none l-header">
          <router-link to="/">
            <img
              src="~@/assets/images/logo-all-dark.svg"
              class="l-header-logo"
              alt="LOGO"
            />
          </router-link>
          <div class="l-header-navbar float-right">
            <router-link to="/" class="l-header-navbar-item">
              首頁
            </router-link>
            <router-link
              to="/products/all-desserts"
              class="l-header-navbar-item"
            >
              甜點
            </router-link>
            <router-link to="/login" class="l-header-navbar-item">
              登入
            </router-link>
            <router-link to="/cart" class="l-header-navbar-item positionIcon">
              <span class="material-icons"> shopping_cart </span>
              <small v-if="totalQty > 0" class="cartBadge bg-secondary">{{
                totalQty
              }}</small>
            </router-link>
          </div>
        </div>

        <div class="sm-block l-header">
          <img
            src="~@/assets/images/logotype.svg"
            class="l-header-logo"
            alt="LOGO"
          />
          <div class="flex-between">
            <a href="#" class="l-header-icon">
              <span class="material-icons"> dehaze </span>
            </a>
            <a class="l-header-icon" href="/views/cart.html">
              <span class="material-icons"> shopping_cart </span>
            </a>
          </div>
        </div>
      </header>
    </div>
    <router-view :key="$route.path"></router-view>
    <footer class="l-footer">
      <div class="l-footer-bgDark">
        <div>
          <img
            src="~@/assets/images/logo-light.svg"
            alt="LOGO"
            class="l-footer-bgDark-logo"
          />
          <span class="l-footer-bgDark-text">訂閱你我的甜蜜郵件</span>
        </div>
        <div class="l-footer-bgDark-input">
          <img
            src="~@/assets/images/ic-email.svg"
            alt="email icon"
            class="input-icon-left"
          />
          <input type="text" class="input" />
          <a class="input-btn" href="#">
            <img
              src="~@/assets/images/ic-arrow.svg"
              alt="button icon"
              class="input-icon-right"
            />
          </a>
        </div>
      </div>
      <div class="l-footer-bgLight">
        <div class="l-footer-bgLight-left">
          <img
            src="~@/assets/images/logotype.svg"
            alt="LOGO"
            class="l-footer-bgLight-logo"
          />
          <div class="l-footer-bgLight-textContent">
            <span class="textContent-text">
              07-1234-5678<br />
              sweetaste@email.com<br />
              800 高雄市新興區幸福路 520 號
            </span>
            <a href="#"
              ><img
                class="textContent-icon"
                src="~@/assets/images/ic-line@.svg"
                alt="line icon"
            /></a>
            <a href="#"
              ><img
                class="textContent-icon ml-1"
                src="~@/assets/images/ic-facebook.svg"
                alt="facebook icon"
            /></a>
          </div>
        </div>
        <div class="l-footer-bgLight-right">
          <img
            src="~@/assets/images/sm-今天是個吃甜點的好日子.svg"
            alt="今天是個吃甜點的好日子"
            class="l-footer-bgLight-titleImg sm-none"
          />
          <span class="l-footer-bgLight-copyright"
            >© 2018 Sweetaste* All Rights Reserved</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      key: 0,
      totalQty: 0,
    };
  },
  methods: {
    addCart(item) {
      const vm = this;
      vm.cart.push(item);
      vm.totalQty++;
      vm.key++;
    },
    updateCart(item) {
      this.cart.filter((itm) => {
        if (itm.id === item.id) {
          const i = this.cart.findIndex((it) => {
            return it.id === item.id;
          });
          this.cart.splice(i, 1);
        }
      });
      this.totalQty -= item.qty;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/pages/dashboard.scss";
</style>
