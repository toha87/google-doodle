console.log('OK');

let stageHeight = document.getElementById('stage').offsetHeight;
let stageWidth = document.getElementById('stage').offsetWidth;

document.getElementById(`cosmonaut`).style.position = "absolute";
document.getElementById(`cosmonaut`).style.top = `${stageHeight-70}px`;
document.getElementById(`cosmonaut`).style.right = `${stageWidth-60}px`;

document.getElementById(`rocket`).style.position = "absolute";
document.getElementById(`rocket`).style.top = `${stageHeight-60}px`;
document.getElementById(`rocket`).style.right = `${stageWidth-110}px`;

const positionStars = () => {
    let i;
    for (i = 1; i <= 16; i++) {

        gsap.fromTo(`#star-${i}`, { autoAlpha: 0 }, { autoAlpha: 0.5, duration: 3 });

        let starYRandomPosition = Math.floor((Math.random() * stageHeight) + 0);
        let starXRandomPosition = Math.floor((Math.random() * stageWidth) + 0);

        document.getElementById(`star-${i}`).style.position = "absolute";
        document.getElementById(`star-${i}`).style.top = `${starYRandomPosition}px`;
        document.getElementById(`star-${i}`).style.right = `${starXRandomPosition}px`;

    }
};

positionStars();

const interval = setInterval(function() {
    positionStars();
}, 5000);

gsap.from("#cosmonaut", {
    opacity: 0,
    y: -200,
    duration: 1
});

gsap.to("#cosmonaut", 2, {
    x: 100,
    y: -200
})

gsap.to("#rocket", 2, {
    x: 100,
    y: -200
})

document.addEventListener("mouseover", () => {
    gsap.to("#brown-planet", .25, { rotationY: 180 })
});


// gsap.to("#cosmonaut", 2, {
//     x: 200,
//     y: -200
// })

// gsap.to("#rocket", 2, {
//     x: 200,
//     y: -200
// })