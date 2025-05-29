"use client";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

const SearchBar = ({ page }) => {
  const { messages, setIsDark, isDark } = useAuth();
  return (
    <div className="flex flex-col items-center sm:space-y-0 space-y-5 sm:flex-row sm:justify-between p-4  ">
      <h2>{page}</h2>
      <div className="relative">
        <input
          placeholder="Searching Anything Here..."
          className=" py-1 px-7 bg-white rounded-md"
        />
        <CiSearch className="absolute top-1 h-6 w-6" />
      </div>

      <div className="flex items-center space-x-3">
        <div className="bg-gray-400 w-8 h-5 rounded-full flex items-center relative">
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className={`w-4 h-4 bg-white rounded-full absolute top-0.5 ${
              isDark ? "left-0.5" : "right-0.5"
            } `}
          ></button>
        </div>

        <Link
          href="/menu/messages"
          className="border-1 rounded-md flex justify-center items-center relative"
        >
          <IoNotificationsOutline className="w-6 h-6 m-1" />
          <div className="bg-red-500 rounded-full w-3 h-3 flex items-center justify-center text-white text-xs absolute top-1 right-1">
            {messages.length}
          </div>
        </Link>
        <Link
          href="/settings/faqs"
          className="border-1 rounded-md flex justify-center items-center"
        >
          <CiCircleQuestion className="w-6 h-6 m-1" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
