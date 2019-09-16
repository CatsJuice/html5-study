# 微信小程序课程表Demo

## 截图

!["运行截图"](https://catsjuice.cn/h5-study/imgs/2019-09-16021930.jpg "运行截图")

## 代码

### wxml

```html
<view id="root">
  <!-- 左边侧边栏 -->
  <view class="col">
    <view class="row-head">
      <text>\n</text>
    </view>
    <view wx:for="{{serial_number}}" wx:for-item="number" class="col-head">
      {{ number }}
    </view>
  </view>
  <view wx:for="{{ days }}" wx:for-item='day' class='col'>
    <view class="row-head">{{ day }}</view>
  </view>

  <view id="content">
    <view wx:for="{{ list }}" wx:for-index="day" wx:for-item="classes">
      <view wx:for="{{ classes }}" wx:for-item="class">
        <view class="list-item" style="left: {{ (day-1)*93.75 + 'rpx' }};top: {{ ((class.start-1)*100) + 'rpx'}}; height: {{ (class.end-class.start + 1)*100-4 + 'rpx' }}; background-color: {{ class.color }}">
          <text>{{ class.name + "\n" + class.room}}</text>
        </view>
      </view>
    </view>
  </view>
</view>
```

其中关键的定位代码段：

```html
<view wx:for="{{ list }}" wx:for-index="day" wx:for-item="classes">
    <view wx:for="{{ classes }}" wx:for-item="class">
    <view class="list-item" style="left: {{ (day-1)*93.75 + 'rpx' }};top: {{ ((class.start-1)*100) + 'rpx'}}; height: {{ (class.end-class.start + 1)*100-4 + 'rpx' }}; background-color: {{ class.color }}">
        <text>{{ class.name + "\n" + class.room}}</text>
    </view>
    </view>
</view>
```


### wxss

```css
#root {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  /* overflow: scroll; */
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
}
#root>.col {
  width: 93.75rpx;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
}
.col:nth-last-child(1) {
  border-right: none;
}

.col-head,
.row-head {
  /* background-color: #f6f6f6 !important; */

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: bold;
  color: #707070;
  height: 100rpx !important;
  flex-shrink: 0;
  flex-grow: 0;
}
.row-head {
  position: sticky;
  background-color: #fff;
  top: 0;
  z-index: 1;
}

#content {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 93.75rpx;
  top: 100rpx;
  /* background-color: aquamarine; */
}

.list-item {
  /* width: 93.75rpx; */
  width: 85.75rpx;
  padding: 0 2.5rpx;
  /* margin: 2rpx 1.5rpx; */
  border-radius: 5px;
  font-size: 20rpx;
  color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

}

.bg-row {
  width: 656.25rpx;
  height: 98rpx;
  display: flex;
  flex-direction: row;
  /* border-bottom: 2rpx solid #f0f0f0; */
}
.bg-col {
  width: 91.75rpx;
  height: 100rpx;
  /* border-right: 2rpx solid #f0f0f0; */
}
.bg-col:nth-last-child(1) {
  width: 93.75rpx;
  border-right: none;
}
```

### JS

```js
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    serial_number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    list: undefined
  },
  onLoad: function() {
    this.load_class_list();
  },
  load_class_list() {
    wx.request({
      url: 'http://h5.catsjuice.cn/getClassList',
      data: {},
      success: (res) => {
        this.setData({
          list: res.data
        })
      },
      fail: (res) => {
        console.log(res.data)
      }
    })

  }
})
```