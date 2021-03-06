import clsx from "clsx";
import React from "react";

export const Input = ({ label, type, placeholder, className, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      {label && (
        <label className="text-primary-900 font-semibold pb-1">{label}</label>
      )}
      <input
        className={clsx(
          "w-full px-2 py-1 rounded-lg text-black focus:outline-none",
          className
        )}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
