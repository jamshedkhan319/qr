const wrapper = document.querySelector(".wrapper"),
    qrInput = document.querySelector("#qr-input"),
    generateBtn = document.querySelector("#generate-btn"),
    qrImg = document.querySelector(".qr-code img");

let previousValue = "";

// Generate QR Code on button click
generateBtn.addEventListener("click", () => {
    const inputValue = qrInput.value.trim();

    // Prevent generating the same QR code again
    if (!inputValue || inputValue === previousValue) return;

    previousValue = inputValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        inputValue
    )}`;
    
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

// Remove QR code if input is empty
qrInput.addEventListener("input", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        previousValue = "";




const qrText = document.querySelector("#qr-text");
const copyBtn = document.querySelector("#copy-btn");
const cutBtn = document.querySelector("#cut-btn");

generateBtn.addEventListener("click", () => {
    const inputValue = qrInput.value.trim();

    if (!inputValue || inputValue === previousValue) return;

    previousValue = inputValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        inputValue
    )}`;

    qrText.innerText = inputValue; // Update the text with the input value

    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

// Copy to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(qrText.innerText).then(() => {
        alert("Text copied to clipboard!");
    });
});

// Cut to clipboard
cutBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(qrText.innerText).then(() => {
        qrText.innerText = ""; // Clear the text after cutting
        alert("Text cut to clipboard!");
    });
});

        // test copy butto

        

// Remove QR code if input is empty
qrInput.addEventListener("input", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        previousValue = "";
        qrText.innerText = "Generated QR Code URL will appear here...";
    }
});




       

        



        
