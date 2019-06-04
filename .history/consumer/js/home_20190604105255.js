new Vue({
    el: '#app',
    data() {
        return {
            cityData:[],
            showCitypicker:false
        }
    },
    methods: {
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
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        },
        // 点击字母标签
        showTag(name) {
            $.toast(name,'text');
        },
        // 选择城市
        chooseCity() {
            this.showCitypicker = true;
        }
    },
    mounted() {
        $.toast.prototype.defaults.duration = 100;
        $.get('./data/city.json',(data) => {
            this.cityData = data;
            console.log(this.cityData);
        });
        this.$nextTick(() => {
            this.initSwiper('.swiper-container');
        })
    },
});