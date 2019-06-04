new Vue({
    el:'#app',
    data() {
        return {
            selectList:[1,2,3,4,5],
            selectedList:[]
        }
    },
    methods: {
        isInList(n) {
            return n == 1;
        },
        triggerItem(id) {
            if(!this.selectedList.includes(id)) {
                this.selectedList.push(id);
            }
            else {
                this.selectedList.splice(this.selectedList.findeIndex(id));
            }
        }
    },
    watch: {
        isSelectAll() {
        
        }
    },
});