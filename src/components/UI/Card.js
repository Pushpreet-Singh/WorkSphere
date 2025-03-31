import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export { Card, CardContent };