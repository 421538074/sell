new Vue({
    el: '#app',
    data() {
        return {
            isshade: false,
            isshow: false,
            isAdd: [],
            list: [
                {},
                {},
                {},
                {},
            ],

        }
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
        goDetail() {
            window.location.href = "refund.html"
        },
        edit() {
            this.isshow = true
        }
    }
})



