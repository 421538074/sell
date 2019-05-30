new Vue({
    el: '#app',
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        initSwiper() {
            new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        initPhotoPreview() {
            $.photoBrowser({
                items: [
                  "./images/swiper-1.jpg",
                  "./images/swiper-2.jpg",
                  "./images/swiper-3.jpg"
                ]
              });
        },
        switchTab(index) {
            if(this.currentIndex != index) {
                this.currentIndex = index;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initSwiper();
        });
    },
});