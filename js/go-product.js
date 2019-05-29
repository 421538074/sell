var xm = new Vue({
    el: "#app",
    data: {
        cur: 0,
        order: [{}, {}, {}],
        list: [{}, {}, {}],
    },
    methods: {
        tab(t) {
            this.cur = t
        },
        add_product() {
            window.location.href = "add-product.html"
        },
    },

});