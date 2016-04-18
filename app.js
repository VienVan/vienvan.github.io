console.log("linked")
$('.bounce').click(function() {

    var y = $(window).scrollTop();
     $("html, body").animate({ scrollTop: y + $(window).height() }, 1200);

});
