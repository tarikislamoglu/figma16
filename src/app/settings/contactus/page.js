"use client";

import { useAuth } from "@/app/context/AuthContext";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Teşekkürler, ${formData.name}! Mesajınızı aldık.`);
    setFormData({ name: "", email: "", message: "" });
  };
  const { isDark } = useAuth();
  return (
    <div
      className={`flex flex-col md:flex-row w-full  min-h-screen ${
        isDark ? "bg-gray-700 " : "bg-[#E8F3FC] "
      }`}
    >
      <SideBar />
      <div className="md:w-5/6 ">
        <SearchBar page={"Contact Us"} />
        <div className="   bg-white rounded-lg flex flex-col justify-center items-center space-y-5 m-10 p-6">
          {" "}
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Bize Ulaşın
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adınız
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-posta
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mesajınız
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
