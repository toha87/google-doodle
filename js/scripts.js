console.log('OK');

let stageHeight = document.getElementById('stage').offsetHeight;
let stageWidth = document.getElementById('stage').offsetWidth;

document.getElementById(`rocket`).style.position = "absolute";
document.getElementById(`rocket`).style.top = `${stageHeight-60}px`;
document.getElementById(`rocket`).style.right = `${stageWidth-110}px`;
document.getElementById(`rocket`).style.zIndex = "2";

const positionStars = () => {
    let i;
    for (i = 1; i <= 16; i++) {

        gsap.fromTo(`#star-${i}`, { autoAlpha: 0 }, { autoAlpha: 0.5, duration: 3 });

        let starYRandomPosition = Math.floor((Math.random() * 250) + 1);
        let starXRandomPosition = Math.floor((Math.random() * 500) + 1);

        console.log(starXRandomPosition, starYRandomPosition)

        document.getElementById(`star-${i}`).style.position = "absolute";
        document.getElementById(`star-${i}`).style.top = `${starYRandomPosition}`;
        document.getElementById(`star-${i}`).style.right = `${starXRandomPosition}`;
    }
};

positionStars();

const interval = setInterval(function() {
    positionStars();
}, 5000);

let timeLineRocket = gsap.timeline();
let timeLineCosmonaut = gsap.timeline();

timeLineCosmonaut.from("#cosmonaut", {
        opacity: 0,
        y: -10,
        duration: 1
    })
    .to("#cosmonaut", 2, {
        x: -340,
        duration: 2
    }, "+=3")

timeLineRocket.to("#rocket", 2, {
    x: 100,
    y: -200
})

timeLineRocket.to("#rocket", 2, {
    x: 450,
    y: -200,
    rotationY: 180
})

timeLineRocket.to("#rocket", 2, {
    x: 100,
    y: -220
})

timeLineRocket.to("#rocket", 1, {
    opacity: 0,
    x: 100,
    y: -220
})

// document.addEventListener("mouseover", () => {
//     gsap.to("#brown-planet", .25, { rotationY: 180 })
// });