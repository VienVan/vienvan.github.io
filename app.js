console.log("linked")
$('.fa-sort-down').click(function() {

    var y = $(window).scrollTop();
     $("html, body").animate({ scrollTop: y + $(window).height() }, 1200);

});

$('#sleeping-boy').click(function() {
   $("html, body").animate({ scrollTop: 0 }, 1200);
})
