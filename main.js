function handleBold() {
    let textarea = document.getElementById("text-area")
    let currentFont = textarea.style.fontWeight
    if (currentFont === "bold") {
        textarea.style.fontWeight = "normal"
    } else {
        textarea.style.fontWeight = "bold";

    }
}

function handleItalic() {
    let textarea = document.getElementById("text-area")
    let currentFont = textarea.style.fontStyle
    if (currentFont === "italic") {
        textarea.style.fontStyle = "normal"
    } else {
        textarea.style.fontStyle = "italic"
    }
}

function handleTextLeft() {
    let textarea = document.getElementById("text-area"); textarea.style.textAlign = "left";
}

function handleTextRight() {
    let textarea = document.getElementById("text-area");
    textarea.style.textAlign = "right"
}

function handleTextCenter() {
    let textarea = document.getElementById("text-area");
    textarea.style.textAlign = "center";
}

function handleUpperCase() {
    let textarea = document.getElementById("text-area");
    let currentFont = textarea.style.textTransform;
    if (currentFont === "uppercase") {
        textarea.style.textTransform = "none"
    } else {
        textarea.style.textTransform = "uppercase"
    }
}

function handleLowerCase() {
    let textarea = document.getElementById("text-area");
    let cuuentFont = textarea.style.textTransform;
    if (cuuentFont === "lowercase") {
        textarea.style.textTransform = "none"
    } else {
        textarea.style.textTransform = "lowercase"
    }
}

function handleCapitalize() {
    let textarea = document.getElementById("text-area");
    let currentFont = textarea.style.textTransform;
    if (currentFont === "capitalize") {
        textarea.style.textTransform = "none"
    } else {
        textarea.style.textTransform = "capitalize"
    }
}

function handleClear() {
    let textarea = document.getElementById("text-area");
    textarea.value = ""
}

function DarkMode() {
    let body = document.body;
    let textarea = document.getElementById("text-area");
    let computedStyle = window.getComputedStyle(body);
    let currentColor = computedStyle.backgroundColor;
    let btn = document.querySelectorAll("button")
    
    if (currentColor === "rgb(36, 38, 43)" || currentColor === "#24262B") {
        body.style.backgroundColor = "white"
        textarea.style.backgroundColor = "white"
        textarea.style.color = 'black'
        btn.forEach(btn => {
            btn.style.color = "black";
        })
    } else {
        body.style.backgroundColor = "#24262B"
        textarea.style.backgroundColor = "#24262B"
        textarea.style.color = 'white'
        btn.forEach(btn => {
            btn.style.color = "white"
        })
    }
}

function Speack() {
    let textarea = document.getElementById("text-area");
    let number = document.getElementById("number");
    let lan = document.getElementById("lan");
    if (textarea.value.trim() === "") {
        alert("Editor is blank")
    }
    let utterance = new SpeechSynthesisUtterance(textarea.value);
    utterance.lang = lan.value;

    let voices = speechSynthesis.getVoices()
    utterance.voice = voices[0];

    for (let index = 1; index < number.value; index++) {
        speechSynthesis.speak(utterance)
    }
    speechSynthesis.speak(utterance)
}

document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.getElementById("text-area");

    if (localStorage.getItem("Text-value")) {
        let storedValue = localStorage.getItem("Text-value");
        textarea.value = storedValue;
    }

    textarea.addEventListener("input", function () {
        localStorage.setItem("Text-value", textarea.value);
    });
});

