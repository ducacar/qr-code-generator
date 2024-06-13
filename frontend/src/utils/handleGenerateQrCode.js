import generateQrCode from "./generateQrCode";

const handleGenerateQrCode = async (
  url,
  honeyPot,
  setQrCode,
  setUrl,
  setError
) => {
  if (honeyPot) {
    setError("Bot detected");
    return;
  }

  setError(""); // Clear any existing error
  generateQrCode(url, setQrCode, setUrl, setError);
};

export default handleGenerateQrCode;
