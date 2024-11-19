import { useState } from "react";

const Toast = ({ message, textButton, toastBgColor, duration = 3000, buttonBgColor }) => {
  const [isToast, setIsToast] = useState(false);  

  const showToast = () => {
    setIsToast(true);
    setTimeout(() => {
      setIsToast(false);
    }, duration);
  };


  return (
    <>
      <button
        className={`text-white bg-${buttonBgColor} p-2 rounded-lg shadow-md focus:outline-none`}
        onClick={showToast}
      >
        {textButton}
      </button>
      <div
        className={`fixed bottom-10 right-4 bg-${toastBgColor} text-white p-2 px-4 rounded-lg shadow-md transition-opacity duration-500 ${
          isToast ? "opacity-100" : "opacity-0"
        } z-1`}
      >
        {message}
      </div>
    </>
  );
};

export default Toast;
