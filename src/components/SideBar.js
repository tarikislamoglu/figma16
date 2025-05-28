"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CiHome,
  CiMail,
  CiUser,
  CiCircleInfo,
  CiMenuBurger,
  CiSettings,
} from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineRobot } from "react-icons/ai";
const SideBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const MenuList = ({ className }) => {
    return (
      <ul className={className}>
        <li className="flex items-center space-x-2">
          <CiHome />
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="flex items-center space-x-2">
          <CiMail />
          <Link href="/messages">Messages (2)</Link>
        </li>
      </ul>
    );
  };

  const SettingsList = ({ className }) => {
    return (
      <ul className={className}>
        <li className="flex items-center space-x-2">
          <CiUser />
          <Link href="#">Profile</Link>
        </li>
        <li className="flex items-center space-x-2">
          <CiCircleInfo />
          <Link href="#">FAQ's</Link>
        </li>
        <li className="flex items-center space-x-2">
          <PiPhoneCallLight />
          <Link href="#">Contact Us</Link>
        </li>
        <li className="flex items-center space-x-2">
          <IoIosLogOut />
          <Link href="#">Logout</Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <aside className="flex md:flex-col items-center md:py-5 p-3 justify-between md:space-y-5 m-4 md:w-1/6 bg-white rounded-xl text-[#6C7894] md:h-screen">
        <div className="flex justify-center items-center  space-x-1">
          <img src="/avatar.jpg" className="w-12 h-12 rounded-md" />
          <h2 className="text-black">Namık Korona</h2>
        </div>
        <div className=" md:space-y-5 ">
          <h2
            className="text-[#405D9F] cursor-pointer md:cursor-default flex items-center "
            onClick={() => {
              setIsOpenMenu((prev) => !prev);
              setIsOpenSettings(false);
            }}
          >
            <CiMenuBurger className="mx-2" /> Menu
          </h2>
          <MenuList className={"space-y-3 md:block hidden"} />
        </div>

        <div className="md:space-y-5">
          <h2
            className="text-[#405D9F] flex items-center cursor-pointer md:cursor-default"
            onClick={() => {
              setIsOpenSettings((prev) => !prev);
              setIsOpenMenu(false);
            }}
          >
            <CiSettings className="mx-1 w-6 h-6" />
            Settings
          </h2>
          <SettingsList className={"space-y-3 md:block hidden"} />
        </div>

        <div className="md:flex flex-col hidden items-center space-y-5 justify-between w-full">
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
      {
        <MenuList
          className={` ${
            isOpenMenu
              ? " bg-blue-50 p-5 flex items-center justify-center space-x-5 text-[#405D9F] md:hidden"
              : "hidden "
          } `}
        />
      }
      {
        <SettingsList
          className={`${
            isOpenSettings
              ? "flex justify-center items-center space-x-5 p-5 bg-blue-50 text-[#405D9F] md:hidden"
              : "hidden "
          } `}
        />
      }
    </>
  );
};

export default SideBar;
