"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.userName === userName && u.password === password
    );

    if (matchedUser) {
      login(matchedUser);
      alert("Giriş başarılı!");
      router.push("/menu/dashboard");
    } else {
      alert("Kullanıcı adı veya şifre hatalı.");
    }
    setUserName("");
    setPassword("");
    setIsChecked(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen max-w-full bg-[#E8F3FC] relative">
      <img
        src="/Mask group1.png"
        alt=""
        className="w-5/6 h-screen absolute left-0"
      />
      <div className="flex items-center absolute top-0 left-5 space-x-2">
        <img src="logo.png" className="w-12 h-12" />
        <h1 className="font-bold text-[55px]  bg-gradient-to-r from-[#807DFF] via-[#5C4687] to-[#00FFA3] bg-clip-text text-transparent ">
          EcoGuard
        </h1>
      </div>
      <div className="flex flex-col px-6 py-14 lg:w-1/3 md:w-1/2 w-2/3 justify-center space-y-5 bg-[#434343E5] absolute opacity-90 text-white rounded-md ">
        <form className="space-y-5" onSubmit={handleLogin}>
          <img
            src="login.png"
            className="absolute right-[-60px] bottom-0 h-2/3"
          />
          <h2 className="font-bold text-[37px]">Sign In</h2>
          <div className="relative">
            <span>
              <FaUserAlt className="absolute top-2 left-2 pointer-events-none" />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-2 rounded-md px-7 py-1 w-full"
            />
          </div>
          <div className="relative w-full">
            <span>
              <RiLockPasswordFill className="absolute top-2 left-2 pointer-events-none" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border-2 rounded-md px-7 py-1 w-full"
            />
            <span>
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
            </span>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <span className="text-[16px]">
              I agree
              <span className="font-bold">
                <a href="#">Terms and Conditions & Private Policy </a>
              </span>
              by Signing in
            </span>
          </div>
          <div className="flex flex-col space-y-5 px-4 pt-16">
            <button
              type="submit"
              className="bg-white text-[#0068C8] font-bold text-[27px] rounded-md p-0.5 cursor-pointer"
            >
              Log In
            </button>
          </div>
        </form>
        <button
          className="font-bold text-[27px] rounded-md border-white border-2 cursor-pointer mx-4"
          onClick={() => router.push("/sign&log/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
