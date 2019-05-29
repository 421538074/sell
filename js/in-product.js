var xm = new Vue({
    el: "#app",
    data: {
        cur:0,
        order:[{},{},{}],
        list:[{},{},{}],
    },
    methods: {
        tab(t) {
            this.cur=t
        }
    },

});