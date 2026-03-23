gsap.registerPlugin(ScrollTrigger);

// 1. Initial Load Animation
const introTl = gsap.timeline();

introTl.to("#main-headline", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "expo.out"
})
.to("#hero-image", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "back.out(1.7)"
}, "-=1") // Starts 1 second early for a layered effect
.to("#stats-container", {
    opacity: 1,
    y: -20,
    stagger: 0.2,
    duration: 1
}, "-=0.5");

// 2. Scroll-Driven Interaction
// This links the car's movement directly to the scrollbar
gsap.to("#hero-image", {
    scrollTrigger: {
        trigger: "main",      // The parent element providing the height
        start: "top top",     // Start when main is at the top
        end: "bottom bottom", // End when main reaches the bottom
        scrub: 1.5,           // Smoothly "catches up" to the scroll
    },
    x: 400,                   // Moves right
    rotation: 15,             // Tilts slightly
    scale: 1.8,               // Gets larger as you scroll down
    filter: "blur(0px)",      // You can even animate CSS filters
});

// Headline fades out as you scroll down
gsap.to("#main-headline", {
    scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "30% top",
        scrub: true,
    },
    opacity: 0,
    scale: 0.8,
});
