# filter-color-video-player

## 使用说明
```
0. 安装依赖
npm install filter-color-video-player
```
```
1. 在需要使用的vue文件中下引入
import FilterColorVideoPlayer from "filter-color-video-player"
import "filter-color-video-player/dist/style.css";
```

```
2. 使用标签嵌入组件
<FilterColorVideoPlayer
      videoSrc="1.mp4"
      :removeColors="[[3, 255, 0, 100]]"
      :muted="muted"
/>
```

## 去绿幕组件使用参数说明
【videoSrc：String】必填，传视频地址  
【removeColors：Array】必填，传需要去除的rgb颜色和颜色范围的数组。  
  Array中的每一项参数为[R,G,B,range]为设定一个颜色和范围，可传多个颜色，如[[R,G,B,range],[R,G,B,range],...]，R,G,B,range的值均为Number类型。  
  ⚠️range是对应rgb颜色误差值，误差值内的值都会删除，可不传默认为50，可根据颜色去除效果调整  
【autoplay:Boolean】可不填，默认为true，控制自动播放  
【loop:Boolean】可不填，默认为true，控制循环播放  
【muted:Boolean】可不填，默认为true，控制静音播放   


## 使用注意事项
   【视频宽高问题】处理后的画布宽高等于外层容器的宽高，设置父容器的定位以及宽高，即可控制视频的宽高 
   【有声视频自动播放问题】
⚠️ 由于浏览器限制，静音视频可以自动播放，非静音视频需要在用户与界面交互后才可播放 
为了自动播放，一开始请设置autoplay为true与muted为true，用户点击交互后设置muted为false，即可播放声音 


