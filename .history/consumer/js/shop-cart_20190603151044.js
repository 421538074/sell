new Vue({
    el: '#app',
    data() {
        return {
            //总列表
            selectList: [1, 2, 3, 4, 5],
            // 选中的列表
            selectedList: [],
            // 是否全选
            isSelectAll: false,
            // 当前编辑的商品id
            editGoodsId: 1,
            mainType: '',
            subType: ''
        }
    },
    methods: {
        isInList(id) {
            return this.selectedList.includes(id);
        },
        // 选中/取消选中
        triggerItem(id) {
            if (!this.selectedList.includes(id)) {
                this.selectedList.push(id);
            } else {
                this.selectedList.splice(this.selectedList.findIndex(function (value) {
                    return value == id;
                }), 1);
            }
        },
        // 全选/取消全选
        selectAll() {
            this.selectedList = this.selectedList.length == this.selectList.length ? [] : [...this.selectList];
        },
        // 编辑
        editGoods(id) {
            this.editGoodsId = id;
        },
        // 选择商品规格
        selectGoodsSpecs(id) {
            // 查询商品信息
            $("#goods-choice").popup();
        },
        // 关闭商品属性选择
        closePopup() {
            $.closePopup('#goods-choice');
        },
        // 选择主属性
        choseMain(id) {
            if (this.mainType == id) {
                this.mainType = '';
            } else {
                this.mainType = id;
            }
        },
        // 选择子属性
        choseSub(id) {
            if (this.subType == id) {
                this.subType = '';
            } else {
                this.subType = id;
            }
        },
        // 初始化轮播组件
        initSwiper(el) {
            new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true //修改swiper的父元素时，自动初始化swiper
            });
        },
    },
    watch: {
        selectedList() {
            console.log(this.selectedList);
            if (this.selectList.length == this.selectedList.length) {
                this.isSelectAll = true;
            } else {
                this.isSelectAll = false;
            }
        }
    },
});