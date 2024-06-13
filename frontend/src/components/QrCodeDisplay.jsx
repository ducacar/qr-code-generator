import "./QrCodeDisplay.css";

function QrCodeDisplay({ qrCode }) {
  return (
    <div className="qr-code-display">
      <img src={qrCode} alt="QR Code" />
      <div className="download-btn-container">
        <a href={qrCode} download="qrcode.png" className="download-btn">
          Download QR Code
        </a>
      </div>
    </div>
  );
}

export default QrCodeDisplay;
