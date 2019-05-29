Vue.mixin({
    methods: {
        // 限制长度
        limitLength(key, length) {
            this[key] = this[key].substring(0, length);
        },
        // 验证手机号
        validatePhone(phone) {
            const phoneReg = /^[1-9][0-9]{9}[0-9]$/;
            return phoneReg.test(phone);
        },
        /**
         * 
         * @param {Number} waitTimeKey 等待时间键名
         * @param {String} tipsKey 发送验证码显示的信息的键名
         * @param {String} phoneKey 手机号键名
         * @param {String} reSendMsg  按钮默认显示的文字
         */
        sendCode(waitTimeKey,tipsKey,phoneKey,defaultMsg) {
            console.log(this[phoneKey]);
            if(!this.validatePhone(this[phoneKey])) {
                alert('无效手机号!');
                return;
            }
            if(this[waitTimeKey] == 60) {
                $.post(api,(res) => {
                    if(res.status == 1) {
                        const interval = setInterval(() => {
                            if(this[waitTimeKey] == 1) {
                                this[waitTimeKey] = 60;
                                this[tipsKey] = defaultMsg;
                                clearInterval(interval);
                            }
                            this[waitTimeKey] -= 1;
                            this[tipsKey] = `${this[waitTimeKey]}s`;
                        }, 1000);
                    }
                    else {
                        alert('发送失败!');
                    }
                },'json')
                .fail(err => {
                    alert('服务器异常!');
                });
            }
        }
    },
    filters: {

    }
})