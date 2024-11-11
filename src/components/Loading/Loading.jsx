import React from "react";
import PropTypes from "prop-types";

const Loading = ({ text = "Loading", textColor = "#4fa94d", textStyle = {} }) => {
  return (
    <div className="spinning-loader">
      <div className="spinner"></div>
      <span style={{ color: textColor, ...textStyle }}>{text}</span>
      <style jsx>{`
        .spinning-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh; /* Full height for centering */
        }

        .spinner {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid ${textColor}; /* Color of the spinner */
          border-radius: 50%;
          width: 50px; /* Size of the spinner */
          height: 50px; /* Size of the spinner */
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// PropTypes for the Loading component
Loading.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  textStyle: PropTypes.object,
};

export default Loading;