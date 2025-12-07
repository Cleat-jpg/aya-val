const slidesContainer = document.getElementById("slides");
const totalImages = 48;
const slideWidth = 500; // width of each slide
const gap = 5; // small gap between slides in px

let pos = 0;
let direction = 1; // 1 = forward, -1 = backward
const speed = 2; // forward speed
const reverseSpeed = 2; // faster reverse speed

// generate all slides
for (let i = 1; i <= totalImages; i++) {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    slideDiv.style.marginRight = `${gap}px`;

    const img = document.createElement("img");
    img.src = `us/image (${i}).jpg`; 
    slideDiv.appendChild(img);

    slidesContainer.appendChild(slideDiv);
}

// total width including gaps
const totalWidth = totalImages * (slideWidth + gap) - gap;

function loop() {
    // choose speed based on direction
    const currentSpeed = direction === 1 ? speed : reverseSpeed;

    pos += currentSpeed * direction;
    slidesContainer.style.transform = `translateX(${-pos}px)`;

    // reverse direction when reaching ends
    if (pos >= totalWidth) {
        direction = -1;
        pos = totalWidth;
    } else if (pos <= 0) {
        direction = 1;
        pos = 0;
    }

    requestAnimationFrame(loop);
}

loop();
