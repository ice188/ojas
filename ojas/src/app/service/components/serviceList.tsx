import { linkData } from "@/data/link-data";
import { serviceData } from "@/data/service-data";
import Link from "next/link";

export default function ServiceList({
  categoryUrl,
}: {
  categoryUrl: keyof typeof serviceData;
}) {
  return (
    <div className="pb-16 pt-8 relative mt-[121px]">
      <div className="w-full max-w-7xl px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal text-center pb-3">
                {serviceData[categoryUrl].name} Services
              </h2>

              <ul role="list" className="divide-y w-full">
                {serviceData[categoryUrl].services.map((service) => (
                  <li
                    key={service.name}
                    className="flex flex-col sm:flex-row gap-6 py-8"
                  >
                    <div className="flex flex-col gap-x-9 w-full sm:flex-row">
                      <img
                        alt=""
                        src={service.img_url}
                        className="size-64 object-cover flex-none rounded-full bg-gray-50"
                      />

                      <div className="flex flex-col justify-between flex-auto mt-6 sm:mt-0">
                        {/* Service Name */}
                        <div>
                          <p className="text-lg font-semibold text-gray-900">
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
                            <p className="text-lg font-semibold text-gray-900">
                              ${service.price_range}
                            </p>
                            {service.pressure && (
                              <p className="mt-1 text-sm text-gray-500">
                                Pressure: {service.pressure}
                              </p>
                            )}
                          </div>

                          <Link href={linkData.booking_link}>
                            <button className="text-sm text-white font-semibold rounded-md w-[100px] border bg-indigo-600 px-3 py-2 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
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
