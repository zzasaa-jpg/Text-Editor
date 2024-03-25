function handleBold() {
    let textarea = document.getElementById("text-area")
    let currentFont = textarea.style.fontWeight
    if (currentFont === "bold") {
        textarea.style.fontWeight = "normal";
        localStorage.removeItem('font-weight-css');
    } else {
        let BoldText = textarea.style.fontWeight = "bold";
        localStorage.setItem('font-weight-css', BoldText)
    }
}

function handleItalic() {
    let textarea = document.getElementById("text-area")
    let currentFont = textarea.style.fontStyle
    if (currentFont === "italic") {
        textarea.style.fontStyle = "normal";
        localStorage.removeItem('font-style-css');
    } else {
        let ItalicText = textarea.style.fontStyle = "italic";
        localStorage.setItem('font-style-css', ItalicText)
    }
}

function handleTextLeft() {
    let textarea = document.getElementById("text-area");
    let TextLeft = textarea.style.textAlign = "left";
    localStorage.removeItem('text-left-css-value');
    localStorage.removeItem('text-right-css-value');
    localStorage.removeItem('text-center-css-value');
    localStorage.removeItem('text-justify-css-value');
    localStorage.setItem('text-left-css-value', TextLeft);
}

function handleTextRight() {
    let textarea = document.getElementById("text-area");
    let TextRight = textarea.style.textAlign = "right";
    localStorage.removeItem('text-right-css-value');
    localStorage.removeItem('text-left-css-value');
    localStorage.removeItem('text-center-css-value');
    localStorage.removeItem('text-justify-css-value');
    localStorage.setItem('text-right-css-value', TextRight);
}

function handleTextCenter() {
    let textarea = document.getElementById("text-area");
    let TextCenter = textarea.style.textAlign = "center";
    localStorage.removeItem('text-center-css-value');
    localStorage.removeItem('text-right-css-value');
    localStorage.removeItem('text-left-css-value');
    localStorage.removeItem('text-justify-css-value');
    localStorage.setItem('text-center-css-value', TextCenter);
}

function handleTextJustify() {
    let textarea = document.getElementById("text-area");
    let TextJustify = textarea.style.textAlign = "justify";
    localStorage.removeItem('text-justify-css-value');
    localStorage.removeItem('text-center-css-value');
    localStorage.removeItem('text-right-css-value');
    localStorage.removeItem('text-left-css-value');
    localStorage.setItem('text-justify-css-value', TextJustify);
}

function handleUpperCase() {
    let textarea = document.getElementById("text-area");
    let currentFont = textarea.style.textTransform;
    if (currentFont === "uppercase") {
        textarea.style.textTransform = "none";
        localStorage.removeItem("uppercase");
    } else {
        let textTransform = textarea.style.textTransform = "uppercase";
        localStorage.setItem("uppercase", textTransform)
        localStorage.removeItem("LowerCase");
        localStorage.removeItem("Capitalize");
    }
}

function handleLowerCase() {
    let textarea = document.getElementById("text-area");
    let cuuentFont = textarea.style.textTransform;
    if (cuuentFont === "lowercase") {
        textarea.style.textTransform = "none";
        localStorage.removeItem("LowerCase");
    } else {
        let TextLowerCase = textarea.style.textTransform = "lowercase";
        localStorage.setItem("LowerCase", TextLowerCase);
        localStorage.removeItem("uppercase");
        localStorage.removeItem("Capitalize");
    }
}

function handleCapitalize() {
    let textarea = document.getElementById("text-area");
    let currentFont = textarea.style.textTransform;
    if (currentFont === "capitalize") {
        textarea.style.textTransform = "none";
        localStorage.removeItem("Capitalize");
    } else {
        let Capitalize = textarea.style.textTransform = "capitalize";
        localStorage.setItem("Capitalize", Capitalize);
        localStorage.removeItem("LowerCase");
        localStorage.removeItem("uppercase");
    }
}

function handleClear() {
    let textarea = document.getElementById("text-area");
    textarea.value = ""
    localStorage.removeItem("Text-value")
    localStorage.removeItem('text-justify-css-value');
    localStorage.removeItem('text-center-css-value');
    localStorage.removeItem('text-right-css-value');
    localStorage.removeItem('text-left-css-value');
    localStorage.removeItem("Capitalize");
    localStorage.removeItem("LowerCase");
    localStorage.removeItem("uppercase");
}

