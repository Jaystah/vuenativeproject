<template>
  <view class="container">
    <text class="heading">Login</text>
    <text-input placeholder="Username..." v-model="username" :style="styles.textInputStyles"></text-input>
    <text-input placeholder="Password..." v-model="password" :style="styles.textInputStyles"></text-input>
        <touchable-opacity :on-press="login" class='btn' :style="styles.loginBtn">
      <text :style="{color: 'white'}">Login</text>
    </touchable-opacity>
  </view>
</template>
<script>
export default {
  data(){
    return {
      username: "",
      password: "",
      styles:{
        textInputStyles : {
          height: 30, width: 200, borderColor: 'gray', borderWidth: 1,borderRadius:10,textAlign: 'center',marginTop: 5
        },
        loginBtn : {
         // borderWidth: 1,
          borderRadius: 20,
          borderColor: 'gray',
          paddingTop: 10,
          paddingRight: 40,
          paddingLeft: 40,
          paddingBottom: 10,
          marginTop: 10,
          backgroundColor: '#ac76e3',
          
        }
      }
    }
  },
  methods :{
    login : function () {
      fetch('https://vueserverapi.herokuapp.com/login').then(data=>data.json()).then(res=>{
        alert(res.message);
      })
  }
}
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin: 20px;
}
</style>