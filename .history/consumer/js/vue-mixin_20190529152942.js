Vue.mixin({
    methods: {
        // 限制长度
        limitLength(key, length) {
            this[key] = this[key].substring(0, length);
        },
        // 验证手机号
        validatePhone(phone) {

        },
        // 发送验证码
        sendCode(waitTimeKey,tipsKey,phoneKey) {
            if(this[waitTimeKey] == 60) {
                setInterval(() => {
                    this[waitTimeKey] -= 1;
                    this[tipsKey] = `${this[waitTimeKey]}s`;
                }, 1000);
            }
        }
    },
    filters: {

    }
})