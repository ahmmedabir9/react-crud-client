import React from "react";

function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  defaultValue,
  ...props
}) {
  return (
    <div className="flex flex-col pt-4">
      {label && <label className="text-base capitalize">{label}</label>}
      <input
        {...props}
        type={type}
        id={id}
        placeholder={placeholder}
        className="px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none md:w-auto focus:outline-blue-600 focus:shadow-outline"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        defaultValue={defaultValue}
      />
      <p className="text-xs text-right text-red-900">{errorMessage}</p>
    </div>
  );
}

export default InputField;
