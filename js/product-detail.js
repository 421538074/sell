var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        arr: [{ id: "1" }, { id: "2" }, { id: "3" }],
        imgList: [{}, {}, {}],
        hide: false,
        tab1: true,
        tab2: false,
        tab3: false,
        cur: 0,
    },
    methods: {
        tab(t) {
            this.cur = t
            if (t == 1) {

            } else if (t == 2) {

            }
        },
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





$('.nav_uu li').click(function () {
    $(this).addClass('color').siblings().removeClass('color');
});

$("span.star").bind("click", function () {
    $(this).parent("td").find("span.star").removeClass("sel");
    $(this).addClass("sel");
    $(this).prevAll().addClass("sel");
});