import { BiError } from "react-icons/bi";

import "./errorPage.css"; // Import the CSS for animation

const ErrorPage = () => {
  return (
    <div className="error-page" style={{ height: "100vh" }}>
      <div className="loader-container-error">
        <BiError size={80} className="react-logo-error" />
      </div>
      <h1 style={{ color: "red" }}>There has been an unexpected error</h1>
    </div>
  );
};

export default ErrorPage;
