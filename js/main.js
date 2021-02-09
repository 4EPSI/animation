$('.black_animate').on('click', function () {
    // $('.black').toggleClass('active');
    // TweenMax.to(".black", {duration: 1, rotation:360, y:100});
    var tl = new TimelineMax();
    tl
        .to(".black", { duration: 3, rotation: 360, ease: "steps(12)", repeat: 2 })
    ;
});