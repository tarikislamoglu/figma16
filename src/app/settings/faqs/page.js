"use client";
import SideBar from "@/components/SideBar";
import React, { useState } from "react";

const faqs = [
  {
    question: "EcoGuard nedir?",
    answer: "EcoGuard, çevre dostu çözümler sunan bir platformdur.",
  },
  {
    question: "Hangi hizmetleri sunuyorsunuz?",
    answer:
      "Enerji tasarrufu, geri dönüşüm ve çevre danışmanlığı hizmetleri sunuyoruz.",
  },
  {
    question: "Hangi ülkelerde hizmet veriyorsunuz?",
    answer: "Şu anda Türkiye ve Avrupa'da hizmet vermekteyiz.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-[#E8F3FC] min-h-screen ">
      <SideBar />
      <div className="w-5/6 mx-auto p-4">
        <h2 className="text-xl font-bold mb-6 text-center">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow cursor-pointer bg-white"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-md">{faq.question}</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
