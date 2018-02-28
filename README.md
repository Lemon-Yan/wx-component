

最近在项目开发中，遇到好多雷同的页面样式，就想着可以将常用的功能模块封装成组件，方便在项目中使用和修改，下面就参照微信小程序的文档分步骤写一个微信小程序的组件。

附上效果图：

![自定义组件效果图.png](http://upload-images.jianshu.io/upload_images/4041074-2439ca00b908b84f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## step1：创建文件并申明

与创建微信小程序的页面一样，一个自定义组件也需要json,wxml,wxss,js四个文件。

在项目根目录中创建文件夹，取名为：component，在该目录下继续创建文件夹successModal。

可以在开发工具中右键创建，选择component，默认自动会创建四个文件。如图：
![新建文件.png](http://upload-images.jianshu.io/upload_images/4041074-171217930a479f26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在successModal.json文件中进行自定义组件声明，如：

在开发工具中右键新建选择component，默认自动会创建。
```
{
  "component": true,
  "usingComponents": {}
}
```
## step2:编写组件模板代码
```
<!-- 这是自定义组件的内部WXML结构 success.wxml-->
<view class='modal-section' wx:if="{{modalHidden}}">
  <view class='modal-opaci' bindtap='modal_click_Hidden'></view>
  <view class='modal-cont'>
    <icon type='{{modalIcon}}' size='70'></icon>
    <text class='modal-titleTxt {{modalIcon}}'>{{modalTitle}}</text>
    <text class='success-msg'>{{modalDesc}}</text>
  </view>
</view>
```
## step3:编写样式文件
```
/* 这里的样式只应用于这个自定义组件 */
/*successModal.wxss*/
.modal-opaci {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.4;
  filter: alpha(opacity=40);
}

.modal-cont {
  position: fixed;
  top: 30%;
  left: 8.5%;
  z-index: 999;
  border-radius: 20rpx;
  padding: 40rpx 150rpx;
  background-color: #fff;
  text-align: center;
}

.modal-cont text {
  line-height: 90rpx;
  display: block;
}

.success {
  color: #09bb07;
}

.modal-titleTxt {
  font-size: 50rpx;
  font-weight: 700;
}

.warn {
  color: #f76260;
}
```
## step4:编写业务逻辑

在自定义组件的 js 文件中，需要使用 Component() 来注册组件，组件的属性值和内部数据将被用于组件 wxml 的渲染，其中，属性值是可由组件外部传入的。

```
//successModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //这里定义了modalHidden属性，属性值可以在组件使用时指定.写法为modal-hidden  
    modalHidden: {
      type: Boolean,
      value: true
    },
    modalIcon: {
      type: String,
      value: ' ',
    },
    modalTitle: {
      type: String,
      value: ' ',
    },
    modalDesc: {
      type: String,
      value: ' ',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 这里是自定义方法
    modal_click_Hidden: function () {
      this.setData({
        modalHidden: false,
      })
    },
  }
})
```
## step5:使用自定义组件
首先在需要使用的json文件中进行引用申明，然后需要提供每个自定义组件的标签名和对应的自定义组件文件路径。
```
//index.json
{
  "usingComponents": {
    "modal-success": "../../component/successModal/successModal" //在这里写上页面中自定义的标签名和自定义组件的文件路径
  },
  "navigationBarTitleText": "首页"
}
```
其次，在页面的wxml中使用自定义组件：在页面的 wxml 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。
```
<!--index.wxml-->
<view class="container">
  <view class="demoBtn" bindtap="bindViewTap">
    <text>点击</text>
  </view>

  <!-- 调用modal组件 -->
  <modal-success modal-hidden="{{is_modal_Hidden}}" modal-icon="{{is_modal_icon}}" modal-title="{{is_modal_title}}" modal-desc="{{is_modal_desc}}" />
</view>
```
 

#### 注意点：

- 对于基础库的1.5.x版本， 1.5.7 也有部分自定义组件支持。
- 因为WXML节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。
- 自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式（使用 usingComponents 字段）。
- 自定义组件和使用自定义组件的页面所在项目根目录名不能以“wx-”为前缀，否则会报错。
- 旧版本的基础库不支持自定义组件，此时，引用自定义组件的节点会变为默认的空节点。

  
