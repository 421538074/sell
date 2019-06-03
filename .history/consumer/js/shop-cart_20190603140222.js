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
        }
    },
    watch: {
        isSelectAll() {
        
        }
    },
});