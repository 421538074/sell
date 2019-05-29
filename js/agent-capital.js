var xm = new Vue({
    el: "#app",
    data: {
        list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    },
    methods: {
        cashOut() {
            window.location.href = "cash-out.html"
        }
    },

});