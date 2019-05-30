var xm = new Vue({
    el: "#app",
    data: {
        roomlist: [{}, {}]
    },
    methods: {
        addRoom() {
            window.location.href = ""
        },
        goDetail() {
            window.location.href = "room-set.html"
        }
    },

});