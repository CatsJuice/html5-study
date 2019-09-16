var express = require('express');
var router = express.Router();

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
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json(data);
});

module.exports = router;
