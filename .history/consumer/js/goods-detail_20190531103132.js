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
        initSwiper() {
            if (this.isInitSwiper) {
                return;
            }
            this.isInitSwiper = true;
            new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
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
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initSwiper();
            this.initPhotoPreview();
        });
    },
});