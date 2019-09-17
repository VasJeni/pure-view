// Импортируем другие js-файлы
/*my js*/
$(".list--toggle").click(function () {
    $(this).children("ul").toggle();
    var tval = $(this).children(".footer--toggle-item").html();
    if (tval === "+") {
        $(this).children(".footer--toggle-item").html("-");
    } else {
        $(this).children(".footer--toggle-item").html("+");
    }
});
$(".navbar-toggler").click(function () {
    $(this).parent().toggleClass("navbar-dark bg-dark");
    tmpc = $(".navbar-logo--text").children().attr("fill");
    console.log(tmpc);
    if (tmpc === "#292F42") {
        $(".navbar-logo--text").children().attr("fill", "#fff");
    } else {
        $(".navbar-logo--text").children().attr("fill", "#292F42");
    }
});