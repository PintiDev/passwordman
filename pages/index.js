import Head from "next/head";
import React, { useState } from "react";
import PasswordBox from "../components/PasswordBox";
import PasswordCreate from "../components/PasswordCreate";

const Index = () => {
  const [finalPassword, setFinalPassword] = useState("Your Password");
  return (
    <div className="flex p-4 sm:p-0 items-center h-screen justify-center w-full bg-themeBlack font-mono">
      <Head>
        <title>PasswordMan</title>
        <meta
          name="description"
          content="Password man is a easy to use password create free fast and open source Also PasswordMan is a great tool for checking your password strength"
        />
        <meta name="author" content="PintiDev Aziz Imranzade" />
        <meta
          name="keywords"
          content="Password Generator Free, Online Password Generator, Password Strength checker"
        />
      </Head>
      <div className="flex flex-col sm:h-[38rem] sm:w-[30rem] w-full items-center  ">
        <h1 className="text-gray-400 text-3xl font-mono mb-6 ">PasswordMan</h1>
        <PasswordBox finalPassword={finalPassword} />
        <PasswordCreate
          setFinalPassword={setFinalPassword}
          finalPassword={finalPassword}
        />
      </div>
    </div>
  );
};

export default Index;
