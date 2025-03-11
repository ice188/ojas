import { linkData } from "@/data/link-data";
import { serviceData } from "@/data/service-data";
import Link from "next/link";

export default function ServiceList({
  categoryUrl,
}: {
  categoryUrl: keyof typeof serviceData;
}) {
  return (
    <div className="bg-white pb-8 relative mt-[98px]">
      <div className="w-full max-w-7xl px-8 sm:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          {/* Cancellation Policy */}
          <div className="w-full mt-6 px-4 py-4 bg-[#F9F9F9] rounded-md -mt-8">
            <p className="text-gray-500 text-sm text-center">
              <strong>Cancellation Policy:</strong> We require 24 hour notice on
              all cancellations. Missed appointments or failure to provide
              sufficient notice will be subject to a $25 fee. Please do your
              best to arrive on time to your appointment. If you are more than
              10 minutes late, the appointment may need to be rescheduled. This
              is to ensure that the patients who arrive on time do not wait
              longer than necessary for their scheduled appointment. Thank you for your support!
            </p>
          </div>

          <h2
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className="text-white bg-[#91AC8F] text-3xl font-bold font-manrope leading-normal text-center pt-3 pb-3 -mb-8"
          >
            {serviceData[categoryUrl].name}
          </h2>

          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <ul role="list" className="divide-y w-full">
                {serviceData[categoryUrl].services.map((service) => (
                  <li
                    key={service.name}
                    className="flex flex-col sm:flex-row gap-6 py-8"
                  >
                    <div className="flex flex-col gap-x-9 w-full justify-center items-center sm:flex-row">
                      <img
                        alt=""
                        src={service.img_url}
                        className="size-64 object-cover flex-none rounded-full bg-gray-50"
                      />

                      <div className="flex flex-col justify-between flex-auto mt-6 sm:mt-0">
                        {/* Service Name */}
                        <div>
                          <p className="text-lg font-semibold text-[#66785F]">
                            {service.name}
                          </p>
                          {service.description && (
                            <p className="mt-1 text-sm text-gray-500 leading-relaxed break-words">
                              {service.description}
                            </p>
                          )}
                        </div>

                        {/* Price, Pressure, and Button */}
                        <div className="flex justify-between items-end mt-4">
                          <div>
                            <p className="text-lg font-semibold text-[#66785F]">
                              {service.price_range}
                            </p>
                            {service.pressure && (
                              <p className="mt-1 text-sm text-gray-500">
                                Pressure: {service.pressure}
                              </p>
                            )}
                          </div>

                          <Link href={linkData.booking_link}>
                            <button className="shadow-md border-0 text-white bg-[#66785F] text-xs sm:text-sm font-normal rounded-md w-[100px] mt-4 border px-3 py-2 text-sm font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
