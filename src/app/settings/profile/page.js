"use client";
import { useAuth } from "@/app/context/AuthContext";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import React from "react";

const Profile = () => {
  const { currentUser, isDark } = useAuth();
  const { userName, emailAddress, password, phoneNumber, id } = currentUser;
  const InfoRow = ({ label, value }) => (
    <div className="flex justify-between border-b pb-2">
      <span className="font-semibold text-gray-600">{label}:</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
  return (
    <div
      className={`flex flex-col md:flex-row w-full  min-h-screen ${
        isDark ? "bg-gray-500 " : "bg-[#E8F3FC] "
      }`}
    >
      <SideBar />
      <div className="md:w-5/6">
        <SearchBar page={"Profile"} />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Profil Bilgileri
            </h2>
            <div className="space-y-4">
              <InfoRow label="Kullanıcı ID" value={id} />
              <InfoRow label="Kullanıcı Adı" value={userName} />
              <InfoRow label="E-posta" value={emailAddress} />
              <InfoRow label="Telefon Numarası" value={phoneNumber} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
