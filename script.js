document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".auto-play-video");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 } )
    observer.observe(video);
})

// gsap.registerPlugin(ScrollTrigger);

// const cards = gsap.utils.toArray('.card');

// cards.forEach((card, i) => {
//     gsap.set(card, {
//         opacity: i === 0 ? 1 : 0.5,
//         y: 0,
//         scale: 1 - (i * 0.08),
//         zIndex: cards.length - i,
//         transformOrigin: 'center center',
//         yPercent: -50,
//         xPercent: -50,
//         left: '50%',
//         top: '50%'
//     });

//     const listItems = card.querySelectorAll('.text-content li');
//     listItems.forEach((item, index) => {
//         gsap.set(item, {
//             opacity: 0,
//             x: -20
//         });
//     });

// })

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.cards-container',
//         start: 'top top',
//         end: '+=300%',
//         scrub: 1.5,
//         pin: true,
//         snap: {
//             snapTo: 1 / (cards.length -1),
//             duration: {min: 0.3, max: 0.6},
//             ease: 'power1.inOut'
//         }
//     }
// });

// cards.forEach((card, i) => {
//     if (i < cards.length - 1) {
//         tl.to(card, {
//             y: -50,
//             opacity: 0,
//             scale: 0.85,
//             duration: 0.5,
//             ease: 'power2.inOut'
//         }, i);

//         tl.to(cards[i + 1], {
//             scale: 1,
//             opacity: 1,
//             duration: 0.5,
//             ease: 'power2.out',
//             onStart: () => {
//                 const listItems = cards[i + 1].querySelectorAll('.text-content li');
//                 listItems.forEach((item, index) => {
//                     gsap.to(item, {
//                         opacity: 1,
//                         x: 0,
//                         duration: 0.4,
//                         delay: index * 0.1
//                     });
//                 });
//             }
//         }, i);
//     }
// })