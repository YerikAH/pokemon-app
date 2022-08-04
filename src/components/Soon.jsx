import React from "react";
import "./styles/animation.css";
function Soon({ setSoon }) {
  const centerLoad = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    zIndex: "3000",
    display: "grid",
    background: "#121212",
    placeItems: "center",
    top: "0",
    left: "0",
    placeContent: "center",
  };
  const lettercenter = {
    color: "white",
    fontStyle: "italic",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginTop: "4rem",
    textAlign: "center",
    maxWidth: "300px",
    fontSize: "0.9rem",
  };
  setTimeout(() => {
    setSoon(false);
  }, 4000);
  return (
    <div>
      <div className="center-loader" style={centerLoad}>
        <div className="loader-soon"></div>
        <div style={{ display: "flex" }}>
          <svg
            width="38"
            height="53"
            viewBox="0 0 38 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 6.31546V45.0684C3.95864 44.2927 6.71933 44.9669 12.3226 46.8531V30.5361H27.7097V50.9324C31.9768 50.126 34.1886 49.5079 37 47.363V6.82536C37 6.82536 33.2672 3.79013 27.7097 2.0763V21.6127H12.3226V2C5.76221 3.57549 1 6.31546 1 6.31546Z"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </div>
        <p style={lettercenter}>
          We are working very hard on it, they will be available soon.
        </p>
      </div>
    </div>
  );
}

export default Soon;
