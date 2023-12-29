import React from "react";

const Title = ({ title, className }) => {
  return <h1 className={`font-sans-bold font-20 text-color-545454 ${className}`}>{title}</h1>;
};

export default Title;
