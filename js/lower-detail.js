var xm = new Vue({
    el: "#app",
    data: {

        arr: [{}, {}, {}],

    },
    methods: {
        // 下级详情
        lowerDetail() {
            window.location.href = "lower-detail.html"
        },
        // 添加下级
        addLower() {
            window.location.href = "add-lower.html"
        },
        // 编辑
        editLower(){
            window.location.href = "lower-edit.html"
        }
    },

});