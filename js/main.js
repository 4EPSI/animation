$('.black_animate').on('click', function () {
    // $('.black').toggleClass('active');
    // TweenMax.to(".black", {duration: 1, rotation:360, y:100});
    var tl = new TimelineMax();
    tl
        .to(".black", { duration: 3, rotation: 360, ease: "steps(12)", repeat: 2 })
    ;
});

$('.ball_box').on('click', function () {
    var tl = new TimelineMax();
    tl
        .to(".ball_box", { duration: 3, rotation: 360, ease: "slow(0.7, 0.7, false)", repeat: -1 })
    ;
});

$('.white').on('click', function () {
    var tl = new TimelineMax();
    tl
        .to(".white", { duration: 3,  ease: "power4.out", y: 200 })
        .to(".white", { duration: 3, rotation: 360, ease: "circ.out", repeat: -1 })
    ;
});

// $('.black_ball').on('click', function () {
//     var tl = new TimelineMax();
//     tl
//         .to(".black_ball", { duration: 3, rotation: 360, ease: "slow(0.7, 0.7, false)", repeat: -1 })
//     ;
// });
gsap.to('.black_ball', {
    duration: 5,
    x: "random(-500, 500)",
    backgroundColor: "hsl(+=random(-100, 100), 80%, 50%)",
    repeat: -1,
    repeatDelay: 0.3,
    // repeatRefresh: true,
});
// box-3
var tl = gsap.timeline({
    repeatRefresh: true,
    repeat: -1,
    repeatDelay: 0.3
  });

  tl.to(".box-3", {
    duration: 1,
    x: "random(-500, 500)",
    backgroundColor: "hsl(+=random(-100, 100), 80%, 50%)",
  });
// box-4
gsap.to(".box-4", {
    x: "random(0, 500)",
    y: "+=50",
    duration: 1,
    repeat: -1,
    yoyo: true,
    repeatRefresh: true
  });
