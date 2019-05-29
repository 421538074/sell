var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        isrefund: false,
        isreply: true,
        cur: 0,
        arr: [{}, {}, {}],
    },
    methods: {
        serviceDetail() {
            window.location.href = "agent-service-detail.html"
        },
    },

});