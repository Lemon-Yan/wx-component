# wx-component
微信小程序之自定义组件
 可以将常用的功能模块封装成组件，方便在项目中使用和修改，下面就参照微信小程序的文档分步骤写一个微信小程序的组件。

step1：创建文件并申明
与创建微信小程序的页面一样，一个自定义组件也需要json,wxml,wxss,js四个文件。
在项目根目录中创建文件夹，取名为：myComponent，在该目录下创建文件showModalDemo;（可以在开发工具中右键创建，选择component，默认自动会创建四个文件。）
然后在showModalDemo.json文件中写如下代码：在json文件中进行自定义组件声明
{
  "component": true
}

step2:在wxml中编写组件模板代码
<!-- 这是自定义组件的内部WXML结构 -->
<view class="inner">
  {{innerText}}
</view>


step3:针对该页面模板在showModalDemo中编写样式文件，样式可以根据需要自定义.注意：在组件wxss中不应使用ID选择器、属性选择器和标签名选择器。
/* 这里的样式只应用于这个自定义组件 */
.inner {
  color: red;
}


step4:编写业务逻辑，在自定义组件的 js 文件中，需要使用 Component() 来注册组件，组件的属性值和内部数据将被用于组件 wxml 的渲染，其中，属性值是可由组件外部传入的。

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})


step5:使用自定义组件
首先需要在需要使用的json文件中进行引用申明，然后需要提供每个自定义组件的标签名和对应的自定义组件文件路径。
如：
{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"  //在这里写上页面中自定义的标签名和自定义组件的文件路径
  }
}

其次，在页面的wxml中使用自定义组件：在页面的 wxml 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。
<view>
  <!-- 以下是对一个自定义组件的引用 -->
  <component-tag-name inner-text="Some text"></component-tag-name>
</view>

自定义组件的 wxml 节点结构在与数据结合之后，将被插入到引用位置内。


注意点：
对于基础库的1.5.x版本， 1.5.7 也有部分自定义组件支持。
因为WXML节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。
自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式（使用 usingComponents 字段）。
自定义组件和使用自定义组件的页面所在项目根目录名不能以“wx-”为前缀，否则会报错。
旧版本的基础库不支持自定义组件，此时，引用自定义组件的节点会变为默认的空节点。






自定义组件遇到的问题：
使用模板的时候需要在外层定义一个view，宽度设置为100%，外边框设置为margin:0 auto；不然样式回出现错乱的情况。






