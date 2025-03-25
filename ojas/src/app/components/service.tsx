"use client";
import { serviceData } from "@/data/service-data";
import Link from "next/link";

export default function Service() {
  return (
    <div className="text-[#2a5136] bg-white relative px-0 md:px-16 pt-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-col justify-center items-center gap-2 pb-8 sm:pb-16 sm:pt-8">
          <h2 className="font-lora text-2xl sm:text-4xl font-bold font-manrope leading-normal ">
            Our Services
          </h2>
          <p className="font-noto text-sm ">
            Served by professionals, tailored for your well-being
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 mx-4 sm:mx-0">
          {Object.keys(serviceData).map((categoryUrl) => {
            const service =
              serviceData[categoryUrl as keyof typeof serviceData];

            return (
              <div
                key={categoryUrl}
                className="w-full flex flex-col xl:flex-row bg-white shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Image Section */}
                <div className="w-full xl:w-1/2 relative">
                  <img
                    className="w-full h-full object-cover aspect-[16/9] xl:aspect-auto"
                    src={service.img_url}
                    alt={service.name}
                  />
                </div>

                {/* Content Section */}
                <div className="w-full h-full xl:w-2/3 flex flex-col justify-between relative">
                  <div className="flex flex-col gap-4 p-6">
                    <h3 className="font-lora text-2xl font-bold font-manrope">
                      {service.name}
                    </h3>
                    <p className="font-light font-noto text-gray-500 text-md leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Button Section - Aligned Bottom Right */}
                  <Link
                    href={`/service/${categoryUrl}`}
                    className="font-noto mt-auto self-end shadow-md text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD] "
                  >
                    See Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
