Vue.mixin({
    methods: {
        /**
         * 限制长度
         * @param {String} 要限制长度的字段
         * @param {Number} 长度
         */
        limitLength(key, length) {
            this[key] = this[key].substring(0, length);
        },
        /**
         * 验证11位手机号
         * @param {Number} phone 
         */
        validatePhone(phone) {
            const phoneReg = /^[1-9][0-9]{9}[0-9]$/;
            return phoneReg.test(phone);
        },
        /**
         * 发送手机验证码
         * @param {Number} waitTimeKey 等待时间键名
         * @param {String} tipsKey 发送验证码显示的信息的键名
         * @param {String} phoneKey 手机号键名
         * @param {String} reSendMsg  按钮默认显示的文字
         */
        sendCode(waitTimeKey,tipsKey,phoneKey,defaultMsg) {
            if(!this.validatePhone(this[phoneKey])) {
                alert('无效手机号!');
                return;
            }
            if(this[waitTimeKey] == 60) {
                const interval = setInterval(() => {
                    if(this[waitTimeKey] == 1) {
                        this[waitTimeKey] = 60;
                        this[tipsKey] = defaultMsg;
                        clearInterval(interval);
                        return;
                    }
                    this[waitTimeKey] -= 1;
                    this[tipsKey] = `${this[waitTimeKey]}s`;
                }, 1000);
                // $.post(api,(res) => {
                //     if(res.status == 1) {
                //         const interval = setInterval(() => {
                //             if(this[waitTimeKey] == 1) {
                //                 this[waitTimeKey] = 60;
                //                 this[tipsKey] = defaultMsg;
                //                 clearInterval(interval);
                //             }
                //             this[waitTimeKey] -= 1;
                //             this[tipsKey] = `${this[waitTimeKey]}s`;
                //         }, 1000);
                //     }
                //     else {
                //         alert('发送失败!');
                //     }
                // },'json')
                // .fail(err => {
                //     alert('服务器异常!');
                // });
            }
        }
    },
    filters: {

    }
})