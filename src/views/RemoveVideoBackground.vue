<template>
  <div class="video-container" ref="container">
    <!-- 处理后的视频 -->
    <video class="video" ref="videoRef" :src="videoSrc"></video>
    <canvas class="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script>
export default {
  name: "ai-video",
  data() {
    return {
      canvasContext: null,
    };
  },
  props: {
    videoSrc: String,
    removeColors: Array,
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    muted: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    autoplay: {
      handler(newVal) {
        this.$refs.videoRef.autoplay = newVal;
      },
    },
    muted: {
      handler(newVal) {
        this.$ref.videoRef.muted = newVal;
      },
    },
    loop: {
      handler(newVal) {
        this.$ref.videoRef.loop = newVal;
      },
    },
  },

  mounted() {
    const canvas = this.$refs.canvasRef;
    const video = this.$refs.videoRef;
    this.canvasContext = canvas.getContext("2d", { willReadFrequently: true });
    video.autoplay = this.autoplay;
    video.muted = this.muted;
    video.loop = this.loop;
    video.addEventListener(
      "play",
      () => {
        const containerElement = this.$refs.container;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.style.width = containerElement.offsetWidth + "px";
        canvas.style.height = containerElement.offsetHeight + "px";
        setInterval(this.autoRender, 16);
      },
      false
    );
  },

  methods: {
    // 去除绿幕
    autoRender() {
      const video = this.$refs.videoRef;
      if (video.paused || video.ended) {
        return;
      }

      this.computeFrame();
    },

    //计算图像
    computeFrame() {
      const canvas = this.$refs.canvasRef;
      const video = this.$refs.videoRef;
      const { canvasContext } = this;
      const { width, height } = canvas;
      canvasContext.drawImage(video, 0, 0, width, height);
      const frame = canvasContext.getImageData(0, 0, width, height);
      const data = frame.data;
      this.removeColors.forEach((element) => {
        const [filterR, filterG, filterB, _range = 50] = element;
        let l = frame.data.length / 4;
        while (l--) {
          const r = data[l * 4];
          const g = data[l * 4 + 1];
          const b = data[l * 4 + 2];

          if (
            Math.abs(r - filterR) < _range &&
            Math.abs(g - filterG) < _range &&
            Math.abs(b - filterB) < _range
          ) {
            frame.data[l * 4 + 3] = 0;
          }
        }
      });

      canvasContext.putImageData(frame, 0, 0);
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .canvas {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 0;
  }
}
</style>