new Vue({
    el:'#app',
    data() {
        return {
            phone:'',
            password:'',
            waitTime:60,
            waitTips:'获取',
            code:''
        }
    },
    methods: {
        regsiter() {

        },
        sendCodeInner() {
            this.sendCode('waitTime','waitTips','phone','获取',(res) => {
                $.toast(res,'text');
            });
        }
    }
});