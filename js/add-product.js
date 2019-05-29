var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        order: [{}, {}],
        avter: '',
    },
    methods: {
        addProduct() {
            this.isshade = true
        },
        uploadEvent() {
            $('#order-img').click();
        },
        uploadImg(e) {
            var formData = new FormData();
            formData.append('file', e.target.files[0]);
            formData.append('token', sessionStorage.getItem('token'));
            // 上传图片
            // $.ajax({
            //     url: api + '/api/common/upload',
            //     type: 'post',
            //     async: false,
            //     contentType: false,
            //     processData: false,
            //     data: formData,
            //     success: (data) => {
            //         toast(data.msg);
            //         if (data.code == 1) {
            //             this.avter = data.data.url;
            //         }
            //     },
            //     error: function () {
            //         toast('服务器异常');
            //     }
            // });
        },
    },

});