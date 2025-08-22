import React from "react";

const InputField = ({ label, type, id, placeholder, register }) => {
  return (
    <div>
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
