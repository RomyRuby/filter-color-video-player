<template>
  <!-- 去绿幕组件使用参数说明 -->
  <!-- 【videoSrc：String】必填，传视频地址 -->
  <!-- 【removeColors：Array】必填，传需要去除的rgb颜色和颜色范围的数组，数组参数[R,G,B,range]为设定一个颜色，可传多个颜色,range可不传默认为50，可根据颜色去除效果调整 -->
  <!-- 【autoplay:Boolean】可不填，默认为true，控制自动播放 -->
  <!-- 【loop:Boolean】可不填，默认为true，控制循环播放 -->
  <!-- 【muted:Boolean】可不填，默认为true，控制静音播放 -->
  <!-- 使用注意事项 -->
  <!-- 处理后的画布宽高等于宽外层容器的宽高 -->
  <!-- 由于浏览器限制，静音视频可以自动播放，非静音视频需要在用户与界面交互后才可播放 -->
  <div style="background-color: pink; width: 500px; height: 300px">
    <RemoveVideoBackground
      style="width: 300px; height: 400px"
      videoSrc="https://1302481062.vod-qcloud.com/2778fbfdvodcq1302481062/31545cbb1253642697417787986/3E67zy7wUF8A.mp4"
      :removeColors="[[255, 255, 255, 60]]"
    />
  </div>
</template>

<script>
import RemoveVideoBackground from "@/views/RemoveVideoBackground.vue";
export default {
  name: "app",
  components: {
    RemoveVideoBackground,
  },
};
</script>

<style>
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
