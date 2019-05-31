new Vue({
    el: '#app',
    data() {
        return {
            currentIndex: 0,
            photoPreview: '',
            isShowPhotoReview:false
        }
    },
    methods: {
        initSwiper() {
            if(this.isInitSwiper) {
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
        initPhotoPreview() {
            this.photoPreview = $.photoBrowser({
                items: ["../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg"]
            });
            this.photoPreview._open = false;
        },
        openPhotoPreview() {
            this.photoPreview.open();
        },
        switchTab(index) {
            if (this.currentIndex != index) {
                this.currentIndex = index;
            }
        }
    },
    watch: {
        photoPreview: {
            deep:true,
            handler:function() {
                console.log(this.photoPreview);
                if(this.photoPreview._open) {
                    this.isShowPhotoReview = true;
                }
                else {
                    this.isShowPhotoReview = false;
                }
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
