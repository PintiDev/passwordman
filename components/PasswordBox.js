import React from "react";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
const PasswordBox = ({ finalPassword }) => {
  return (
    <div className="h-14 w-full mb-6 flex-shrink-0 bg-themeGray text-gray-300 justify-between rounded-md px-2 sm:px-4 flex items-center text-xl">
      <p>{finalPassword}</p>
      <button
        onClick={() => {
          copy(finalPassword);
          toast.success("Password Copied !");
        }}
      >
        <MdContentCopy />
      </button>
    </div>
  );
};

export default PasswordBox;
