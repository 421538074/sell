new Vue({
    el: '#app',
    data() {
        return {

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
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initSwiper();
        });
    },
});