new Vue({
    el: '#app',
    data() {
        return {
            currentIndex: 0,
            photoPreview: '',
            isShowPhotoReview: false,
            currentPreviewIndex: 0
        }
    },
    methods: {
        // 初始化轮播组件
        initSwiper(el,pre,next) {
            new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
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
                onSlideChange:function(index) {
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
            $("#about").popup();
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initSwiper('.goods-swiper-main','.swiper-button-prev','.swiper-button-next');
            this.initSwiper('.weui-popup__modal .goods-swiper-sub','.swiper-button-prev-1','.swiper-button-next-1');
            this.initPhotoPreview();
        });
    },
});