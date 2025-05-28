"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineBedroomParent, MdAir } from "react-icons/md";
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
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWater } from "react-icons/fa";

import ProgressBar from "@/components/ProgressBar";
import StatCard from "@/components/StatCard";
import DynamicChart from "@/components/chart";

const Dashboard = () => {
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
          <h2>Dashboard</h2>
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
        <div className="md:px-20 space-y-5">
          <h2 className="text-center md:text-start">Rooms</h2>
          <div className="flex space-x-5 justify-center md:justify-start">
            <div className="flex items-center bg-white rounded-md p-1 space-x-2 w-1/4">
              <MdOutlineBedroomParent className=" w-1/3 h-12  text-[#2396EF] bg-[#CCDBFD] rounded-md" />
              <div className="flex flex-col  w-2/3">
                <p>Bedroom</p>
                <p className=" flex  justify-center border-2 border-green-500 text-green-500 text-xs rounded-md">
                  Good
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-md p-1 space-x-2  w-1/4">
              <MdOutlineBedroomParent className="w-1/3 h-12 text-[#2396EF] bg-[#CCDBFD] rounded-md" />
              <div className="flex flex-col w-2/3">
                <p>Backyard</p>
                <p className="  flex  justify-center  border-2 border-yellow-500 text-yellow-500 text-xs rounded-md">
                  Average
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-md p-1 space-x-2  w-1/4">
              <MdOutlineBedroomParent className="w-1/3 h-12  text-[#2396EF] bg-[#CCDBFD] rounded-md" />
              <div className="flex flex-col w-2/3">
                <p>Living Room</p>
                <p className="  flex justify-center border-2 border-green-500 text-green-500 text-xs rounded-md">
                  Good
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-center md:text-start">Levels</h2>
          <div className="flex justify-between bg-white p-2 rounded-md">
            <p className="flex items-center ">
              <MdAir className="w-6 h-6 mr-2" />
              AQI
            </p>
            <button>
              <RiArrowDropDownLine className="w-8 h-8" />
            </button>
          </div>

          <div className=" grid lg:grid-cols-2 grid-cols-1 w-full mx-auto h-auto">
            <div className=" bg-white p-3 rounded-md flex flex-col justify-center m-2">
              <div className="flex justify-between">
                <h2>PM 2.5</h2>
                <div className="bg-gray-200 rounded px-1 py-0.5 text-xs flex space-x-2">
                  <p>1H</p>
                  <p className="rounded bg-white ">1D</p>
                  <p>1W</p>
                  <p>1M</p>
                </div>
              </div>

              <DynamicChart
                type="line"
                labels={[10, 20, 30, 40, 50]}
                data={[5, 12, 8, 20, 18]}
              />
              <p className="flex py-3">
                <span className="w-1/2 text-sm text-gray-500">Current:</span>
                <span className="w-1/2 text-sm text-gray-500">Condition:</span>
              </p>
            </div>

            <div className="m-2 grid grid-cols-2  min-h-[258px] space-x-5">
              <StatCard
                title={"Temperature"}
                value={25}
                status={"Good"}
                max={100}
                color="green-500"
                symbol={"*C"}
              />
              <StatCard
                title={"Humidity"}
                value={62}
                status={"Moderate"}
                max={100}
                color={"yellow-500"}
                symbol={"%"}
              />
            </div>

            <div className=" bg-white p-3 rounded-md flex flex-col justify-center m-2">
              <div className="flex justify-between">
                <h2>CO2</h2>
                <div className="bg-gray-200 rounded px-1 py-0.5 text-xs flex space-x-2">
                  <p>1H</p>
                  <p className="rounded bg-white ">1D</p>
                  <p>1W</p>
                  <p>1M</p>
                </div>
              </div>
              <DynamicChart
                className="bg-gradient-to-b from-[#2396EF69] to-white"
                type="line"
                labels={[10, 20, 30, 40, 50]}
                data={[5, 22, 8, 3, 18]}
              />
              <p className="flex py-3">
                <span className="w-1/2 text-sm text-gray-500">Current:</span>
                <span className="w-1/2 text-sm text-gray-500">Condition:</span>
              </p>
            </div>

            <div className=" bg-white p-3 rounded-md  items-center m-2">
              <h2>
                VOC
                <span className="text-[#626262]">
                  (volatile organic compounds)
                </span>
              </h2>
              <div className="flex  items-center justify-center">
                <div className="w-1/3 mx-auto">
                  <DynamicChart
                    type="doughnut"
                    labels={[50, 30, 20]}
                    data={[50, 30, 20]}
                  />
                </div>

                <div className="flex py-5 w-2/3">
                  <ul className="w-full">
                    <li className="flex  text-xs font-bold ">
                      <span className="w-2/5 ">Compound</span>
                      <span className="w-2/5 ">Amt </span>
                      <span className="w-1/5"> </span>
                    </li>
                    <li className="flex  text-xs">
                      <span className="w-2/5">Benzene</span>
                      <span className="w-2/5">50% </span>
                      <span className="w-1/5"> Bad</span>
                    </li>
                    <li className="flex  text-xs">
                      <span className="w-2/5">Toulene</span>
                      <span className="w-2/5">30% </span>
                      <span className="w-1/5"> Average</span>
                    </li>
                    <li className="flex text-xs">
                      <span className="w-2/5">Gas 3</span>
                      <span className="w-2/5">20% </span>
                      <span className="w-1/5"> Good</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between bg-white p-2 rounded-md ">
            <p className="flex items-center">
              <FaWater className="w-6 h-6  mr-2" />
              WQI
            </p>
            <button>
              <RiArrowDropDownLine className="w-8 h-8" />
            </button>
          </div>

          <div>
            <div className="grid gap-4">
              <ProgressBar
                label="Temperature"
                value={43}
                max={100}
                status={"Average"}
                symbol={"*C"}
              />
              <ProgressBar
                label="PH Level"
                value={7.5}
                max={14}
                status={"Good"}
              />
              <ProgressBar
                label="TDS Level"
                value={115}
                max={500}
                status={"Good"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
