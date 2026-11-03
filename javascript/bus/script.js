
let yesSize = 1;


/* =========================
   NO BUTTON
========================= */

function moveNoButton() {

    const noBtn =
        document.getElementById("noBtn");

    const yesBtn =
        document.getElementById("yesBtn");


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        20;

    const maxY =
        window.innerHeight -
        buttonHeight -
        20;


    const x =
        Math.max(
            10,
            Math.random() * maxX
        );


    const y =
        Math.max(
            10,
            Math.random() * maxY
        );


    noBtn.style.position = "fixed";

    noBtn.style.left =
        `${x}px`;

    noBtn.style.top =
        `${y}px`;


    /* YES Button ပိုကြီးလာမယ် */

    yesSize += 0.15;


    if (yesSize > 2.5) {
        yesSize = 2.5;
    }


    yesBtn.style.transform =
        `scale(${yesSize})`;


    /* Message ပြောင်းမယ် */

    const messages = [

        "သေချာရဲ့လား? 🥺",

        "NO မပြောပါနဲ့နော် 😭",

        "ကိုယ့်ကို အခွင့်အရေးလေးပေးပါ 💕",

        "တစ်ခါလောက် ပြန်စဉ်းစားပေးပါ 🥹",

        "YES လေးက ပိုလှတယ်နော် 😏",

        "အချစ်ကို ရှောင်လို့မရဘူးနော် ❤️",

        "လာပါ... YES လေးနှိပ်ပါ 💖",

        "ကိုယ့်ကို မငြင်းပါနဲ့နော် 🥺❤️",

        "မင်းကို တကယ်ချစ်လို့ပါ 💗"

    ];


    const message =
        document.getElementById("message");


    const randomMessage =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];


    message.innerText =
        randomMessage;
}


/* =========================
   YES BUTTON
========================= */

function acceptOffer() {

    const gif =
        document.getElementById("gif");

    const question =
        document.getElementById("question");

    const message =
        document.getElementById("message");

    const btnGroup =
        document.querySelector(".btn-group");

    const smallTitle =
        document.querySelector(".small-title");


    /*
     * YES နှိပ်ပြီးရင်
     * မင်းပေးထားတဲ့ GIF ပြောင်းမယ်
     */

    gif.src =
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZzZreWlibmZ1dWNia3Y2ajkwM3pkamdkbWJhMjF5M2F1YXV1NWh2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZdUAmL18qa4j6lUrUN/giphy.gif";


    /*
     * Text ပြောင်းမယ်
     */

    smallTitle.innerText =
        "💖 ဒီနေ့က ကိုယ့်အတွက် အပျော်ဆုံးနေ့ပဲ!";


    question.innerHTML =
        "Yay! မင်းက YES လို့ပြောလိုက်ပြီ! ❤️✨";


    question.classList.add(
        "success-title"
    );


    message.innerText =
        "ကိုယ့်ရဲ့ Valentine လေး ဖြစ်ပေးလို့ ကျေးဇူးတင်ပါတယ် 🥰💐💍";


    /*
     * Button တွေ ဖျောက်မယ်
     */

    btnGroup.style.display =
        "none";


    /*
     * Celebration
     */

    createHearts();
}


/* =========================
   CELEBRATION HEARTS
========================= */

function createHearts() {

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘",
        "💝",
        "🥰",
        "✨"
    ];


    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("span");


        heart.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 +
            "vw";


        heart.style.top =
            Math.random() * 100 +
            "vh";


        heart.style.fontSize =
            Math.random() * 25 +
            15 +
            "px";


        heart.style.zIndex =
            "100";


        heart.style.pointerEvents =
            "none";


        heart.style.animation =
            "celebrate 2s ease forwards";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 2000);
    }
}


/* =========================
   CELEBRATION ANIMATION
========================= */

const style =
    document.createElement("style");


style.innerHTML = `

    @keyframes celebrate {

        0% {
            opacity: 0;

            transform:
                translateY(50px)
                scale(0.3)
                rotate(0deg);
        }


        30% {
            opacity: 1;
        }


        100% {
            opacity: 0;

            transform:
                translateY(-250px)
                scale(1.5)
                rotate(360deg);
        }
    }

`;


document.head.appendChild(style);

