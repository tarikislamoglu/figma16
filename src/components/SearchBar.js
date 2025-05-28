import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
const SearchBar = ({ page }) => {
  return (
    <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-between p-4  ">
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
  );
};

export default SearchBar;
