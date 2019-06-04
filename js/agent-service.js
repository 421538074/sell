var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        isrefund: false,
        isreply: true,
        hide: false,
        cur: 0,
        arr: [{}, {}, {}],
    },
    methods: {
        tab(t) {
            this.cur = t
            if (t == 0) {
                this.hide = false
            }else {
                this.hide = true
            }
        },
        serviceDetail() {
            window.location.href = "agent-service-detail.html"
        },
        noAgree() {
            this.isrefund = true
        },
        agree() {
            this.isshade = true
        },
        close() {
            this.isshade = false
        },
        openReply() {
            this.isreply = !this.isreply
        }
    },

});