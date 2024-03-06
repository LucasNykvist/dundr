import React from "react";

interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return (
    <div
      style={{
        gap: "1rem",
        margin: "2rem auto",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
        maxWidth: "95%",
      }}
    >
      {children}
    </div>
  );
};

export default Content;
