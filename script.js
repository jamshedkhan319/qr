const wrapper = document.querySelector(".wrapper"),
    qrInput = document.querySelector("#qr-input"),
    generateBtn = document.querySelector("#generate-btn"),
    copyBtn = document.querySelector("#copy-btn"),
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

// Copy text to clipboard
copyBtn.addEventListener("click", () => {
    const inputValue = qrInput.value.trim();

    if (!inputValue) {
        alert("Input field is empty!");
        return;
    }

    navigator.clipboard.writeText(inputValue).then(() => {
        alert("Text copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text!");
    });
});

// Remove QR code if input is empty
qrInput.addEventListener("input", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        previousValue = "";
    }
});
