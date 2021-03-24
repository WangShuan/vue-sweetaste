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
          <router-link to="/">
            <img
              src="~@/assets/images/logotype.svg"
              class="l-header-logo"
              alt="LOGO"
            />
          </router-link>
          <div class="flex-between">
            <div class="dropdown">
              <button
                class="l-header-icon bg-transparent border-0"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="material-icons"> dehaze </span>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <router-link to="/" class="dropdown-item"> 首頁 </router-link>
                <router-link to="/products/all-desserts" class="dropdown-item">
                  甜點
                </router-link>
                <router-link to="/login" class="dropdown-item">
                  登入
                </router-link>
              </div>
            </div>
            <router-link class="l-header-icon" to="/cart">
              <span class="material-icons"> shopping_cart </span>
            </router-link>
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
      products: [
        {
          category: "本日精選",
          id: "-Wksl_mamnasde4HiNeU",
          imageUrl: "https://bit.ly/2QbVsVR",
          price: "120",
          title: "藍莓布丁",
          unit: "杯",
        },
        {
          category: "本日精選",
          id: "-213lhk-mxooxosad",
          imageUrl:
            "https://images.unsplash.com/photo-1611524021194-c6acb2df869f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
          price: "130",
          title: "栗子派",
          unit: "個",
        },
        {
          category: "新品上市",
          id: "-Wksl_mamnasde4qweseU",
          imageUrl:
            "https://images.unsplash.com/photo-1603032305813-be7441bc1037?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
          price: "160",
          title: "黑糖蛋糕",
          unit: "個",
        },
        {
          category: "新品上市",
          id: "-Wldl_12mcl123d38hdw",
          imageUrl: "https://bit.ly/2Dwoxd7",
          price: "389",
          title: "6吋塔塔乳酪",
          unit: "個",
        },
        {
          category: "本日精選",
          id: "-Wksl_mamn2zBjQuqaseU",
          imageUrl: "https://bit.ly/2zBjQuq",
          price: "60",
          title: "招牌多那茲",
          unit: "個",
        },
        {
          category: "新品上市",
          id: "-Wksl_mamnasde42zBDAxX",
          imageUrl: "https://bit.ly/2zBDAxX",
          price: "130",
          title: "蔓越莓蛋糕",
          unit: "塊",
        },
        {
          category: "人氣推薦",
          id: "-Wksl_2zKOP7we4HiNeU",
          imageUrl: "https://bit.ly/2zKOP7w",
          price: "150",
          title: "草莓田園派",
          unit: "個",
        },
        {
          category: "人氣推薦",
          id: "-weqljkljlk-wemcxzpiwq",
          imageUrl: "https://bit.ly/2QiWeQW",
          price: "120",
          title: "綜合水果布丁",
          unit: "杯",
        },
        {
          category: "人氣推薦",
          id: "-Wksl_2zKOP7wqwqwiNeU",
          imageUrl: "https://bit.ly/2QvsT63",
          price: "359",
          title: "8吋精緻草莓蛋糕",
          unit: "個",
        },
        {
          category: "本日精選",
          id: "-LTfl_mamnXPZe4HiNeU",
          imageUrl:
            "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "100",
          title: "蘋果派",
          unit: "個",
        },
        {
          category: "新品上市",
          id: "-LTfjzg97eB1MDOMDNWR",
          imageUrl:
            "https://images.unsplash.com/photo-1542691505-5599a182d9c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "88",
          title: "圓環蛋糕",
          unit: "個",
        },
        {
          category: "人氣推薦",
          id: "-LTfj2zuBLXmySiYIRfB",
          imageUrl:
            "https://images.unsplash.com/photo-1497799716125-986f8ad4f873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "20",
          title: "香草馬卡龍",
          unit: "個",
        },
        {
          category: "本日精選",
          id: "-LTfiYP7VebPCgBM2IjN",
          imageUrl:
            "https://images.unsplash.com/photo-1530968313155-63d6a989fc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "50",
          title: "草莓優格",
          unit: "個",
        },
        {
          category: "新品上市",
          id: "-LS0K8o7lT_reWz4oUbp",
          imageUrl:
            "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8a0cdf8b8d1cfb1c8042a1acc558a00&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "60",
          title: "布朗尼",
          unit: "個",
        },
        {
          category: "人氣推薦",
          id: "-LS0Bo6yCPa2-7GABc9e",
          imageUrl:
            "https://images.unsplash.com/photo-1517741858398-433087302cf4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6d8ef3274f90e069b34f0c517923f32&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "130",
          title: "蜂蜜鬆餅",
          unit: "個",
        },
        {
          category: "本日精選",
          id: "-LS07rMqp7UzFGPw6enD",
          imageUrl:
            "https://images.unsplash.com/photo-1422207239328-29f83832206c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f00eac866bbea1b6ab3d19ddb2de6fd&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "25",
          title: "巧克力豆餅乾",
          unit: "個",
        },
        {
          category: "新品上市",
          id: "-LS06pZa7DQ-kHcqALQ0",
          imageUrl:
            "https://images.unsplash.com/photo-1471478108131-9b2335c21611?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ff8f58159afd9410f46bf644d470c59&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "120",
          title: "奶油鬆餅",
          unit: "個",
        },
        {
          category: "人氣推薦",
          id: "-LRzzdMeQn41NzmWs6ct",
          imageUrl:
            "https://images.unsplash.com/photo-1505418949117-f2176f78c47a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6b7f67bdb8fd4d9891cf806df6b16d1&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          price: "30",
          title: "可頌麵包",
          unit: "個",
        },
      ],
    };
  },
  methods: {
    addCart(item) {
      const vm = this;
      const obj = { ...item, qty: 1 };
      if (vm.cart.length) {
        let ret = vm.cart.find((itm) => {
          return itm.id === obj.id;
        });
        if (ret) {
          ret.qty += 1;
        } else {
          vm.cart.push(obj);
        }
      } else {
        vm.cart.push(obj);
      }
      vm.totalQty = vm.cart.length;
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
      this.totalQty--;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/pages/dashboard.scss";
</style>
