"use client";
import { useState } from "react";
import { serviceData } from "@/data/service-data";
import Link from "next/link";

export default function Service() {
  const [activeTab, setActiveTab] = useState(Object.keys(serviceData)[0]);

  const handleTabClick = (categoryUrl: string) => {
    setActiveTab(categoryUrl);
  };

  return (
    <div className="bg-white pb-8 sm:pb-16 pt-8 relative">
      <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="text-green-800 text-4xl font-bold font-manrope leading-normal text-center">
                Our Services
              </h2>
            </div>
          </div>
          <div className="mx-auto w-full rounded-3xl object-cover">
            <div className="text-lg font-medium text-center text-gray-500 border-b border-gray-200">
              <ul className="w-full flex overflow-x-auto overflow-hidden">
                {Object.keys(serviceData).map((categoryUrl) => (
                  <li key={categoryUrl} className="me-2 w-full">
                    <button
                      onClick={() => handleTabClick(categoryUrl)}
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === categoryUrl
                          ? "text-green-800 border-green-800 "
                          : "border-transparent hover:text-gray-500 hover:border-gray-200 "
                      }`}
                    >
                      {
                        serviceData[categoryUrl as keyof typeof serviceData]
                          .name
                      }
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
                <div className="w-full justify-start items-center pt-10 gap-8 lg:gap-16 grid lg:grid-cols-2 grid-cols-1">
                  <img
                    className="max-w-[400px] lg:mx-0 mx-auto w-full rounded-3xl object-cover"
                    src={
                      serviceData[activeTab as keyof typeof serviceData].img_url
                    }
                    alt={
                      serviceData[activeTab as keyof typeof serviceData].name
                    }
                  />
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                      <h2 className="text-green-800 text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
                        {
                          serviceData[activeTab as keyof typeof serviceData]
                            .name
                        }
                      </h2>
                      <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center max-w-7xl mx-auto">
                        {
                          serviceData[activeTab as keyof typeof serviceData]
                            .description
                        }{" "}
                        <br />
                        <br />
                        <Link
                          href={`/service/${activeTab}`}
                          className="mt-4 text-green-600 hover:text-green-500"
                        >
                          See Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
