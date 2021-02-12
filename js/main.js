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

// BOX-5
//   repeat and yoyo OUTSIDE stagger object
gsap.to(".box-5", {
    y: 100,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    stagger: {
      from: "center",
      each: 0.1,
    }
  });

//   repeat and yoyo INSIDE stagger object
//   gsap.to(".box-5", {
//     y: 100,
//     duration: 0.5,
//     stagger: {
//       from: "center",
//       each: 0.1,
//       repeat: -1,
//       yoyo: true,
//     }
//   });

// BOX-6
gsap.to(".box-6", {
    duration: 1,
    scale: 0.1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.1,
      from: "center",
      grid: "auto"
      // axis: "y"
    }
  });
//   ball-1
gsap.to('.ball-1', {
    duration: 1.5,
    x: 200,
    scale: 2,
    ease: 'bounce'
  })

  gsap.to('.ball-1', {
    duration: 1.5,
    delay: 1.5,
    x: 0,
    scale: 1,
    ease: 'back.inOut(3)'
  })
  // ball-2
  gsap
  .timeline({
    repeat: -1,
    defaults: {
      duration: 1.5
    }
  })
  .to('.ball-2', {
    x: 200,
    scale: 2,
    ease: "bounce"
  })
  .to('.ball-2', {
    x: 0,
    scale: 1,
    ease: "back.inOut(3)"
  })
  .to('.ball-2', {
    x: -200,
    scale: 2,
    ease: "bounce"
  })
  .to('.ball-2', {
    x: 0,
    scale: 1,
    ease: "back.inOut(3)"
  });

  // bal-3
  gsap
  .timeline({
    defaults: {
      duration: 1.5
    }
  })
  .to('.ball-3', {
    x: 300,
    scale: 2,
    ease: "bounce"
  })
  .to('.ball-4', {
    x: 300,
    scale: 2,
    ease: "bounce"
  }, '-=1')
  .to('.ball-5', {
    x: 300,
    scale: 2,
    ease: "bounce"
  }, '-=1')

