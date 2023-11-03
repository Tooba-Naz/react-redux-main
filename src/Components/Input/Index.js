import React from "react";

export const Input = ({
  type,
  name,
  value,
  inputId,
  defaultValue,
  label,
  helperText,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div>
      {label && <label className="block text-sm text-gray-600 font-bold mb-2">{label}</label>}

      {helperText && (
        <label className="block text-sm text-gray-600">{helperText}</label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        id={inputId}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={"h-11 text-sm font-normal bg-[#F5F5F5] text-black w-60 py-2 px-3  mb-1  focus:outline-none focus:shadow-lg"}
      />

      <p className="mt-2 text-sm text-red-600">{error}</p>
    </div>
  );
};
