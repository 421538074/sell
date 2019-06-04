new Vue({
    el: '#app',
    data() {
        return {
            cityData:[],
            showCitypicker:false,
            currentCity:'南京市'
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
        // 打开城市选择器
        openCityPicker() {
            this.showCitypicker = true;
        },
        // 关闭城市选择器
        closeCityPicker() {
            this.showCitypicker = false;
        },
        // 选择城市
        chooseCity(name) {
            this.currentCity = name;
            this.closeCityPicker();
        },
        getLocation() {
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.331398,39.897445);
            map.centerAndZoom(point,12);
            
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    alert('您的位置：'+r.point.lng+','+r.point.lat);
                }
                else {
                    alert('failed'+this.getStatus());
                }        
            });
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
        this.getLocation();

        });
    },
});