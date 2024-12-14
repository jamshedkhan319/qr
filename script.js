document.getElementById('generate-btn').addEventListener('click', function () {
    const text = document.getElementById('text').value;
    const qrCodeDiv = document.getElementById('qrcode');

    // Clear previous QR code
    qrCodeDiv.innerHTML = '';

    // Generate QR Code
    QRCode.toCanvas(qrCodeDiv, text, function (error) {
        if (error) {
            alert('Error generating QR Code: ' + error);
        }
    });
});
