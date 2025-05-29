"use client";

import React, { useState } from "react";

import { MdOutlineBedroomParent, MdAir } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWater } from "react-icons/fa";

import StatCard from "@/components/StatCard";
import DynamicChart from "@/components/chart";
import SideBar from "@/components/SideBar";
import ProgressBar from "@/components/ProgressBar";
import SearchBar from "@/components/SearchBar";

const Dashboard = () => {
  const [isOpenAQI, setIsOpenAQI] = useState(false);
  const [isOpenWQI, setIsOpenWQI] = useState(false);

  const rooms = [
    { room: "Bedroom", state: "Good" },
    { room: "Backyard", state: "Average" },
    { room: "Living Room", state: "Good" },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full bg-[#E8F3FC] min-h-screen ">
      <SideBar />
      <div className="md:w-5/6 ">
        <SearchBar page={"Dashboard"} />
        <div className="md:px-20 space-y-5">
          <h2 className="text-center md:text-start">Rooms</h2>
          <div className="flex space-x-5 justify-center md:justify-start">
            {rooms.map(({ room, state, id = crypto.randomUUID() }) => {
              return (
                <div
                  key={id}
                  className="flex items-center bg-white rounded-md p-1 space-x-2 w-1/4"
                >
                  <MdOutlineBedroomParent className=" w-1/3 h-12  text-[#2396EF] bg-[#CCDBFD] rounded-md" />
                  <div className="flex flex-col  w-2/3">
                    <p>{room}</p>
                    <p
                      className={` flex  justify-center border-2 text-xs rounded-md ${
                        state === "Good"
                          ? "border-green-500 text-green-500"
                          : "border-yellow-500 text-yellow-500"
                      }`}
                    >
                      {state}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-center md:text-start">Levels</h2>

          <div
            className="flex justify-between bg-white p-2 rounded-md cursor-pointer"
            onClick={() => setIsOpenAQI((prev) => !prev)}
          >
            <p className="flex items-center ">
              <MdAir className="w-6 h-6 mr-2" />
              AQI
            </p>
            <button>
              <RiArrowDropDownLine className="w-8 h-8" />
            </button>
          </div>

          {isOpenAQI && (
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
                  <span className="w-1/2 text-sm text-gray-500">
                    Condition:
                  </span>
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
                  <span className="w-1/2 text-sm text-gray-500">
                    Condition:
                  </span>
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
          )}

          <div
            className="flex justify-between bg-white p-2 rounded-md cursor-pointer"
            onClick={() => setIsOpenWQI((prev) => !prev)}
          >
            <p className="flex items-center">
              <FaWater className="w-6 h-6  mr-2" />
              WQI
            </p>
            <button>
              <RiArrowDropDownLine className="w-8 h-8" />
            </button>
          </div>

          {isOpenWQI && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
