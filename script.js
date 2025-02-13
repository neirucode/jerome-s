$(window).on("load", function () {
    console.log("All resources loaded. Page is now fully visible.");

    // Show the content only after everything is loaded
    $("body").css("visibility", "visible");

    // Animate the card when hovered
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Click event for card (show loading screen)
    $('.card').click(function (event) {
        event.preventDefault(); // Prevent immediate navigation
        $('.loading-screen').css({
            'visibility': 'visible',
            'opacity': '1'
        });

        // Delay navigation for 2 seconds
        setTimeout(function () {
            window.location.href = "loveletter.html";
        }, 2000);
    });
});
