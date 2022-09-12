//import { gsap } from "gsap";
//gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.defaults({ease:"power1.inOut"})

let tl2 = gsap.timeline();
tl2
.fromTo("path", {x:-10, y:-10}, {x:0, y:0, duration:0.8, strokeDashoffset: 0, opacity:0.6, stagger:0.2},-2)
.to("path",{duration:0.5, opacity:1})
.fromTo(".panels__h2",{duration:1, yPercent: 80,},{duration:1.5, yPercent: 0, opacity:1}, ">-1.5")

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".panels",
    toggleActions: "resume pause reverse pause",
    start: "top top",
    end: "bottom top",
    markers: true,
    scrub: 1,
    pin: true,
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: {min: 0.2, max: 2}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    }
  },
});

tl
.addLabel("start")
.from(".panels__1", {xPercent: -100})
.addLabel("1")
.from(".panels__2", {xPercent: 100})
.addLabel("2")
.from(".panels__3", {yPercent:-100})
.addLabel("end")


// to("#rect", {
  //   motionPath: {
    //       path: "path",
    //       align: "path",
    //       alignOrigin: [0.5, 0.5],
    //       autoRotate: true
    //   },
    //   stagger: 0.1,
    //   duration: 1,
    //   ease: "power1.inOut"
    // })

// .to(".panels__svg2Box",{duration:1, opacity:1})