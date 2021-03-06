new Vue({
    el: '#app',
    data() {
        return {
            //总列表
            selectList: [1, 2, 3, 4, 5],
            // 选中的列表
            selectedList: [],
            isSelectAll:false
        }
    },
    methods: {
        isInList(id) {
            return this.selectedList.includes(id);
        },
        triggerItem(id) {
            if (!this.selectedList.includes(id)) {
                this.selectedList.push(id);
            } else {
                this.selectedList.splice(this.selectedList.findIndex(function (value) {
                    return value == id;
                }),1);
            }
        },
        selectAll() {
            this.selectedList = this.selectedList.length == this.selectList.length ? [] : [...this.selectList];
        }
    },
    watch: {
        selectedList() {
            console.log(this.selectedList);
            if(this.selectList.length == this.selectedList.length) {
                this.isSelectAll = true;
            }
            else {
                this.isSelectAll = false;
            }
        }
    },
});