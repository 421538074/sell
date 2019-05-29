var xm = new Vue({
    el: "#app",
    data: {
        arr: [{}, {}, {},{}, {}, {},{}, {}, {},],
        list: [{}, {}, {},],
    },
    methods: {
        // 售后详情
        serviceDetail() {
            window.location.href = "service-detail.html"
        },
        goSort(){
            window.location.href = "stock.html"
        }
    },

});