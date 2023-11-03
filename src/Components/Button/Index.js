import React from "react";

const varients = {
    primary:" text-white bg-[#DB4444] font-medium text-[16px] h-16 w-60 rounded-none",
    danger: "bg-red-600 text-white hover:anabled:bg-red-700 focus:ring-red-500",
    naked: "hover:text-gray-600 text-gray-500 shadow-none",
    addToCart:"text-white bg-black h-10 w-[270px] font-medium rounded-none text-white",
    allToCart:"bg-white  border-black h-[56px] w-[227px] font-medium rounded-none text-black",
    shopNow:"bg-black text-white text-lg rounded-none pt-2 border-1 w-28 border-b-white",
    formButton:"text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm",
};
const sizes = {
    small: "px-2 py-1 text-xs leading-1",
    medium: "px-4 py-2 text-sm ",
    large: "px-4 py-2 text-base ",
};
export const Button = ({
    className,
    varient = "primary",
    size = "small",
    ...props
}) => {
    return (
        <button
            className={`inline-flex justify-center  items-center  border border-transparent
               rounded-md font-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
               disabled:opactiy-50 disabled:cursor-not-allowed
               ${className}
               ${varients[varient]}
               ${sizes[size]}
               `}
            {...props}
        />
    );
};

