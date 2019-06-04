var xm = new Vue({
    el: "#app",
    data: {
        list:[{},{},{},{},{},{},{},{},{},{},{},{}]
    },
    methods: {

    },

});






$("#input4").shijian({
    y: -10,//当前年份+10
    Hour: false,//是否显示小时
    Minute: false,//是否显分钟
})

var data = new Date()
var time = data.getFullYear() + '年' + (data.getMonth()+1) + '月'
$("#input4").attr("value",time)