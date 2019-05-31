new Vue({
    el: '#app',
    data() {
        return {
            list: [
                {},
                {},
            ],

        }
    },
    methods: {
        tag(t) {
            if (t = 0) {

            }
        },
        goProblem() {
            if (a == 1) {
                window.location.href = "feedback.html"
            } else {
                window.location.href = "feedback-once.html"
            }

        }
    }
})
















$(".order_uu li").click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})
