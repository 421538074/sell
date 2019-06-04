new Vue({
    el:'#app',
    data() {
        return {
            noAddress:false,
            currentAddress:{
                id:'',
                username:'',
                phone:'',
                detail:''
            }
        }
    },
    created() {
        if(sessionStorage.getItem('currentAddress')) {
            this.currentAddress = JSON.parse(sessionStorage.getItem('currentAddress'));
        }
    },
});