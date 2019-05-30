var xm = new Vue({
    el: "#app",
    data: {
        arr: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
        list: [{}, {}, {},],
    },
    methods: {
        // 售后详情
        serviceDetail() {
            window.location.href = "service-detail.html"
        },
        goSort() {
            if (getUrlKey("id") == 1) {
                window.location.href = "product-save.html"
            } else {
                window.location.href = "stock.html"
            }

        }
    },

});