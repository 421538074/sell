var xm = new Vue({
    el: "#app",
    data: {
    },
    methods: {
        goCash() {
            window.location.href = "agent-capital.html"
        },
        goStock() {
            window.location.href = "stock-sort.html"
        },
        inProduct() {
            window.location.href = "agent-in-product.html"
        },
        member() {
            window.location.href = "lower-member.html"
        },
        goService() {
            window.location.href = "agent-service.html"
        },
        goSet(){
            window.location.href = "agent-set.html"
        }
    },

});