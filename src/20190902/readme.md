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
    let data = {
      1: [{
          'id': 1,
          'color': '#EC7063',
          'start': 1,
          'end': 2,
          'name': '高等数学A2',
          'room': 'B201'
        },
        {
          'id': 2,
          'color': '#5D6D7E',
          'start': 3,
          'end': 5,
          'name': '离散数学',
          'room': 'C205'
        },
        {
          'id': 3,
          'color': '#52BE80',
          'start': 6,
          'end': 8,
          'name': 'HTML5移动应用开发',
          'room': 'D206'
        },
        {
          'id': 4,
          'color': '#F4D03F',
          'start': 10,
          'end': 12,
          'name': 'JSP程序设计',
          'room': 'C201'
        }
      ],
      2: [{
          'id': 5,
          'color': '#5DADE2',
          'start': 3,
          'end': 4,
          'name': '高等数学A2',
          'room': 'B201'
        },
        {
          'id': 6,
          'color': '#AF7AC5',
          'start': 6,
          'end': 7,
          'name': '企业网络方案',
          'room': 'E308'
        }
      ],
      3: [{
          'id': 7,
          'color': '#48C9B0',
          'start': 1,
          'end': 5,
          'name': 'JavaEE程序设计',
          'room': '笃行楼405'
        },
        {
          'id': 13,
          'color': '#34495E',
          'start': 10,
          'end': 11,
          'name': '编译原理',
          'room': '笃行楼405'
        }
      ],
      4: [{
          'id': 8,
          'color': '#273746',
          'start': 3,
          'end': 5,
          'name': 'C++高级程序设计',
          'room': 'C201'
        },
        {
          'id': 9,
          'color': '#F4D03F',
          'start': 6,
          'end': 8,
          'name': 'C语言程序设计',
          'room': 'B401'
        }
      ],
      5: [{
          'id': 10,
          'color': '#CD6155',
          'start': 1,
          'end': 2,
          'name': '体育',
          'room': ''
        },
        {
          'id': 11,
          'color': '#45B39D',
          'start': 3,
          'end': 4,
          'name': '英语-阅读',
          'room': 'E201'
        },
        {
          'id': 12,
          'color': '#EC7063',
          'start': 6,
          'end': 8,
          'name': 'PHP程序设计',
          'room': 'B305'
        },
      ],
      6: [{
        'id': 14,
        'color': '#3498DB',
        'start': 1,
        'end': 5,
        'name': 'java程序语言设计课程实践',
        'room': '笃行楼308'
      },
        {
          'id': 15,
          'color': '#58D68D',
          'start': 8,
          'end': 12,
          'name': '计算机组成原理课程实践',
          'room': '笃行楼405'
        }],
      7: [{
        'id': 16,
        'color': '#F5B041',
        'start': 3,
        'end': 8,
        'name': '嵌入式课程实践',
        'room': '笃行楼406'
      }]
    };

    this.setData({
      list: data
    })
  }
})
```