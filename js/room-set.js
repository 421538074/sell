var xm = new Vue({
    el: "#app",
    data: {
        name: "某某门店",
        adress: "南京市雨花台区小航路16号",
        time: "6:00～23:00",
        phone: "123456789",
    },
    methods: {
        edit() {
            $(".room_uu li input").attr("disabled", false)
            $(".room_uu li input").focus(function () {

                //获取当前文本框的值

                var curValue = $(this).val();

                if (curValue == this.defaultValue) {

                    // $(this).val("");

                }

            })
        }
    },

});