new Vue({
    el:'#app',
    data() {
        return {
            noAddress:false,
            currentAddress:''
        }
    },
    created() {
        if(sessionStorage.getItem('currentAddress')) {
            this.currentAddress = JSON.parse(sessionStorage.getItem('currentAddress'));
        }
    },
});