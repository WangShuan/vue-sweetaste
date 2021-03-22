<template>
  <div>
    <div class="col-md-12 text-center" style="margin: 30vh 0">
      <h1 class="d-block text-danger">404 errow!</h1>
      <div class="mb-4 lead text-dark">{{ errowMsg }}</div>
      <router-link to="/" class="btn btn-link">點我回首頁</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errowMsg: "您所查詢的網址不存在，請重試。",
    };
  },
};
</script>

<style></style>
