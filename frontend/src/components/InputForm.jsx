import { useState } from "react";
import "./InputForm.css";

function InputForm({ url, setUrl, generateQrCode }) {
  const [honeyPot, setHoneyPot] = useState("");

  return (
    <div className="input-form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />

      <input
        type="text"
        className="hidden"
        name="honeyPot"
        autoComplete="off"
        tabIndex="-1"
        value={honeyPot}
        onChange={(e) => setHoneyPot(e.target.value)}
      />
      <button onClick={() => generateQrCode(url, honeyPot)}>
        Generate QR Code
      </button>
    </div>
  );
}

export default InputForm;
