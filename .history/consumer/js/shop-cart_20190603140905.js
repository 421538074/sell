new Vue({
    el: '#app',
    data() {
        return {
            selectList: [1, 2, 3, 4, 5],
            selectedList: []
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
                console.log(this.selectedList.findIndex(function (value) {
                    return value == id;
                }));
                // this.selectedList.splice(this.selectedList.findIndex(id));
            }
        }
    },
    watch: {
        isSelectAll() {

        }
    },
});