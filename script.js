// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const noMessage = document.getElementById("no-message");

// Messages for NO button
const noMessages = [
    "are you sure? ;(",
    "sure najud ka ana? hahahha",
    "last najud",
    "ge gud aynalang pero dajud ahahha;p"
];

let messageIndex = 0;
let hideTimeout;

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    const longMessage = document.getElementById("long-message");
    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");

    // Show long message first
    longMessage.style.display = "block";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);

    // After 3 seconds, hide long message and show Valentine question + cat + buttons
    setTimeout(() => {
        longMessage.style.display = "none";
        title.style.display = "block";
        catImg.style.display = "block";
        buttons.style.display = "flex";
    }, 20000); // 3 seconds delay (adjust as needed)
});

// Logic to move the NO btn + change message
noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    // ✅ reset position first
    noBtn.style.transform = "translate(0, 0)";

    // then move
    requestAnimationFrame(() => {
        noBtn.style.transition = "transform 0.5s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });


    // 🔥 Change message every move
    noMessage.textContent = noMessages[messageIndex];
    noMessage.style.display = "block";

    messageIndex = (messageIndex + 1) % noMessages.length;
    clearTimeout(hideTimeout);
});

// Hide message after leaving NO
noBtn.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        noMessage.style.display = "none";
    }, 500);
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "HALA YAYAY!";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});