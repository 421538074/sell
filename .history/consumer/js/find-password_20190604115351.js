new Vue({
    el:'#app',
    data() {
        return {
            waitTime:60,
            waitTips:'获取',
            phone:'',
            code:''
        }
    },
    methods: {
        next() {
            // 验证通过
            this.linkTo('reset-password.html');
        },
        sendCodeInner() {
            this.sendCode('waitTime','waitTips','phone','获取',(res) => {
                
            });
        }
    }
});