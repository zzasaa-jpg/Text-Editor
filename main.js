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
    let currentColor = body.style.backgroundColor;
    let btn = document.querySelectorAll("button")
    if (currentColor === "darkslategrey") {
        body.style.backgroundColor = "white"
        textarea.style.backgroundColor = "white"
        textarea.style.color = 'black'
        btn.forEach(btn => {
            btn.style.color = "black";
        })
    } else {
        body.style.backgroundColor = "darkslategrey"
        textarea.style.backgroundColor = "darkslategrey"
        textarea.style.color = 'white'
        btn.forEach(btn => {
            btn.style.color = "white"
        })
    }
}