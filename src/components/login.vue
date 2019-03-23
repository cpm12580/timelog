<template>
<div>
    <div class="timll">
    <div class="log">
      <br>
      <br>
      <br>
        账号:<input type="text" v-model='username' name="" id="inp" placeholder="请输入账号">
        <br>
        <br>
        密码:  <input type="text" v-model='pwd' id="inp"  placeholder="请输入密码">
        <p><button>登陆</button></p>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data(){
    return{
      username:'',
      pwd:''
    }
  },
  methods:{
    login(){
      var _this=this;
      this.$axios({
        method:'post',
        url:'/api/admin?action=login',
        data:{
          username:_this.username,
          pwd:_this.pwd
        }
      }).then(function(res){
        if(res.data.success){
          if(res.data.data.admin){
            window.location.href="/home1"
          }else{
            window.location.href="/home2"
          }
        }
      })
    }
  }
};
</script>

<style scoped>
.timll {
  width: 500px;
  height: 300px;
  background: wheat;
  margin: 100px auto;
  border-radius: 8px;
  position: relative;
}
.log {
  width: 300px;
  height: 200px;
  background: red;
  /* margin: auto; */
  /* line-height: 100px; */
  position: absolute;
  top: 50px;
  left: 100px;
}

#inp {
  width: 150px;
  height: 25px;
  border-radius: 8px;
  border: 0;
  outline: none;
}
</style>
