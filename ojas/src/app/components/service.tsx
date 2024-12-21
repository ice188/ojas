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
    <div className="bg-white pb-8 lg:pb-0 pt-8 relative">
      <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="-mb-5 lg:-mb-4 md:-mt-0 text-[#66785F] text-4xl font-bold font-manrope leading-normal text-center">
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
                      className={`inline-block p-4 border-b-2 rounded-t-lg text-md ${
                        activeTab === categoryUrl
                          ? "text-[#66785F] border-[#66785F] "
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
              <div className="w-full max-w-7xl px-8 md:px-16 lg:pb-16 mx-auto">
                <div className="w-full justify-start items-center pt-10 gap-8 lg:gap-16 grid lg:grid-cols-2 grid-cols-1">
                  <img
                    className="max-w-[250px] lg:max-w-[400px] lg:mx-0 mx-auto w-full rounded-3xl object-cover"
                    src={
                      serviceData[activeTab as keyof typeof serviceData].img_url
                    }
                    alt={
                      serviceData[activeTab as keyof typeof serviceData].name
                    }
                  />
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                      <h2 className="text-[#66785F] text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
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
                          className="shadow-md border-0 text-white bg-[#66785F] text-xs sm:text-sm font-normal rounded-md w-[100px] mt-4 border px-3 py-2 text-sm font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
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
