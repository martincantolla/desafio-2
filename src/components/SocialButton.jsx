import React from "react";

const SocialButton = ({ prop1, prop2, prop3 }) => {
  return (
    <div className="socialB">
      <i className={`fa-brands fa-xl fa-${prop1}`}></i>
      <i className={`fa-brands fa-xl fa-${prop2}`}></i>
      <i className={`fa-brands fa-xl fa-${prop3}`}></i>
    </div>
  );
};

export default SocialButton;
