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
  const [error, setError] = useState(null);

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    if (!isChecked) {
      return setError("Şartları ve gizlilik politikasını kabul etmelisiniz.");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.userName === userName && u.password === password
    );

    if (!matchedUser) {
      return setError("Kullanıcı adı veya şifre hatalı.");
    }

    login(matchedUser);
    alert("Giriş başarılı!");
    router.push("/menu/dashboard");

    setUserName("");
    setPassword("");
    setIsChecked(false);
  };
  return (
    <div className="flex flex-col min-h-screen max-w-full bg-[#E8F3FC] relative overflow-hidden">
      <img
        src="/Mask group1.png"
        alt=""
        className="w-full h-full object-cover absolute left-0"
      />
      <div className="flex items-center p-4 space-x-2 z-10 bg-[#E8F3FC]">
        <img src="logo.png" className="w-12 h-12" />
        <h1 className="font-bold text-[55px] md:text-[40px] sm:text-[30px] bg-gradient-to-r from-[#807DFF] via-[#5C4687] to-[#00FFA3] bg-clip-text text-transparent">
          EcoGuard
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col p-6 lg:w-1/3 md:w-1/2 w-[90%] max-w-[500px] justify-center items-center space-y-5 bg-[#434343E5] opacity-90 text-white rounded-md relative z-10 my-8">
          <form className="space-y-5 w-full" onSubmit={handleLogin}>
            <img
              src="login.png"
              className="absolute right-[-60px] bottom-0 h-2/3 hidden lg:block"
            />
            <h2 className="font-bold text-[37px] md:text-[30px] text-center">
              Sign In
            </h2>
            <div className="relative w-full">
              <FaUserAlt className="absolute top-2 left-2 pointer-events-none" />
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
              />
              <span className="text-[16px] md:text-[14px]">
                I agree
                <a className="font-bold" href="#">
                  Terms and Conditions & Private Policy{" "}
                </a>
                by Signing in
              </span>
            </div>
            {error && (
              <p className="text-red-500 text-center w-full">{error}</p>
            )}
            <button
              type="submit"
              className="bg-white text-[#0068C8] font-bold text-[27px] md:text-[22px] rounded-md py-2 cursor-pointer w-full hover:bg-gray-100 transition-colors"
            >
              Log In
            </button>
          </form>
          <button
            className="font-bold text-[27px] md:text-[22px] rounded-md border-white border-2 cursor-pointer w-full py-2 hover:bg-white hover:text-[#0068C8] transition-colors"
            onClick={() => router.push("/sign&log/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
