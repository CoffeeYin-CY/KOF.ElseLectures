$(function () {
    $(".left").hover(
        function () {
            $(".left a").addClass("animated zoomInLeft");
        },
        function () {
            $(".left a").removeClass("animated zoomInLeft")
        })

    $(".right").hover(
        function () {
            $(".right a").addClass("animated zoomInRight");
        },
        function () {
            $(".right a").removeClass("animated zoomInRight")
        })
});