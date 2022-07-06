<template>
  <div>
    <h1 class="hh">
      {{ name }}
    </h1>
    <img :src="img" alt="" srcset="" hh="112" />
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import img from '@/asset/1638021218679.jpg'

export default defineComponent({
  data() {
    return {
      img,
      name: 'Hello World!',
    }
  },
})
</script>

<style>
h1 {
  color: white;
  background-color: black;
}
</style>
<style lang="less">
@import "@/index.less";
@primary-color: white;
@bg: black;

h1 {
  color: @primary-color;
  background-color: @bg;
}
</style>