function DarkMode() {
    let body = document.body;
    let textarea = document.getElementById("text-area");
    let computedStyle = window.getComputedStyle(body);
    let currentColor = computedStyle.backgroundColor;
    let btn = document.querySelectorAll("button");
    let nav = document.getElementById("nav");

    if (currentColor === "rgb(36, 38, 43)" || currentColor === "#24262B") {
        body.style.backgroundColor = "white";
        localStorage.removeItem("body_darkmode");
        textarea.style.backgroundColor = "white";
        localStorage.removeItem("textarea_darkmode");
        textarea.style.color = 'black';
        localStorage.removeItem("textarea_darkmode_color");
        btn.forEach(btn => {
            btn.style.color = "black";
            localStorage.removeItem("btn_color");
        })
        nav.style.background = "white";
        localStorage.removeItem("nav_background");
    } else {
        let body_dark = body.style.backgroundColor = "#24262B";
        localStorage.setItem("body_darkmode", body_dark);
        let textarea_dark = textarea.style.backgroundColor = "#24262B";
        localStorage.setItem("textarea_darkmode", textarea_dark);
        let textarea_dark_mode_color = textarea.style.color = 'white';
        localStorage.setItem("textarea_darkmode_color", textarea_dark_mode_color);
        btn.forEach(btn => {
            btn_color = btn.style.color = "white"
            localStorage.setItem("btn_color", btn_color);
        })
        let nav_background = nav.style.backgroundColor = "#24262B";
        localStorage.setItem("nav_background", nav_background);
    }
}

function Speak() {
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
    let nav = document.getElementById("nav");
    let nav_buttons = document.querySelectorAll("button");

    if (localStorage.getItem("Text-value")) {
        let storedValue = localStorage.getItem("Text-value");
        textarea.value = storedValue;
    }
    if (localStorage.getItem("text-left-css-value")) {
        let storedleftcssvalue = localStorage.getItem("text-left-css-value");
        textarea.style.textAlign = storedleftcssvalue;
    }
    if (localStorage.getItem("text-right-css-value")) {
        let storedrightcssvalue = localStorage.getItem("text-right-css-value");
        textarea.style.textAlign = storedrightcssvalue;
    }
    if (localStorage.getItem("text-center-css-value")) {
        let storedcentercssvalue = localStorage.getItem("text-center-css-value");
        textarea.style.textAlign = storedcentercssvalue;
    }
    if (localStorage.getItem("text-justify-css-value")) {
        let storedcentercssvalue = localStorage.getItem("text-justify-css-value");
        textarea.style.textAlign = storedcentercssvalue;
    }

    if (localStorage.getItem("font-weight-css")) {
        let storedFontcssValue = localStorage.getItem("font-weight-css");
        textarea.style.fontWeight = storedFontcssValue;
    }
    if (localStorage.getItem("font-style-css")) {
        let storedFontcssValue2 = localStorage.getItem("font-style-css");
        textarea.style.fontStyle = storedFontcssValue2;
    }
    if(localStorage.getItem("uppercase")){
        let stored_textTransform_uppercase = localStorage.getItem("uppercase");
        textarea.style.textTransform = stored_textTransform_uppercase;
    }
    if(localStorage.getItem("LowerCase")){
        let LowerCase = localStorage.getItem("LowerCase");
        textarea.style.textTransform = LowerCase;
    }
    if(localStorage.getItem("Capitalize")){
        let Capitalize = localStorage.getItem("Capitalize");
        textarea.style.textTransform = Capitalize;
    }
    if(localStorage.getItem("body_darkmode")){
        let body_darkmode = localStorage.getItem("body_darkmode")
        textarea.style.backgroundColor = body_darkmode;
    }
    if(localStorage.getItem("textarea_darkmode")){
        let textarea_darkmode = localStorage.getItem("textarea_darkmode")
        textarea.style.backgroundColor = textarea_darkmode;
    }
    if(localStorage.getItem("textarea_darkmode_color")){
        let textarea_darkmode_color = localStorage.getItem("textarea_darkmode_color")
        textarea.style.color = textarea_darkmode_color;
    }
    if(localStorage.getItem("btn_color")){
        let btn_color = localStorage.getItem("btn_color")
        nav_buttons.forEach(nav_buttons=>{
            nav_buttons.style.color = btn_color;
        })
    }
    if(localStorage.getItem("nav_background")){
        let nav_background = localStorage.getItem("nav_background")
        nav.style.backgroundColor = nav_background;
    }

    textarea.addEventListener("input", function () {
        localStorage.setItem("Text-value", textarea.value);
        localStorage.setItem("text-left-css-value", textarea.style.textAlign);
        localStorage.setItem("text-center-css-value", textarea.style.textAlign);
        localStorage.setItem("text-right-css-value", textarea.style.textAlign);
        localStorage.setItem("text-justify-css-value", textarea.style.textAlign);
        localStorage.setItem("font-weight-css", textare.style.fontWeight);
        localStorage.setItem("font-style-css", storedFontcssValue2);
        localStorage.setItem("uppercase", stored_textTransform_uppercase);
        localStorage.setItem("LowerCase", LowerCase);
        localStorage.setItem("Capitalize", Capitalize);
        localStorage.setItem("body_darkmode", body_darkmode);
        localStorage.setItem("textarea_darkmode", textarea_darkmode);
        localStorage.setItem("textarea_darkmode_color", textarea.style.color);
        localStorage.setItem("btn_color", btn_color);
        localStorage.setItem("nav_background", nav_background)
    });
});

