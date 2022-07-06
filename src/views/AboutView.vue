<template>
  <div class="hh">about</div>
  {{name}}--{{age}}--{{userInfo.doubleAge}}
  <button @click="increaseAge">+1</button>
  <button @click="changeUserInfo">change</button>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import {userInfoStore} from "@/store/index"

const userInfo =userInfoStore()
const { name, age } = storeToRefs(userInfo)
const increaseAge = () => {
   userInfo.increaseAge()
}
const changeUserInfo = () =>{
  userInfo.$patch({
    name: "zwc111",
    age:userInfo.age +3
})
}
</script>

<style lang="less" scoped>
.hh {
position: relative;
color: #f00;

}
</style>
