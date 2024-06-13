import { useState } from "react";
import InputForm from "./components/InputForm";
import QrCodeDisplay from "./components/QrCodeDisplay";
import ErrorMessage from "./components/ErrorMessage";
import handleGenerateQrCode from "./utils/handleGenerateQrCode";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="App">
      <Header />
      <main>
        <InputForm
          url={url}
          setUrl={setUrl}
          generateQrCode={(url, honeyPot) =>
            handleGenerateQrCode(url, honeyPot, setQrCode, setUrl, setError)
          }
        />

        {error && <ErrorMessage error={error} />}
        {qrCode && <QrCodeDisplay qrCode={qrCode} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
