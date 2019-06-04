new Vue({
    el: '#app',
    data() {
        return {
            currendDefault: 2
        }
    },
    methods: {
        setDefault(id) {
            if (this.currendDefault != id) {
                this.currendDefault = id;
            }
        },
        deleteAdd(id) {
            $.confirm("确定要删除该地址吗？", function () {
                console.log('confirm')
                //点击确认后的回调函数
            }, function () {
                //点击取消后的回调函数
                console.log('cancel')
            });
        }
    },
    created() {
        $.modal.prototype.defaults = {
            title: "提示",
            text: undefined,
            buttonOK: "确定",
            buttonCancel: "取消",
            buttons: [{
              text: "确定",
              className: "primary"
            }],
            autoClose: true //点击按钮自动关闭对话框，如果你不希望点击按钮就关闭对话框，可以把这个设置为false
          };
    },
});