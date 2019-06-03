new Vue({
    el: '#app',
    data() {
        return {
            selectList: [1, 2, 3, 4, 5],
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
                }));
            }
        },
        selectAll() {
            this.selectedList = this.selectedList.length == this.selectList.length ? [] : this.selectList;
        }
    },
    watch: {
        selectedList() {
            if(this.selectList.length == this.selectedList.length) {
                this.isSelectAll = true;
            }
        }
    },
});