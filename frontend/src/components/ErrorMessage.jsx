import "./ErrorMessage.css";

function ErrorMessage({ error }) {
  return <p className="error-message">{error}</p>;
}

export default ErrorMessage;
