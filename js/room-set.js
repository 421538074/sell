var xm = new Vue({
    el: "#app",
    data: {
        isTrue: true,
        name: "某某门店",
        adress: "南京市雨花台区小航路16号",
        time: "6:00～23:00",
        phone: "123456789",
    },
    methods: {
        edit() {
            $(".room_uu li input").attr("disabled", false)
            this.isTrue = !this.isTrue
        },
        editProduct() {
            window.location.href = "room-product.html"
        }
    },

});