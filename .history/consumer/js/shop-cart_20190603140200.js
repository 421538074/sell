new Vue({
    el:'#app',
    data() {
        return {
            selectList:[]
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