import React from "react";

const Index = ({ children, title, content }) => {
  return (
    <div className="background-image">
      <div className="blur-layer">
        <div className="blur-card">
          <div className="d-flex align-items-center  justify-content-center flex-column h-100 gap-5">
            <div>
              {title && (
                <h1 className="text-center text-color-38393b font-34 font-sans-extra-bold">
                  {title}
                </h1>
              )}
              {content && (
                <p className="text-center text-color-38393b font-18 font-sans-regular">
                  {content}
                </p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
