new Vue({
    el:'#app',
    data() {
        return {
            currendDefault:2
        }
    },
    methods: {
        setDefault(id) {
            if(this.currendDefault != id) {
                this.currendDefault = id;
            }
        }
    },
});