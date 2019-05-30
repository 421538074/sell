var xm = new Vue({
    el: "#app",
    data: {
        list: [
            { status: "下架" },
            { status: "上架" },
            { status: "上架" },
            { status: "上架" },
            { status: "上架" }],
        isAdd: [],
    },
    methods: {
        select(index) {
            let indexItem = this.isAdd.indexOf(index);
            if (indexItem == -1) {
                this.isAdd.push(index);
            } else {
                this.isAdd.splice(indexItem, 1);
            }
            console.log(this.isAdd)
        },
        cutChange(){
            this.isshow=!this.isshow
        }
    },

});