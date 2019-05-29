new Vue({
    el:'#app',
    data() {
        return {
            currentIndex:1
        }
    },
    methods: {
        triggerTab(index) {
            if(this.currentIndex != index) {
                this.currentIndex = index;
            }
        }
    },
})