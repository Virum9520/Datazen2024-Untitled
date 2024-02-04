import React from "react";

const Calorie = () => {
  return (
    <div className="streamlit">
      <iframe
        src="http://localhost:8502"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default Calorie;
