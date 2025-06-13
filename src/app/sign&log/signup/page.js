"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

import { FaUserAlt, FaEye, FaEyeSlash, FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const userNameRef = useRef();
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isExisting = users.some((u) => u.userName === userName);
    if (isExisting) {
      setError("Bu kullanıcı adı zaten mevcut.");
      setUserName("");
      userNameRef.current.focus();
      return;
    }

    const newUser = {
      userName,
      emailAddress,
      password,
      phoneNumber,
      id: crypto.randomUUID(),
    };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    login(newUser);
    alert("Kayıt başarılı!");

    setUserName("");
    setEmailAddress("");
    setPhoneNumber("");
    setPassword("");
    setIsChecked(false);

    router.push("/menu/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen max-w-full relative overflow-hidden">
      <img
        src="/Mask group2.png"
        alt=""
        className="w-full h-full object-cover absolute bottom-0"
      />
      <div className="flex items-center p-4 space-x-2 z-10 bg-[#E8F3FC]">
        <img src="/logo.png" className="w-12 h-12" />
        <h1 className="font-bold text-[55px] md:text-[40px] sm:text-[30px] bg-gradient-to-r from-[#807DFF] via-[#5C4687] to-[#00FFA3] bg-clip-text text-transparent">
          EcoGuard
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 lg:w-1/3 md:w-1/2 w-[90%] max-w-[500px] space-y-5 justify-center bg-[#434343E5] text-white opacity-90 rounded-md z-10 my-8"
        >
          <h2 className="font-bold text-[37px] md:text-[30px] text-center">
            Sign Up
          </h2>
          <div className="relative w-full">
            <FaUserAlt className="absolute top-2 left-2 pointer-events-none" />
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              ref={userNameRef}
              className="border-2 rounded-md px-7 py-2 w-full"
            />
          </div>
          <div className="relative w-full">
            <IoMdMail className="absolute top-2 left-2 pointer-events-none" />
            <input
              type="email"
              placeholder="Email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
              className="border-2 rounded-md px-7 py-2 w-full"
            />
          </div>
          <div className="relative w-full">
            <FaPhoneAlt className="absolute top-2 left-2 pointer-events-none" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="border-2 rounded-md px-7 py-2 w-full"
            />
          </div>
          <div className="relative w-full">
            <RiLockPasswordFill className="absolute top-2 left-2 pointer-events-none" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 rounded-md px-7 py-2 w-full"
            />
            {showPassword ? (
              <FaEye
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <div className="w-full">
            <input
              type="checkbox"
              className="mr-2"
              required
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <span className="text-[16px] md:text-[14px]">
              I agree
              <a href="#" className="font-bold">
                Terms and Conditions & Private Policy{" "}
              </a>
              by Signing in
            </span>
          </div>
          <div className="flex flex-col space-y-5 w-full">
            <button
              type="submit"
              className="bg-white text-[#0068C8] font-bold text-[27px] md:text-[22px] rounded-md py-2 cursor-pointer w-full hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </button>
          </div>
          {error && <p className="text-red-500 text-center w-full">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
