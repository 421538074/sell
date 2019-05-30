function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}


// window.warn = {
//     alert: function alert(msg) {
//         var template = `  
// `
//         $('body').append(template);
//         $('.alert-body').animate({
//             top: "40px"
//         }, 200);
//         // setTimeout(function () {
//         //     warn.close();
//         // }, 1500);
//     },
//     close: function close() {
//         $('.alert-body').animate({
//             top: "-280px"
//         }, 200);
//         setTimeout(function () {
//             $('#alert-msg').remove();
//         }, 200);
//     }
// };