<template>
  <view class="container">
    <text class="text-color-primary">Homooo</text>
        <text-input
        :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
        v-model="text"
      />
          <text-input
        :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
        v-model="password"
      />
      <button title="click for aids" :on-press="showData"></button>
  </view>
</template>


<script>
import { Alert } from 'react-native';
export default {
  data(){
    return{
      text : "",
      password: ""
    }
  },
    methods:{
      showData : function(){
        
            Alert.alert(
                'System',
                `Hello ${this.text}, your password is ${this.password}`,
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => alert('u press ok')},
                ],
                { cancelable: false }
            );
        
        }
    }
  
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
