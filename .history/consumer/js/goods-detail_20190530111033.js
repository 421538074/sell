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