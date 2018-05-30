$(function () {
  var content = new Vue({
    el: '#content',
    data: {
      // 编程网站
      program: [
        {title: 'Node.js', url: 'https://nodejs.org/en/', img: 'images/NodeJs.png'},
        {title: 'React', url: 'https://facebook.github.io/react/', img: 'images/React.png'},
        {title: 'Vue.js', url: 'https://cn.vuejs.org', img: 'images/VueJs.png'},
        {title: 'Bootstrap', url: 'http://www.bootcss.com', img: 'images/Bootstrap.png'},
        {title: 'Python', url: 'https://www.python.org', img: 'images/Python.png'},
        {title: 'Java', url: 'https://www.java.com/', img: 'images/java.png'},
        {title: 'GitHub', url: 'https://github.com', img: 'images/GitHub.png'},
        {title: 'Homebrew', url: 'https://brew.sh/index_zh-cn.html', img: 'images/Homebrew.png'},
        {title: 'Gradle', url: 'https://gradle.org/', img: 'images/gradle.png'},
        {title: 'Docker', url: 'https://www.docker.com', img: 'images/docker.png'},

      ],
      // 设计网站
      design: [
        {title: 'dribbble', url: 'https://dribbble.com', img: 'images/dribbble.png'},
        {title: '花瓣', url: 'http://huaban.com', img: 'images/花瓣.png'},
        {title: 'EasyIcon', url: 'http://www.easyicon.net', img: 'images/EasyIcon.png'},
        {title: 'NIPPON COLORS', url: 'http://nipponcolors.com', img: 'images/NIPPON COLORS.png'},
        {title: 'iconfont', url: 'http://www.iconfont.cn', img: 'images/Iconfont.png'},
      ],
      // 教程网站
      course: [
        {title: '慕课网', url: 'http://www.imooc.com', img: 'images/慕课网.png'},
        {title: '网易云课堂', url: 'http://study.163.com/', img: 'images/网易云课堂.png'},
        {title: '网易公开课', url: 'https://open.163.com', img: 'images/网址.png'},
        {title: '我要自学网', url: 'http://www.51zxw.net/study.asp?vip=4754485', img: 'images/我要自学网.png'},
        {title: '好多视频网', url: 'http://haoduoshipin.com', img: 'images/网址.png'},
        {title: '菜鸟教程', url: 'http://www.runoob.com', img: 'images/菜鸟教程.png'},
        {title: '廖雪峰的官方网站', url: 'http://www.liaoxuefeng.com', img: 'images/网址.png'},
      ],
      // 在线工具
      tools: [
        {title: '程序员在线工具', url: 'http://www.ofmonkey.com', img: 'images/程序员在线工具.png'},
        {title: '程序员的工具箱', url: 'https://tool.lu', img: 'images/程序员的工具箱.png'},
        {title: '在线工具', url: 'http://tool.oschina.net', img: 'images/网址.png'},
        {title: '正则表达式', url: 'https://regexper.com', img: 'images/网址.png'},
        {title: '文档转换器', url: 'https://convertio.co/zh/', img: 'images/文档转换器.png'},
        {title: '草料二维码', url: 'http://cli.im', img: 'images/草料二维码.png'},
      ],
      // 论坛
      bbs: [
        {title: 'Chiphell', url: 'https://www.chiphell.com/', img: 'images/chiphell.png'},
        {title: '知乎', url: 'https://www.zhihu.com/', img: 'images/知乎.png'},
        {title: '机锋论坛', url: 'http:bbs.gfan.com', img: 'images/机锋论坛.png'},
        {title: '数字尾巴', url: 'http://www.dgtle.com/', img: 'images/数字尾巴.png'}
      ],
      // 博客
      blog: [
        {title: '阮一峰的网络日志', url: 'http://www.ruanyifeng.com/blog/', img: 'images/网址.png'},
        {title: 'YouMeek', url: 'http://www.youmeek.com', img: 'images/youmeek.png'}
      ],
      // 影音
      media: [
        {title: 'bilibili', url: 'https://www.bilibili.com', img: 'images/bilibili.png'},
        {title: 'YouTube', url: 'https://www.youtube.com', img: 'images/YouTube.png'},
        {title: '优酷', url: 'http://www.youku.com', img: 'images/优酷.png'},
        {title: '美剧天堂', url: 'http://www.meijutt.com', img: 'images/网址.png'},
        {title: 'CCTV', url: 'http://tv.cctv.com', img: 'images/CCTV.png'},
      ],
      // 地图网站
      map: [
        {title: '高德地图', url: 'http://ditu.amap.com', img: 'images/高德地图.png'},
        {title: 'Google地图', url: 'http://www.google.cn/maps/', img: 'images/Google地图.png'},
        {title: 'Google地球', url: 'https://www.google.com/earth/', img: 'images/Google地球.png'}
      ],
      // 应用下载
      app: [
        {title: 'Mac应用推荐', url: 'http://wangchujiang.com/awesome-mac/index.zh.html', img: 'images/网址.png'},

      ],
      // 搜索网站
      search: [
        {title: '虫部落', url: 'http://magnet.chongbuluo.com', img: 'images/虫部落.png'},
        {title: '电子书搜索', url: 'https://www.jiumodiary.com', img: 'images/网址.png'},
      ],
      // 其他网站
      others: [
        {title: '书伴', url: 'https://bookfere.com', img: 'images/书伴.png'},
      ]
    }
  })
})
