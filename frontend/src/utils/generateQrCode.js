import axios from "axios";
import DOMPurify from "dompurify";

const generateQrCode = async (url, setQrCode, setUrl, setError) => {
  try {
    setError("");
    const sanitizedUrl = DOMPurify.sanitize(url);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/generate`,
      { url: sanitizedUrl },
      {
        responseType: "blob",
      }
    );

    const qrCodeUrl = window.URL.createObjectURL(new Blob([response.data]));
    setQrCode(qrCodeUrl);
    setUrl("");
  } catch (error) {
    if (error.response) {
      setError(error.response.data.error || "An error occurred");
    } else {
      setError("Network error");
    }
    setUrl("");
  }
};

export default generateQrCode;
