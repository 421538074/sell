




$("span.star").bind("click", function () {
    $(this).parent("td").find("span.star").removeClass("sel");
    $(this).addClass("sel");
    $(this).prevAll().addClass("sel");
});