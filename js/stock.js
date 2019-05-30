var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        isRadio: true,
        isshow: true,
        postIndex: -1,
        list: [
            { status: "下架" },
            { status: "上架" },
            { status: "上架" },
            { status: "上架" },
            { status: "上架" }],
    },
    methods: {
        select(index) {
            this.postIndex = this.postIndex == index ? -1 : index
            // this.isRadio = !this.isRadio
        },
    },

});