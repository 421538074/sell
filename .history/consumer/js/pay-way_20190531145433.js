new Vue({
    el:'#app',
    data() {
        return {
            payWay:0
        }
    },
    methods: {
        changePayWay(way) {
            if(this.payWay != way) {
                this.payWay = way;
            }
        }
    },
});