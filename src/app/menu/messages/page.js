"use client";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import { useAuth } from "@/app/context/AuthContext";

const Messages = () => {
  const { messages, isDark } = useAuth();

  return (
    <div
      className={`flex flex-col md:flex-row w-full  min-h-screen ${
        isDark ? "bg-gray-500 " : "bg-[#E8F3FC] "
      }`}
    >
      <SideBar />
      <div className="md:w-5/6 ">
        <SearchBar page={"Notifications"} />
        <div className="flex flex-col space-y-5 px-10 relative">
          {messages.map(({ text, time, status, id = crypto.randomUUID() }) => {
            return (
              <div key={id} className="bg-white rounded p-3">
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
