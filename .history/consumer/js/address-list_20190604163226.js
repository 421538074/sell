new Vue({
    el: '#app',
    data() {
        return {
            currendDefault: 2,
            addressList:[{
                id:1,
                username:'周某人',
                phone:13596325741,
                detail:'菲菲附加费饭店里看风景ad联发科'
            },
            {
                id:2,
                username:'李某人',
                phone:13596521581,
                detail:'阿凤飞飞个发而奋斗'
            }]
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
                $.showLoading('正在删除');
                setTimeout(() => {
                    $.hideLoading();
                    $.toast('删除成功','text');
                }, 2000);
            });
        },
        selectAddress(id) {
            sessionStorage.setItem('currentAddress',JSON.stringify(this.addressList.find(function(item) {
                return item.id == id;
            })));
        }
    }
});