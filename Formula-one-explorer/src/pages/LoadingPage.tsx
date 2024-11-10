import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./loadingPage.css"; // Import the CSS for animation

const LoadingPage = () => {
  return (
    <div className="loader-container">
      <AiOutlineLoading3Quarters size={50} className="react-logo" />
    </div>
  );
};

export default LoadingPage;
