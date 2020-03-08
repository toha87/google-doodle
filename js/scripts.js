console.log('OK');

let date = new Date().getHours();

if ((24 - date) > 7) {
    console.log("day")
    document.querySelector("#stage").style.background = "white";
} else {
    console.log("night")
    document.querySelector("#stage").style.background = "black"
}

const switchTime = () => {
    if (document.querySelector("#stage").style.background === "white") {
        document.querySelector("#stage").style.background = "black"
        document.querySelector("#sun").style.display = "none"
    } else {
        document.querySelector("#stage").style.background = "white";
        document.querySelector("#sun").style.display = "inline"
    }
}

let stageHeight = document.querySelector("#stage").offsetHeight;
let stageWidth = document.querySelector("#stage").offsetWidth;

let rocket = document.querySelector("#rocket");

rocket.style.position = "absolute";
rocket.style.top = `${stageHeight-60}px`;
rocket.style.right = `${stageWidth-110}px`;
rocket.style.zIndex = "2";

const positionStars = () => {
    let i;
    for (i = 1; i <= 16; i++) {

        gsap.fromTo(`#star-${i}`, { autoAlpha: 0 }, { autoAlpha: 0.5, duration: 3 });

        let starYRandomPosition = Math.floor((Math.random() * 270) + 1);
        let starXRandomPosition = Math.floor((Math.random() * 570) + 1);

        let star = document.querySelector(`#star-${i}`);

        star.style.position = "absolute";
        star.style.top = `${starYRandomPosition}`;
        star.style.right = `${starXRandomPosition}`;
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
        x: -410,
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
    x: 50,
    y: -220
})

timeLineRocket.to("#rocket", 1, {
    opacity: 0,
    x: 50,
    y: -220
})