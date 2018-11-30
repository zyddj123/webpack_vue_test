<template>
  <div class="form-inline">
    <div class="form-group">
      <label>username</label>
      <input type="text" v-model="username" class="form-control">
    </div>
    <div class="form-group">
      <label>passowrd</label>
      <input type="password" v-model="password" class="form-control">
    </div>
    <div class="form-group">
      <input type="button" @click="login" class="btn btn-success" value="登录">
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
export default {
  data: function() {
    return { username: "", password: "", res: "" };
  },
  methods: {
    login() {
      axios
        .post(
          "../../login.php",
          qs.stringify({
            username: this.username,
            password: this.password
          })
        )
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.res = response.data;
          }
          alert(this.res ? "登录成功" : "登录失败");
        });
    }
  }
};
</script>
<style>
</style>


