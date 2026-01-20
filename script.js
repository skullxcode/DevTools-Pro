// Converter App Choose

const appSelector = document.getElementById("app-selector")
const pxRemConv = document.getElementById("px-rem-converter")
const baseConv = document.getElementById("base-converter")
const hexRgbConv = document.getElementById("hex-rgb-converter")

pxRemConv.style.display = "none"
baseConv.style.display = "none"
hexRgbConv.style.display = "none"

appSelector.addEventListener("change",()=>{
    pxRemConv.style.display = "none"
    baseConv.style.display = "none"
    hexRgbConv.style.display = "none"
    
    if(appSelector.value === "px-rem"){
        pxRemConv.style.display = "flex"
    }else if(appSelector.value === "base-conv"){
        baseConv.style.display = "flex"
    }else if(appSelector.value === "hex-rgb"){
        hexRgbConv.style.display = "flex"
    }
});

// PX-REM Logic

const pxInput = document.getElementById("px-value")
const remInput = document.getElementById("rem-value")


pxInput.addEventListener("input", () => {
    const val = parseFloat(pxInput.value);
    remInput.value = !isNaN(val) ? (val / 16).toFixed(3) : "";
})

remInput.addEventListener('input', () => {
    const val = parseFloat(remInput.value);
    pxInput.value = !isNaN(val) ? (val * 16).toFixed(0) : "";
});

// Base-Conv Logic

const decInput = document.getElementById("dec-value")
const binInput = document.getElementById("bin-value")

decInput.addEventListener("input", () => {
    const val = parseInt(decInput.value);
    binInput.value = !isNaN(val) ? (val.toString(2)) : "";
})

binInput.addEventListener("input", () => {
    const val = parseInt(binInput.value,2);
    decInput.value = !isNaN(val) ? (val) : "";
})


// HEX-RGB Logic

const hexInput = document.getElementById("hex-value");
const rgbInput = document.getElementById("rgb-value");

hexInput.addEventListener("input", () => {
    let hex = hexInput.value.replace('#', '');
    
    if (hex.length === 6) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            rgbInput.value = `${r}, ${g}, ${b}`;
        }
    }
});

rgbInput.addEventListener("input", () => {
    let parts = rgbInput.value.split(',');
    
    if (parts.length === 3) {
        let r = parseInt(parts[0]);
        let g = parseInt(parts[1]);
        let b = parseInt(parts[2]);

        const isValid = (n) => !isNaN(n) && n >= 0 && n <= 255;

        if (isValid(r) && isValid(g) && isValid(b)) {
            const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
            hexInput.value = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        }
    }
});