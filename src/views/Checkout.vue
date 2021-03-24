<template>
  <div class="container sm-px0">
    <div v-if="!done" class="content">
      <div class="l-checkout" v-if="step === 1">
        <div class="flex-between">
          <div class="l-checkout-title float-left">運送</div>
          <div class="l-stepbarContent float-right">
            <ul class="l-stepbar">
              <li class="l-stepbar-item l-stepbar-item-active"></li>
              <li class="l-stepbar-item"></li>
              <li class="l-stepbar-item"></li>
            </ul>
          </div>
        </div>
        <form class="form" @submit.stop.prevent="checkForm(1)">
          <div class="w-100 flex-between">
            <div class="form-w50">
              <label class="form-label" for="fastname">姓氏</label>
              <input
                type="text"
                class="form-input"
                id="fastname"
                placeholder="王"
                required
                minlength="1"
              />
            </div>
            <div class="form-w50">
              <label class="form-label" for="lastname">名字</label>
              <input
                type="text"
                class="form-input"
                required
                id="lastname"
                placeholder="小明"
                minlength="1"
              />
            </div>
          </div>
          <div class="w-100">
            <label class="form-label" for="tel">電話</label>
            <input
              type="tel"
              class="form-input"
              id="tel"
              required
              placeholder="0912-345-678"
              minlength="7"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            />
          </div>
          <div class="w-100">
            <label class="form-label" for="address">地址</label>
            <div class="flex-between">
              <select
                v-model="checkstep1.city"
                id="city"
                class="form-input select-mb form-w50"
              >
                <option disabled selected value="">縣市</option>
                <option value="台北市">台北市</option>
                <option value="桃園縣">桃園縣</option>
                <option value="新竹市">新竹市</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="高雄市">高雄市</option>
              </select>
              <select
                v-model="checkstep1.area"
                id="area"
                class="form-input select-mb form-w50"
              >
                <option selected disabled value="">區</option>
                <option value="中山區">中山區</option>
                <option value="中正區">中正區</option>
                <option value="仁愛區">仁愛區</option>
              </select>
            </div>
            <input
              type="text"
              class="form-input"
              name=""
              id="address"
              required
              placeholder="幸福路 520 號"
              v-model="checkstep1.address"
              minlength="5"
            />
          </div>
          <input type="submit" class="form-submit" value="下一步" />
        </form>
      </div>

      <div class="l-checkout" v-if="step === 2">
        <div class="flex-between">
          <div class="l-checkout-title float-left">付款</div>
          <div class="l-stepbarContent float-right">
            <ul class="l-stepbar">
              <li class="l-stepbar-item l-stepbar-item-success">
                <span class="material-icons"> check_circle </span>
              </li>
              <li class="l-stepbar-item l-stepbar-item-active"></li>
              <li class="l-stepbar-item"></li>
            </ul>
          </div>
        </div>
        <form class="form" @submit.stop.prevent="checkForm(2)">
          <div class="w-100">
            <label class="form-label" for="cardNum">信用卡卡號</label>
            <input
              type="text"
              class="form-input"
              name=""
              id="cardNum"
              placeholder="9012-3456-7890-1234"
              pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
              required
            />
            <div class="input-icon">
              <span class="material-icons"> credit_card </span>
            </div>
          </div>
          <label class="form-label" for="fastname">持卡人姓名</label>
          <div class="w-100 flex-between">
            <div class="form-w50">
              <input
                type="text"
                class="form-input"
                name=""
                id="fastname"
                placeholder="王"
                required
                minlength="1"
              />
            </div>
            <div class="form-w50">
              <input
                type="text"
                class="form-input"
                name=""
                id="lastname"
                placeholder="小明"
                required
                minlength="1"
              />
            </div>
          </div>

          <div class="w-100">
            <label class="form-label" for="date">有效期限</label>
            <div class="flex-between">
              <select v-model="card.mm" id="month" class="form-input form-w50">
                <option selected disabled value="">月</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
              </select>
              <select v-model="card.yy" id="year" class="form-input form-w50">
                <option selected disabled value="">年</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
              </select>
            </div>
          </div>
          <div class="w-100">
            <label class="form-label" for="key">背面末三碼</label>
            <input
              type="text"
              class="form-input form-w50"
              name=""
              id="key"
              placeholder="123"
              pattern="[0-9]*"
              minlength="3"
              maxlength="3"
              required
            />
          </div>
          <input type="submit" class="form-submit" value="下一步" />
        </form>
      </div>

      <div class="l-checkout" v-if="step === 3">
        <div class="flex-between">
          <div class="l-checkout-title float-left">發票</div>
          <div class="l-stepbarContent float-right">
            <ul class="l-stepbar">
              <li class="l-stepbar-item l-stepbar-item-success">
                <span class="material-icons"> check_circle </span>
              </li>
              <li class="l-stepbar-item l-stepbar-item-success">
                <span class="material-icons"> check_circle </span>
              </li>
              <li class="l-stepbar-item l-stepbar-item-active"></li>
            </ul>
          </div>
        </div>
        <form class="form" @submit.stop.prevent="checkoutDone()">
          <div class="form-btnGroup">
            <button
              class="form-btn"
              @click="iseGUI = true"
              :class="{ 'form-btn-active': iseGUI }"
            >
              電子發票
            </button>
            <button
              class="form-btn"
              @click="iseGUI = false"
              :class="{ 'form-btn-active': !iseGUI }"
            >
              郵寄發票
            </button>
          </div>
          <template v-if="iseGUI">
            <div class="w-100">
              <label class="form-label" for="email">電子郵件信箱</label>
              <input
                type="email"
                class="form-input"
                name=""
                id="email"
                placeholder="example@email.com"
              />
            </div>
            <div class="w-100">
              <label class="form-label" for="taxId">統一編號（選填）</label>
              <input
                type="text"
                class="form-input"
                name=""
                id="taxId"
                placeholder="12345678"
              />
            </div>
          </template>
          <template v-else>
            <div class="w-100">
              <div class="flex-between">
                <label class="form-label" for="address">地址</label>
                <div><input type="checkbox" v-model="isSame" /> 同運送地址</div>
              </div>
              <div class="flex-between">
                <select
                  v-model="eGUI.city"
                  id="city"
                  class="form-input select-mb form-w50"
                >
                  <option disabled selected value="">縣市</option>
                  <option value="台北市">台北市</option>
                  <option value="桃園縣">桃園縣</option>
                  <option value="新竹市">新竹市</option>
                  <option value="苗栗縣">苗栗縣</option>
                  <option value="高雄市">高雄市</option>
                </select>
                <select
                  v-model="eGUI.area"
                  id="area"
                  class="form-input select-mb form-w50"
                >
                  <option selected disabled value="">區</option>
                  <option value="中山區">中山區</option>
                  <option value="中正區">中正區</option>
                  <option value="仁愛區">仁愛區</option>
                </select>
              </div>
              <input
                type="text"
                class="form-input"
                name=""
                id="address"
                required
                minlength="5"
                placeholder="幸福路 520 號"
                v-model="eGUI.address"
              />
            </div>
            <div class="w-100">
              <label class="form-label" for="taxId">統一編號（選填）</label>
              <input
                type="text"
                class="form-input"
                name=""
                id="taxId"
                placeholder="12345678"
              />
            </div>
          </template>
          <input type="submit" class="form-submit pointer" value="下一步" />
        </form>
      </div>

      <div class="orderSummaryContent">
        <div class="orderSummary">
          <div class="orderSummary-title">訂單摘要</div>
          <div class="orderSummary-body">
            <div class="flex-between orderSummary-text">
              <span>小計</span>
              <span>NT$ {{ totalPrice }}</span>
            </div>
            <div class="flex-between orderSummary-text">
              <span>運費</span>
              <span>NT$ 300</span>
            </div>
            <div class="flex-between orderSummary-boldText">
              <span>總計</span>
              <span>NT$ {{ totalPrice + 300 }}</span>
            </div>
          </div>
        </div>
        <div class="orderSummary orderSummary-mt">
          <ul class="orderSummary-list">
            <li class="orderSummary-list-title">購物清單</li>
            <li v-for="item in cart" :key="item.id" class="orderSummary-item">
              <div
                class="orderSummary-item-img"
                :style="{
                  'background-image': `url(${item.imageUrl})`,
                }"
              ></div>
              <div>
                <div class="orderSummary-item-title">
                  {{ item.title }} ({{ item.qty }})
                </div>
                <div class="orderSummary-item-totalPrice">
                  NT$ {{ item.price * item.qty }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="mainImg">
      <div class="mainImg-content">
        <div class="l-stepbarContent">
          <ul class="l-stepbar l-stepbar-success">
            <li class="l-stepbar-item">
              <span class="material-icons"> check_circle </span>
            </li>
            <li class="l-stepbar-item">
              <span class="material-icons"> check_circle </span>
            </li>
            <li class="l-stepbar-item">
              <span class="material-icons"> check_circle </span>
            </li>
          </ul>
        </div>
        <img
          src="~@/assets/images/lg-付款成功.svg"
          alt="付款成功"
          class="mainImg-titleImg"
        />
        <router-link to="/products/all-desserts" class="mainImg-btn">
          繼續逛逛
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      cart: [],
      key: 0,
      totalPrice: 0,
      step: 1,
      done: false,
      iseGUI: true,
      checkstep1: {
        city: "",
        area: "",
        address: "",
      },
      card: {
        mm: "",
        yy: "",
      },
      checkstep3: { email: "" },
      eGUI: { city: "", area: "", address: "" },
      isSame: false,
    };
  },
  watch: {
    isSame: function () {
      const vm = this;
      if (vm.isSame) {
        vm.eGUI.city = vm.checkstep1.city;
        vm.eGUI.area = vm.checkstep1.area;
        vm.eGUI.address = vm.checkstep1.address;
      }
    },
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
    checkoutDone() {
      const vm = this;
      if (vm.iseGUI) {
        if (vm.checkstep3.email) {
          vm.step = 1;
          vm.done = true;
          vm.$parent.cart = [];
          vm.$parent.totalQty = 0;
        } else {
          alert("請輸入電子郵件信箱！");
        }
      } else {
        if (!vm.eGUI.city) {
          return alert("請選擇縣市。");
        } else if (!vm.eGUI.area) {
          return alert("請選擇地區。");
        } else {
          vm.step = 1;
          vm.done = true;
          vm.$parent.cart = [];
          vm.$parent.totalQty = 0;
        }
      }
    },
    checkForm(step) {
      const vm = this;
      if (step === 1) {
        if (!vm.checkstep1.city) {
          return alert("請選擇縣市。");
        } else if (!vm.checkstep1.area) {
          return alert("請選擇地區。");
        } else {
          vm.step = step + 1;
        }
      } else if (step === 2) {
        if (!vm.card.mm) {
          return alert("請選擇有效期限月份。");
        } else if (!vm.card.yy) {
          return alert("請選擇有效期限年份。");
        } else {
          vm.step = step + 1;
        }
      }
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
@import "@/assets/scss/pages/checkout.scss";
</style>
