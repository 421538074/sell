Vue.mixin({
    data() {
        return {
            shopCart:[]
        }
    },
    methods: {
        /**
         * 返回
         */
        back() {
            history.go(-1);
        },
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
         * 
         * @returns {String}
         * 
         */
        sendCode(waitTimeKey, tipsKey, phoneKey, defaultMsg,callback) {
            if (!this.validatePhone(this[phoneKey])) {
                callback('无效的手机号');
                return;
            }
            if (this[waitTimeKey] == 60) {
                $.post('', {
                        phone: this[phoneKey]
                    }, (res) => {
                        if (res.status == 1) {
                            callback('发送成功');
                            const interval = setInterval(() => {
                                if (this[waitTimeKey] == 1) {
                                    this[waitTimeKey] = 60;
                                    this[tipsKey] = defaultMsg;
                                    clearInterval(interval);
                                    return;
                                }
                                this[waitTimeKey] -= 1;
                                this[tipsKey] = `${this[waitTimeKey]}s`;
                            }, 1000);
                        } else {
                            callback('发送失败');
                        }
                    }, 'json')
                    .fail(err => {
                        callback('服务器异常');
                    });
            }
        },
        /**
         * 链接跳转
         * @param {String} url 
         */
        linkTo(url) {
            window.location.href = url;
        },
        /**
         * 获得URL参数
         */
        getParams() {
            var list = location.search.substring(1).split('&');
            var param = {};
            list.forEach(function (value) {
                var temp = value.split('=');
                param[temp[0]] = temp[1];
            });
            return param;
        },
        /**
         * 获得购物车信息
         */
        getShopCartList() {

        }
    },
    filters: {
        filterImg(url) {
            return url.includes('http') ? url : `http${url}`;
        }
    }
})