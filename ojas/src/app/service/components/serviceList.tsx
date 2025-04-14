import { linkData } from "@/data/link-data";
import { serviceData } from "@/data/service-data";
import Link from "next/link";

export default function ServiceList({
  categoryUrl,
}: {
  categoryUrl: keyof typeof serviceData;
}) {
  return (
    <div className="bg-[white] pb-8 relative mt-[98px] pt-8">
      <div className="w-full max-w-7xl px-8 sm:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <h1 className="py-4 w-full font-salsa text-4xl font-bold font-manrope leading-normal text-[#2a5136] text-center">
            {serviceData[categoryUrl].name}
          </h1>

          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <ul role="list" className="w-full space-y-8">
                {serviceData[categoryUrl].services.map((service) => (
                  <div
                    key={service.name}
                    className="w-full flex flex-col lg:flex-row bg-white shadow-lg overflow-hidden border border-gray-200"
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                      <img
                        className="w-full h-full object-cover aspect-[16/9] "
                        src={service.img_url}
                        alt={service.name}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="w-full h-full lg:w-2/3 flex flex-col justify-between relative">
                      <div className="flex flex-col gap-4 p-6">
                        <h3 className="font-salsa text-2xl font-bold font-manrope text-[#2a5136]">
                          {service.name}
                        </h3>
                        <p className="font-light font-noto text-gray-500 text-md leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Button Section - Aligned Bottom Right */}
                      <div className="flex justify-between items-center p-6">
                        <div className="flex flex-col">
                          <p className="font-normal font-noto text-lg leading-relaxed text-[#2a5136]">
                            {service.price_range}
                          </p>
                          {service.pressure && (
                            <p className="text-[10px] sm:text-sm font-light mt-1 text-gray-500">
                              Pressure: {service.pressure}
                            </p>
                          )}
                        </div>

                        <Link
                          href={linkData.booking_link}
                          className="font-noto shadow-md text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD]"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  // <li
                  //   key={service.name}
                  //   className="w-full flex flex-col xl:flex-row bg-white shadow-lg overflow-hidden border border-gray-300 gap-6 "
                  // >
                  //   <div className="w-full xl:w-1/2 relative flex flex-col gap-x-9 w-full justify-center items-center sm:flex-row">
                  //     <img
                  //       alt=""
                  //       src={service.img_url}
                  //       className="object-cover aspect-[16/9] xl:aspect-auto flex-none bg-gray-50 sm:pl-4 sm:mb-8"
                  //     />

                  //     <div className="w-full h-full xl:w-2/3 h-full flex flex-col justify-between flex-auto mt-6 sm:mt-0">
                  //       {/* Service Name */}
                  //       <div className="pl-4 sm:pl-0 pr-4 ">
                  //         <p className="font-salsa text-2xl font-bold font-manrope text-[#2a5136]">
                  //           {service.name}
                  //         </p>
                  //         {service.description && (
                  //           <p className="mt-4 text-gray-500 font-light font-noto leading-relaxed break-words">
                  //             {service.description}
                  //           </p>
                  //         )}
                  //       </div>

                  //       {/* Price, Pressure, and Button */}
                  //       <div className="pl-4 sm:pl-0 font-noto flex justify-between items-end mt-8 h-full">
                  //         <div>
                  //           <p className="font-normal font-noto text-lg leading-relaxed text-[#2a5136]">
                  //             {service.price_range}
                  //           </p>
                  //           {service.pressure && (
                  //             <p className="text-sm font-light mt-1 text-gray-500">
                  //               Pressure: {service.pressure}
                  //             </p>
                  //           )}
                  //         </div>

                  //         <Link href=>
                  //           <button className="font-noto mt-auto self-end shadow-md text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD]">
                  //             Book Now
                  //           </button>
                  //         </Link>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Cancellation Policy */}
          <div className="font-noto font-light w-full mt-6 px-4 py-4 bg-gray-100 rounded-md -mt-8">
            <p className="text-gray-500 text-sm ">
              <strong>Cancellation Policy:</strong> We require 24 hour notice on
              all cancellations. Missed appointments or failure to provide
              sufficient notice will be subject to a $25 fee. Please do your
              best to arrive on time to your appointment. If you are more than
              10 minutes late, the appointment may need to be rescheduled. This
              is to ensure that the patients who arrive on time do not wait
              longer than necessary for their scheduled appointment. Thank you
              for your support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
