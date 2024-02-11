// export * from "gsap";
// export * from "gsap/DrawSVGPlugin";
// import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);

gsap.registerPlugin(ScrollTrigger); 

// const laptopScreen = window.matchMedia('(min-width:992px)');

// if (laptopScreen.matches) {
//   gsap.to('.hero1', {
//     scrollTrigger: {
//       treigger: '.hero1',
//       scrub: true,
//       start:'top top'
//     },
//     css: {
//       backgroundColor: $secondary, 
//     }
//   } 
//   )
// }


const tl = gsap.timeline()

// tl.fromTo(
//   '.hero__text', 
//   {
//     y: 100, 
//     opacity: 0
//   }, {
//     y: 0,
//     opacity: 1,
//     duration: 1
//   },
//   1
// ).fromTo(
//     '.hero__title', 
//     {
//     y: 250,
//     opacity: 0
//   }, {
//     y: 0,
//     opacity:1, 
//     duration: 1
//   },
//   0.4
// ).fromTo(
//   '.hero__button-1', {
//     y:30,
//     opacity:0,
//   },{
//     y:0,
//     opacity: 1,
//     duration: 0.5
//   }, 
//   1.5
// ).fromTo(
//   '.hero__button-2', {
//     y: 30,
//     opacity:0,
//   }, {
//     y:1,
//     opacity:1,
//     duration:0.5
//   }, 
//   1.8
// ).fromTo(
//   '.logo', {
//     y: -30,
//     opacity:0,
//   }, {
//     y:1,
//     opacity:1,
//     duration:0.5
//   }, 
//   2
// ).fromTo(
//   '.header__item', {
//     y: -30,
//     opacity:0,
    
//   }, {
//     y:1,
//     opacity:1,
//     duration:0.3,
//     stagger: 0.3,
//   }, 
//   2
// )


// gsap.to('.hero__content', {
//   scrollTrigger: {
//     trigger: '.hero',
//     start: 'top top', 
//     scrub: true
//   },
//   yPercent: 80,
//   scale: 0.5,
//   xPercent: -80,
//   opacity: 0
// })

// gsap.to('.hero__img', {
//   scrollTrigger: {
//     trigger: '.hero',
//     start: 'top top', 
//     scrub: true
//   },
//   scale: 2,
// })

// gsap.from(
//   '.adv__item', {
//     scrollTrigger: {
//       trigger: '.adv', 
//       start: '-20% center',
//       end: '+=700px',
//       scrub: true,
//     },
//     scale:0,
//     transformOrigin: 'left top',
//     stagger: 0.5,
//     ease: "power3.inOut",
//     duration: 1
//   }
// )

// //about animation

// gsap.to (
//   '.about__content', {
//     scrollTrigger: {
//       trigger: '.about__inner',
//       start: '-20% center',
//       scrub: true,  
//     },
//     yPercent: 20,
//   }
// )

// gsap.to (
//   '.about__img', {
//     scrollTrigger: {
//       trigger: '.about__inner',
//       start: '-20% center',
//       scrub: true,
//     },
//     yPercent: -50,
//   }
// )


// //gallery animation

// gsap.from (
//   '.gallery__title', {
//     scrollTrigger: {
//       trigger: '.gallery',
//       start: '-30% bottom',
//       scrub:true,
//     },
//     yPercent: -150,
    
//   }
// )

// const items= gsap.utils.toArray('.gallery__img')
// gsap.to(items, {
//     scrollTrigger: {
//       trigger: '.gallery',
//       start: '-30% center',
//       scrub:true,
      
//     },
//     xPercent: -100 * (items.length-1),
    
//   }
// )


//loader
const tlLoader = gsap.timeline()

// tlLoader
//   .set('.loader__item', {yPercent: -100})
//   .set('.loader__title', {opacity: 0})
//   .to('.loader__item', {
//     yPercent: 0,
//     duration: 0.5,
//     stagger: 0.25
//   })
//   .to('.loader__item', {
//     yPercent: 100,
//     duration: 0.5,
//     stagger: 0.25
//   })
//   .to('.loader__title', {
//     opacity: 1,
//     duration: 1,
//     scale: 1.2
//   })
//   .set('.loader__item', {
//     yPercent: -100
//   } )
//   .to('.loader__title', {
//     opacity:0,
//     duration: 1, 
//     scale:0.8
//   })
//   .to('.loader', {
//     yPercent:-100, 
//     duration:1
//   }, '-=0.2'
//   )


//animationn for desktop


// gsap.to('.hero', {
//     scrollTrigger: {
//     trigger: '.hero__inner',
//     start: 'top top',
//     scrub: true, 
//     markers: true
//   },
//   backgroundColor: "#6222C6"
  
// })



//lenis-smoth scroll

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

//integration lenis on GSAP ScrollTrigger
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//scrollTrigger

let workInfoItems = document.querySelectorAll('.work__photo-item');
workInfoItems.forEach((item, index) => {
  item.style.zIndex = workInfoItems.length - index;
});

gsap.set('.work__photo-item', {
  clipPath: function () {
    return 'inset(0px 0px 0px 0px)'
  }
});

const animation = gsap.to('.work__photo-item:not(:last-child)', {
  clipPath: function () {
    return 'inset(0px 0px 100% 0px)'
  },
  stagger: 0.5,
  ease: 'none',
});

ScrollTrigger.create({
  trigger: '.work',
  start:'top top',
  end: 'bottom bottom',
  animation: animation,
  scrub: true,
})

