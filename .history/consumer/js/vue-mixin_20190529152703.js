Vue.mixin({
    methods: {
        // 限制长度
        limitLength(key, length) {
            this[key] = this[key].substring(0, length);
        },
        // 发送验证码
        sendCode(waitTimeKey,tipsKey,phoneKey) {
            if(this[waitTimeKey] <= 60) {
                
            }
        }
    },
    filters: {

    }
})