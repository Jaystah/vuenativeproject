<template>

  <app-navigator></app-navigator>
  
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.mainTitle {
  color: blue;
  font-family: "Courier New", Courier, monospace;
  font-size: 32px;
}

.growth-animated-view {
  background-color: "rgb(0, 138, 231)";
  align-self: center;
}

.container {
  justify-content: center;
  flex: 1;
}
.txt {
  height: 40;
  width: 200;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 20;
  text-align: center;
}
.stdBtn {
  background-color: red;
}
</style>
<script>
import { Alert, Animated, Easing } from "react-native";
import {
  createAppContainer,
  createMaterialBottomTabNavigator,
} from "vue-native-router";

import HomeScreen from "./screens/HomeScreen.vue";
import LoginScreen from "./screens/LoginScreen.vue";
import SettingsScreen from "./screens/SettingsScreen.vue";

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Settings: SettingsScreen,
});
const AppNavigator = createAppContainer(MaterialBottomTabNavigator);

export default {
  components: {
    AppNavigator,
  },
  data() {
    return {
      text: "",
      password: "",
    };
  },
  methods: {
    showData: function () {
      Alert.alert(
        "System",
        `Hello ${this.text}, your password is ${this.password}`,
        [
          {
            text: "Ask mme later",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => alert("u press ok") },
        ],
        { cancelable: false }
      );
    },
  },
};
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
