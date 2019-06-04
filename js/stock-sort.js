var xm = new Vue({
    el: "#app",
    data: {
        arr: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
        list: [{}, {}, {},],
        cur: 1,
    },
    methods: {
        // 售后详情
        serviceDetail() {
            window.location.href = "service-detail.html"
        },
        goSort() {
            window.location.href = "agent-stock.html"
        },
        tagTab(index) {
            if (this.cur != index) {
                this.cur = index;
            }
        }
    },

});