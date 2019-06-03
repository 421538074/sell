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
        initPhotoPreview() {
            var vm = this;
            this.photoPreview = $.photoBrowser({
                tpl: `
                <div class="weui-photo-browser-modal">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">{{#items}}
                                <div class="swiper-slide">
                                    <div class="photo-container"><img src="{{image}}" />
                                    </div>
                                </div>
                            {{/items}}</div>
                        <div class="caption">{{#items}}
                                <div class="caption-item caption-item-{{@index}}">{{caption}}</div>
                            {{/items}}</div>
                    </div>
                </div>
                `,
                items: ["../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg"],
                onClose: function () {
                    vm.isShowPhotoReview = false;
                },
                onSlideChange: function (index) {
                    this.currentPreviewIndex = index;
                }
            });

        },
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