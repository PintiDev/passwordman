import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import StrengthBar from "./StrengthBar";
import generator from "generate-password";
import { PasswordMeter } from "password-meter";

const PasswordCreate = ({ setFinalPassword, finalPassword }) => {
  const [power, setPower] = useState("Weak");
  const [valid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    character_lenght: 6,
    upperCase: false,
    lowerCase: false,
    numbers: false,
    symbols: false,
  });
  useEffect(() => {
    if (formData.lowerCase !== true && formData.upperCase !== true) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [formData]);

  const createPassword = () => {
    if (valid) {
      setFinalPassword(
        generator.generate({
          length: formData.character_lenght,
          numbers: formData.numbers,
          symbols: formData.symbols,
          lowercase: formData.lowerCase,
          uppercase: formData.upperCase,
        })
      );
      setPower(new PasswordMeter().getResult(finalPassword).status);
    }
  };
  return (
    <div className="bg-themeGray w-full h-full sm:px-8 px-4 sm:py-6 py-3 rounded-md  ">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300  font-semibold">Character Length</p>
          <p className="text-themeLime  font-semibold text-2xl">
            {formData?.character_lenght}
          </p>
        </div>
        <input
          type="range"
          className="w-full slider "
          value={formData.character_lenght}
          min={6}
          max={15}
          onChange={(e) =>
            setFormData({
              character_lenght: e.target.value,
              lowerCase: formData.lowerCase,
              upperCase: formData.upperCase,
              numbers: formData.numbers,
              symbols: formData.symbols,
            })
          }
        />
      </div>
      <div className="w-full flex flex-col gap-y-6 mb-6">
        <div className="flex items-center gap-x-4">
          <label className="relative w-5 h-5  ">
            <input
              checked={formData.upperCase}
              type="checkbox"
              onChange={(e) => {
                setFormData({
                  character_lenght: formData.character_lenght,
                  upperCase: e.target.checked,
                  lowerCase: formData.lowerCase,
                  numbers: formData.numbers,
                  symbols: formData.symbols,
                });
              }}
              className=" rounded-md  outline-none  appearance-none peer overflow-hidden  w-full h-full    outline-gray-300  outline-[2px]"
            />
            <div className="absolute w-full h-full rounded-md peer-checked:scale-100   scale-0 transition-all z-10 bg-themeLime top-0 left-0 flex items-center justify-center">
              <AiOutlineCheck className="text-[14px]" />
            </div>
          </label>
          <p className="text-gray-300">Include Uppercase Letters</p>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="relative w-5 h-5  ">
            <input
              type="checkbox"
              checked={formData.lowerCase}
              onChange={(e) => {
                setFormData({
                  character_lenght: formData.character_lenght,
                  upperCase: formData.upperCase,
                  lowerCase: e.target.checked,
                  symbols: formData.symbols,
                  numbers: formData.numbers,
                });
              }}
              className=" rounded-md  outline-none  appearance-none peer overflow-hidden  w-full h-full    outline-gray-300  outline-[2px]"
            />
            <div className="absolute w-full h-full rounded-md peer-checked:scale-100   scale-0 transition-all z-10 bg-themeLime top-0 left-0 flex items-center justify-center">
              <AiOutlineCheck className="text-[14px]" />
            </div>
          </label>
          <p className="text-gray-300">Include Lowercase Letters</p>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="relative w-5 h-5  ">
            <input
              type="checkbox"
              checked={formData.numbers}
              onChange={(e) => {
                setFormData({
                  character_lenght: formData.character_lenght,
                  upperCase: formData.upperCase,
                  lowerCase: formData.lowerCase,
                  numbers: e.target.checked,
                  symbols: formData.symbols,
                });
              }}
              className=" rounded-md  outline-none  appearance-none peer overflow-hidden  w-full h-full    outline-gray-300  outline-[2px]"
            />
            <div className="absolute w-full h-full rounded-md peer-checked:scale-100   scale-0 transition-all z-10 bg-themeLime top-0 left-0 flex items-center justify-center">
              <AiOutlineCheck className="text-[14px]" />
            </div>
          </label>
          <p className="text-gray-300">Include Numbers</p>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="relative w-5 h-5  ">
            <input
              type="checkbox"
              checked={formData.symbols}
              onChange={(e) => {
                setFormData({
                  character_lenght: formData.character_lenght,
                  upperCase: formData.upperCase,
                  lowerCase: formData.lowerCase,
                  numbers: formData.numbers,
                  symbols: e.target.checked,
                });
              }}
              className=" rounded-md  outline-none  appearance-none peer overflow-hidden  w-full h-full    outline-gray-300  outline-[2px]"
            />
            <div className="absolute w-full h-full rounded-md peer-checked:scale-100   scale-0 transition-all z-10 bg-themeLime top-0 left-0 flex items-center justify-center">
              <AiOutlineCheck className="text-[14px]" />
            </div>
          </label>
          <p className="text-gray-300">Include Symbols</p>
        </div>
      </div>
      <div className="bg-themeBlack sm:h-16 py-3 sm:py-0 sm:gap-y-0 gap-y-4 w-full flex justify-between items-center flex-col sm:flex-row px-4 mb-6">
        <p className="text-gray-500 uppercase text-lg font-semibold">
          strength
        </p>
        <StrengthBar value={power} />
      </div>
      <button
        disabled={!valid}
        onClick={createPassword}
        className="flex opacity-40 cursor-not-allowed valid:cursor-auto valid:opacity-100 items-center rounded-md font-semibold tracking-wider justify-center h-14 w-full bg-themeLime uppercase"
      >
        Generate
      </button>
    </div>
  );
};

export default PasswordCreate;
