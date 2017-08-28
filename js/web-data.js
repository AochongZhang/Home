$(function () {
  var content = new Vue({
    el: '#content',
    data: {
      program: [
        {title: 'Node.js', url: 'https://nodejs.org/en/', img: 'images/NodeJs.png'},
        {title: 'React', url: 'https://facebook.github.io/react/', img: 'images/React.png'},
        {title: 'Vue.js', url: 'https://cn.vuejs.org', img: 'images/VueJs.png'},
        {title: 'Bootstrap', url: 'http://www.bootcss.com', img: 'images/Bootstrap.png'},
        {title: 'Python', url: 'https://www.python.org', img: 'images/Python.png'},
        {title: 'GitHub', url: 'https://github.com', img: 'images/GitHub.png'},
        {title: 'Homebrew', url: 'https://brew.sh/index_zh-cn.html', img: 'images/Homebrew.png'},
        {title: '程序员在线工具', url: 'http://www.ofmonkey.com', img: 'images/程序员在线工具.png'},
      ],
      design: [
        {title: 'EasyIcon', url: 'http://www.easyicon.net', img: 'images/EasyIcon.png'},
        {title: 'NIPPON COLORS', url: 'http://nipponcolors.com', img: 'images/NIPPON COLORS.png'},
        {title: '草料二维码', url: 'http://cli.im', img: 'images/草料二维码.png'},
      ],
      course: [
        {title: '慕课网', url: 'http://www.imooc.com', img: 'images/慕课网.png'},
        {title: '网易云课堂', url: 'http://study.163.com/', img: 'images/网易云课堂.png'},
        {title: '我要自学网', url: 'http://www.51zxw.net/study.asp?vip=4754485', img: 'images/我要自学网.png'},
        {title: 'Haoduoshipin', url: 'http://haoduoshipin.com', img: 'images/网址.png'},
        {title: '菜鸟教程', url: 'http://www.runoob.com', img: 'images/菜鸟教程.png'},
        {title: '廖雪峰的官方网站', url: 'http://www.liaoxuefeng.com', img: 'images/网址.png'},
      ],
      ss: [
        {title: 'iShadow', url: 'http://ss.ishadowx.com/index_cn.html', img: 'images/iShadow.png'},
        {title: '免费ShadowsocksR', url: 'http://shadowsocksr.ru', img: 'images/免费ShadowsocksR.png'},
      ],
      bbs: [
        {title: 'Chiphell', url: 'https://www.chiphell.com/', img: 'images/chiphell.png'},
        {title: '知乎', url: 'https://www.zhihu.com/', img: 'images/知乎.png'},
        {title: '机锋论坛', url: 'http:bbs.gfan.com', img: 'images/机锋论坛.png'},
        {title: '数字尾巴', url: 'http://www.dgtle.com/', img: 'images/数字尾巴.png'}
      ],
      blog: [
        {title: '阮一峰的网络日志', url: 'http://www.ruanyifeng.com/blog/'}
      ],
      web: [
        {title: 'Apple', url: 'https://www.apple.com/cn/', img: 'images/Apple.png'},
        {title: 'SONY', url: 'http://www.sonystyle.com.cn/', img: 'images/sony.png'},
        {title: 'SIEMENS', url: 'https://www.siemens.com/', img: 'images/siemens.png'},
        {title: 'PHILIPS', url: 'http://www.philips.com.cn', img: 'images/philips.png'},
        {title: 'SAMSUNG', url: 'http://www.samsung.com/cn/', img: 'images/samsung.png'}
      ],
      media: [
        {title: 'YouTube', url: 'https://www.youtube.com', img: 'images/YouTube.png'},
        {title: '优酷', url: 'http://www.youku.com', img: 'images/优酷.png'},
        {title: '美剧天堂', url: 'http://www.meijutt.com', img: 'images/网址.png'}
      ],
      shop: [
        {title: '淘宝网', url: 'https://www.taobao.com', img: 'images/淘宝网.png'},
        {title: '京东商城', url: 'https://www.jd.com', img: 'images/京东商城.png'},
        {title: '阿里巴巴', url: 'https://www.1688.com', img: 'images/阿里巴巴.png'}
      ],
      map: [
        {title: '高德地图', url: 'http://ditu.amap.com', img: 'images/高德地图.png'},
        {title: 'Google地图', url: 'http://www.google.cn/maps/', img: 'images/Google地图.png'},
        {title: 'Google地球', url: 'https://www.google.com/earth/', img: 'images/Google地球.png'}
      ],
      search: [
        {title: '虫部落', url: 'http://magnet.chongbuluo.com', img: 'images/虫部落.png'},
        {title: 'JAVZOO', url: 'http://www.javzoo.org', img: 'images/搜索.png'}
      ]
    }
  })
})
