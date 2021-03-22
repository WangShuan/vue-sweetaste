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

`views/Dashboard.vue` 是主要結構樣式 裡面放每個網址共用頭部、底部
