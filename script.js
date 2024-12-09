// script.js

// Generate QR Code
document.getElementById("generateQR").addEventListener("click", function () {
  const qrInput = document.getElementById("qrInput").value;
  const qrContainer = document.getElementById("qrContainer");

  if (qrInput) {
    qrContainer.innerHTML = ""; // Clear any previous QR code
    QRCode.toCanvas(qrContainer, qrInput, function (error) {
      if (error) console.error(error);
    });
  } else {
    alert("Please enter text to generate a QR Code!");
  }
});

// Scan QR Code with Camera
document.getElementById("scanQR").addEventListener("click", function () {
  const qrResult = document.getElementById("qrResult");

  const html5QrCode = new Html5Qrcode("qrContainer");
  Html5Qrcode.getCameras()
    .then((cameras) => {
      if (cameras && cameras.length) {
        html5QrCode.start(
          cameras[0].id,
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            qrResult.textContent = decodedText;
            html5QrCode.stop();
          },
          (error) => {
            console.error("Scanning failed", error);
          }
        );
      } else {
        alert("No cameras found!");
      }
    })
    .catch((err) => {
      console.error("Camera initialization failed", err);
    });
});

// Upload Image and Scan QR Code
document.getElementById("uploadQR").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height);
        if (code) {
          document.getElementById("imageQRResult").textContent = code.data;
        } else {
          alert("No QR code found in the image!");
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});
