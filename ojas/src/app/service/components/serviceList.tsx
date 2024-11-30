import { linkData } from "@/data/link-data";
import { serviceData } from "@/data/service-data";

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

              <ul role="list" className="divide-y ">
                {serviceData[categoryUrl].services.map((service) => (
                  <li
                    key={service.name}
                    className="flex flex-col sm:flex-row justify-between gap-6 py-8"
                  >
                    <div className="flex min-w-0 gap-x-6">
                      <img
                        alt=""
                        src={service.img_url}
                        className="size-64 object-cover flex-none rounded-full bg-gray-50"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-lg font-semibold text-gray-900">
                          {service.name}
                        </p>

                        <p className="mt-1 text-sm text-gray-500 leading-relaxed break-words">
                          {service.description}
                        </p>

                        <div className="flex justify-between items-end">
                          <div className="mt-4 text-sm text-gray-700">
                            <p className="text-lg font-semibold text-gray-900">
                              ${service.price_range}
                            </p>
                            {service.pressure && (
                              <p className="mt-1 text-medium text-gray-500">
                                Pressure: {service.pressure}
                              </p>
                            )}
                          </div>

                          <a href={linkData.booking_link}>
                            <button className="text-xs sm:text-sm text-gray-500 font-normal rounded-md w-[100px] mt-4 border bg-white px-3 py-2 text-sm font-semibol hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                              Book Now
                            </button>
                          </a>
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
