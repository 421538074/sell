
var xm = new Vue({
    el: "#app",
    data: {

    },
    methods: {
        uploadEvent() {
            $('#order-img').click();
        },
    },

});








var unSelected = "#999";
var selected = "#333";
$(function () {
    $("select").css("color", unSelected);
    $("option").css("color", selected);
    $("select").change(function () {
        console.log(1111)
        var selItem = $(this).val();
        if (selItem == $(this).find('option:first').val()) {
            $(this).css("color", selected);
        } else {
            $(this).css("color", selected);
        }
    });
})



var picArr = new Array();// 存储图片

$('input:file').localResizeIMG({
    width: 800,// 宽度
    quality: 0.5, // 压缩参数 1 不压缩 越小清晰度越低
    success: function (result) {
        var img = new Image();
        img.src = result.base64;
        var _str = "<span class='pic_look' style='background-image: url(" + img.src + ")'><em id='delete_pic'>-</em></span>"
        $('#chose_pic_btn').before(_str);
        var _i = picArr.length
        console.log(_i)
        if (_i == 4) {
            $("#chose_pic_btn").css('display', 'none')
        }
        picArr[_i] = result.base64;
        // picArr[_i] = _i;
        console.log(picArr)
    }
});
// 删除
$(document).on('click', '#delete_pic', function (event) {
    var aa = $(this).parents(".pic_look").index();
    picArr.splice(aa, 1);
    $(this).parents(".pic_look").remove();
    console.log(picArr);
});







$(function () {
    var $button = $('#upload'),
        //选择文件按钮
        $file = $("#order-img"),
        //回显的列表
        $list = $('.lis_box'),
        //选择要上传的所有文件
        fileList = [];
    //当前选择上传的文件
    var curFile;
    // 选择按钮change事件，实例化fileReader,调它的readAsDataURL并把原生File对象传给它，
    // 监听它的onload事件，load完读取的结果就在它的result属性里了。它是一个base64格式的，可直接赋值给一个img的src.
    $file.on('change', function (e) {
        //上传过图片后再次上传时限值数量
        var numold = $('.lis_box>li').length;
        if (numold >= 5) {
            layer.alert('最多上传5张图片');
            return;
        }
        //限制单次批量上传的数量
        var num = e.target.files.length;
        var numall = numold + num;
        if (num > 5) {
            layer.alert('最多上传5张图片');
            return;
        } else if (numall > 5) {
            layer.alert('最多上传5张图片');
            return;
        }
        //原生的文件对象，相当于$file.get(0).files;//files[0]为第一张图片的信息;
        curFile = this.files;
        //curFile = $file.get(0).files;
        //console.log(curFile);
        //将FileList对象变成数组
        fileList = fileList.concat(Array.from(curFile));
        //console.log(fileList);
        for (var i = 0, len = curFile.length; i < len; i++) {
            reviewFile(curFile[i])
        }
        $('.lis_box').fadeIn(2500);
    })


    function reviewFile(file) {
        //实例化fileReader,
        var fd = new FileReader();
        //获取当前选择文件的类型
        var fileType = file.type;
        //调它的readAsDataURL并把原生File对象传给它，
        fd.readAsDataURL(file);//base64
        //监听它的onload事件，load完读取的结果就在它的result属性里了
        fd.onload = function () {
            if (/^image\/[jpeg|png|jpg|gif]/.test(fileType)) {
                $list.before('<li style="border:solid red px; margin:5px 5px;" class="file-item"><img src="' + this.result + '" alt="" height="70"><span class="file-del">删除</span></li>').children(':last').hide().fadeIn(2500);
            } else {
                $list.before('<li class="file-item"><span class="file-name">' + file.name + '</span><span class="file-del">删除</span></li>')
            }

        }
    }

    //点击删除按钮事件：
    $(".lis_box").on('click', '.file-del', function () {
        let $parent = $(this).parent();
        console.log($parent);
        let index = $parent.index();
        fileList.splice(index, 1);
        $parent.fadeOut(850, function () {
            $parent.remove()
        });
        //$parent.remove()
    });
    //点击上传按钮事件：
    $button.on('click', function () {
        var name = $('#name').val();
        if (fileList.length > 5) {
            layer.alert('最多允许上传5张图片');
            return;
        } else {
            var formData = new FormData();
            for (var i = 0, len = fileList.length; i < len; i++) {

                formData.append('upfile[]', fileList[i]);
            }
            formData.append('name', name);
            $.ajax({
                url: './product_add.php',
                type: 'post',
                data: formData,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == '1') {
                        layer.msg(data.content, { icon: 6 });
                    } else if (data.status == '2') {
                        layer.msg(data.content, { icon: 1 });
                    }
                }
            })
        }
    })
})
