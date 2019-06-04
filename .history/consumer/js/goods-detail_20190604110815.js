new Vue({
    el: '#app',
    data() {
        return {
            currentIndex: 0,
            photoPreview: '',
            isShowPhotoReview: false,
            currentPreviewIndex: 0,
            mainType: '',
            subType: '',
            num: 1
        }
    },
    methods: {
        // 初始化轮播组件
        initSwiper(el, pre, next) {
            new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                navigation: {
                    nextEl: next,
                    prevEl: pre,
                },
            });
        },
        // 初始化图片预览
        initPhotoPreview() {
            var vm = this;
            this.photoPreview = $.photoBrowser({
                items: ["../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg"],
                onClose: function () {
                    vm.isShowPhotoReview = false;
                },
                onSlideChange: function (index) {
                    vm.currentPreviewIndex = index;
                }
            });

        },
        // 打开预览图片
        openPhotoPreview() {
            this.photoPreview.open();
            this.isShowPhotoReview = true;
        },
        switchTab(index) {
            if (this.currentIndex != index) {
                this.currentIndex = index;
            }
        },
        // 加入购物车
        addToCart() {
            $("#goods-choice").popup();
        },
        // 立即购买
        buyNow() {
            $("#goods-choice").popup();
        },
        // 分享/取消分享商品
        shareGoods() {
            $("#goods-share").popup();
        },
        cancelShareGoods() {
            $.closePopup('#goods-share');
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
        // 调整数量
        adjustNum(type) {
            switch (type) {
                case '+':
                    this.num++;
                    break;
                case '-':
                    this.num <= 1 ? this.num : this.num--;
                    break;
            }
        },
        // 确认购买商品
        confirmOrder() {
            this.linkTo('confirm-order.html');
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initSwiper('.goods-swiper-main', '.swiper-button-prev', '.swiper-button-next');
            this.initSwiper('.goods-swiper-sub', '.swiper-button-prev-2', '.swiper-button-next-2');
            this.initPhotoPreview();
        });
    },
});