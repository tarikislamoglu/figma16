"use client";
import React, { useState } from "react";
import Link from "next/link";

import { IoNotificationsOutline } from "react-icons/io5";
import {
  CiCircleQuestion,
  CiSearch,
  CiHome,
  CiMail,
  CiUser,
  CiCircleInfo,
} from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineRobot } from "react-icons/ai";

const Messages = () => {
  const messages = [
    {
      status: "Alert",
      text: "Benzene percentage is high. Long exposure to benzene can cause various lungs conditions",
      time: 5,
    },
    {
      status: "Danger",
      text: "You Lost 8 mins worth of your lifespan",
      time: 12,
    },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#E8F3FC] min-h-screen ">
      <aside className="flex flex-col items-center py-5 justify-between space-y-5 m-4 md:w-1/6 bg-white rounded-xl text-[#6C7894] md:h-screen">
        <div className="flex justify-center items-center  space-x-1">
          <img src="/avatar.jpg" className="w-12 h-12 rounded-md" />
          <h2 className="text-black">Namık Korona</h2>
        </div>
        <div className="space-y-5">
          <h2
            className="text-[#405D9F] cursor-pointer md:cursor-none"
            onClick={() => setIsOpenMenu((prev) => !prev)}
          >
            Menu
          </h2>
          <ul
            className={`space-y-3 md:block ${isOpenMenu ? "block" : "hidden"} `}
          >
            <li className="flex items-center space-x-2">
              <CiHome />
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="flex items-center space-x-2">
              <CiMail />
              <Link href="/messages">Messages (2)</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="text-[#405D9F]">Settings</h2>
          <ul className="space-y-3 hidden md:block">
            <li className="flex items-center space-x-2">
              <CiUser />
              <a href="#">Profile</a>
            </li>
            <li className="flex items-center space-x-2">
              <CiCircleInfo />
              <a href="#">FAQ's</a>
            </li>
            <li className="flex items-center space-x-2">
              <PiPhoneCallLight />
              <a href="#">Contact Us</a>
            </li>
            <li className="flex items-center space-x-2">
              <IoIosLogOut />
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-5 justify-between w-full">
          <div className="flex items-center justify-center space-x-2 w-1/2 md:w-full">
            <img src="logo.png" className="w-6 h-6" />
            <h1 className="font-bold bg-gradient-to-r from-[#807DFF] via-[#5C4687] to-[#00FFA3] bg-clip-text text-transparent ">
              EcoGuard
            </h1>
          </div>
          <div className="flex items-center justify-center bg-[#CCDBFD] rounded-md p-3  text-[#284680] font-bold space-x-2 w-1/2 md:w-full">
            <AiOutlineRobot className="w-6 h-6" />
            <p>Chat Bot</p>
          </div>
        </div>
      </aside>
      <div className="md:w-5/6 ">
        <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-between p-4  ">
          <h2>Notifications</h2>
          <div className="relative">
            <input
              placeholder="Searching Anything Here..."
              className=" py-1 px-7 bg-white rounded-md"
            />
            <CiSearch className="absolute top-1 h-6 w-6" />
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-gray-400 w-8 h-5 rounded-full flex items-center relative">
              <button className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></button>
            </div>

            <div className="border-1 rounded-md flex justify-center items-center">
              <IoNotificationsOutline className="w-6 h-6 m-1" />
            </div>
            <div className="border-1 rounded-md flex justify-center items-center">
              <CiCircleQuestion className="w-6 h-6 m-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 px-10 relative">
          {messages.map(({ text, time, status }) => {
            return (
              <div className="bg-white rounded p-3">
                <p>
                  <span className="text-xs bg-red-500 text-white rounded  px-1 mr-5">
                    {status}
                  </span>
                  <span className="text-xs">{time} mins ago</span>
                </p>
                <p className="text-[#606060]">{text}</p>
              </div>
            );
          })}
          <button className="text-[#3C80F7] absolute top-1 right-1/10">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
