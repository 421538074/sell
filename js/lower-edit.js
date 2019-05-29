var xm = new Vue({
    el: "#app",
    data: {
        avter:"img/雷姆.jpg",
        name:'张胜男',
        phone:'12345',
        address:'江苏省-南京市',
        nickname:'zj12345',
        site:'南京市江宁区天元大道124号'
    },
    methods: {
        tab(t) {
            this.cur=t
        }
    },

});