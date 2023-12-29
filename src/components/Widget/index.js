import React from "react";

const Widget = ({ children, bodyClassName, headerClassName, header }) => {
  return (
    <div className='shadow-sm' style={{ borderRadius: "4px", overflow: "hidden" }}>
      <div
        className={`${headerClassName} p-3`}
        style={{ borderBottom: "1px solid #D9D9D9", background: "#FFFFFF" }}
      >
        {header}
      </div>
      
      <div
        className={`w-100 h-100 p-3 ${bodyClassName}`}
        style={{ background: "#FFFFFF" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Widget;
