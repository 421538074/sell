var xm = new Vue({
    el: "#app",
    data: {
        int: [{}, {}, {},]
    },
    methods: {
        recharge(){
            window.location.href="invest-money.html"
        },
        goDefinite(){
            window.location.href="definite-detailed.html"
        },
        reMoney(){
            window.location.href="cash-out.html"
        }

    },

});
