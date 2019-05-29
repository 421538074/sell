var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        list: [
            { status: "下架" },
            { status: "上架" },
            { status: "上架" },
            { status: "上架" },
            { status: "上架" }],
    },
    methods: {
        share() {
            this.isshade = true
        },
        shareWX() {
            alert("微信")
        },
        shareQQ() {
            alert("QQ")
        },
        shareLJ() {
            alert("链接")
        },
        close() {
            this.isshade = false
        },
        goDetail() {
            window.location.href = "product-detail.html"
        }
    },

});