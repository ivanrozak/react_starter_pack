import React from "react";

export default function FormInput(props) {
  const { label, children, required } = props;
  return (
    <>
      <div className="mb-3">
        <div className="mb-2">
          {label}
          {required && <span className="text-danger">*</span>}
        </div>
        {children}
      </div>
    </>
  );
}
