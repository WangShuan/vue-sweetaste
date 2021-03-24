# vue-sweetaste

## 創建項目

```shell
# 創建項目目錄
vue create vue-sweetaste
# 選擇需要的設定
 ◉ Choose Vue version
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◯ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
# 依序的問題回答如下
❯ 2.xx
❯ Yes
❯ Sass/SCSS (with dart-sass)
❯ ESLint + Prettier
❯ Lint on save
❯ In dedicated config files
```

## 安裝依賴

有用到 bootstrap 的某些樣式 所以需要安裝 `bootstrap` `popper.js` `jquery`

有用到 ajax 所以需要安裝 `axios` `vue-axios@2.1.5`

## 項目結構

`views/Dashboard.vue` 是主要結構 裡面放每個網址共用頭部、底部 以及所有商品資料

`view/Home.vue` 是首頁 裡面使用 random 隨機抓取首頁最下方三個卡片的商品

`view/Products.vue` 是產品頁面 使用 computed 切換當前顯示的商品類別

`view/Cart.vue` 是購物車頁面 左方式購買商品列表 右方是價格列表 點擊結帳即可前往 Checkout 頁面

`view/Checkout.vue` 是結帳頁面 通過 bootstrap 的表單驗證加手寫 js 驗證表單是否填寫 再執行下一步 切換顯示的表單

`view/Login.vue` 是登入頁面 僅使用 bootstrap 驗證 其他功能皆無

`view/400.vue` 處理錯誤網址頁面
