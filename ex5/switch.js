$(document).ready(function () {
    $("nav").css({ opacity: 0 });
    $('a').bind('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 747, function () {
                window.location.hash = hash;
            });

        }
    });

    $('nav').hover(function() {
        $("nav").animate({opacity: 1},400)}


    ,

        function () {
            $("nav").animate({opacity: 0},400);
        });

})