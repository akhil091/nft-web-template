
//scaling animation of the car
$(document).ready(function () {
    $(window).on("scroll", function () {
        // let lock = $(this).scrollTop();
        // console.log(lock);
        // let lockPos = lock * 0.0015;
        // let scaleFactor = lockPos < 1 ? 1 : lockPos >= 3 ? 3 : lockPos;
        // $(".car").css("transform", "scale(" + scaleFactor + ")");
        //lock=6441
        console.log("Y offset",window.pageYOffset);
        window.requestAnimationFrame(scrollPlay);
        
    });
  }
)

var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 2000, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
    let videoFrame = window.pageYOffset - 7000;
  var frameNumber  = videoFrame/playbackConst;
  console.log("Frame ",frameNumber);
  vid.currentTime  = videoFrame < 0 ? 0 : frameNumber;
//   window.requestAnimationFrame(scrollPlay);
}



//on refresh make scroll bar initial position 0
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//GSAP animations start
gsap.registerPlugin(ScrollTrigger);
//car entering into the screen animation
gsap.set(".car", { x: "100%" });
gsap.to(".car", { duration: 1, x: "0%" });
gsap.to(".front-tyre", { duration: 1, rotation: -720 });
gsap.to(".back-tyre", { duration: 1, rotation: -720 });
//braking animation when car stops
var mydiv = new TimelineMax();
mydiv
.fromTo(".side-car", 1, { y: 0 }, { y: 3 })
.to(".side-car", 1.5, { y: 0, ease: "elastic.out( 1, 0.3)" });


// gsap.to('.car',{
//   scrollTrigger:{
//     trigger: '.car',
//     start: "top 500",
//     toggleAction: 'restart pause reverse pause',
//     scrub:2
// },
//     opacity:0
// })
gsap.to('.car1', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom 400",
        toggleAction: 'restart pause reverse pause',
        scrub: 2
    },
    opacity:1
})
gsap.to('.car2', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -1000",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
gsap.to('.car3', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -3000",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
      },
    opacity:1
})
gsap.to('.car4', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -4000",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
gsap.to('.car5', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -5000",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
gsap.to('.car6', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -6000",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
//rotation starts
gsap.to('#v0', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -7000",
        toggleAction: 'restart pause reverse pause',
        scrub: true
     },
    opacity:1,
})

// gsap.to('#v0', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -9000",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true
//     },
//     display: none
// })

// gsap.to('#v0', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -7400",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true
        
//     },
//     scale: 0.5
// })
// gsap.to('.car9', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -8000",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true
        
//     },
//     opacity:1
// })
// gsap.to('.car10', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -8600",
//         toggleAction: 'restart pause reverse pause',
//         scrub:true,
//     },
//     opacity:1
// })
// gsap.to('.car11', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -9200",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true
//     },
//     opacity:1
// })
// gsap.to('.car12', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -9800",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true
        
//     },
//     opacity:1
// })
// gsap.to('.car13', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -10400",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true
        
//     },
//     opacity:1
// })

// gsap.to('#v0', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -10990",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true

//         },
//     opacity:0,
   
// })
// gsap.to('.car14', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -9500",
//         toggleAction: 'restart pause reverse pause',
//         scrub: true

//         },
//     opacity:1,
//     "z-index": 10
   
// })

// circle sensor animation
gsap.to('.circle', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -9300",
        toggleAction: 'restart pause reverse pause',
        scrub:true,
    },
    display: "block"
})
gsap.to('.circle', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -9600",
        toggleAction: 'restart pause reverse pause',
        scrub:true,
    },
    display: "none"
})
// gsap.to('.cardio', {
//     scrollTrigger:{
//         trigger: '.car',
//         start: "top -10400",
//         toggleAction: 'restart pause reverse pause',
//         scrub:true,
//     },
//     visibility: "hidden",
// })
