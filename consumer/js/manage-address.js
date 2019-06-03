new Vue({
    el: '#app',
    data() {
        return {
            title: '',
            isSetDefault: true
        }
    },
    methods: {
        triggerDefault() {
            this.isSetDefault = !this.isSetDefault;
        },
        // 初始化城市选择器
        initCityPicker() {
            $("#city-picker").cityPicker({
                title: "请选择"
            });
        }
    },
    created() {
        if (this.getParams().type == 'edit') {
            this.title = '编辑地址';
        } else {
            this.title = '添加地址';
        }
        this.$nextTick(() => {
            this.initCityPicker();
        });
    },
})