import { linkData } from "@/data/link-data";
import { promotionData } from "@/data/promotion-data";
import Link from "next/link";

export default function PromotionList({
  promotionType,
}: {
  promotionType: keyof typeof promotionData;
}) {
  return (
    <div className="bg-white pb-16 pt-8 relative mt-[121px]">
      <div className="w-full max-w-7xl px-8 sm:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal text-center pb-3">
                {promotionData[promotionType].name} Deals
              </h2>

              <ul role="list" className="divide-y w-full">
                {promotionData[promotionType].promotions.map((promotion) => (
                  <li
                    key={promotion.name}
                    className="flex flex-col sm:flex-row gap-6 py-8 w-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6 w-full">
                      {/* Left Side (Promotion Info) */}
                      <div className="min-w-0 flex flex-col justify-between">
                        <p className="text-lg font-semibold text-gray-900">
                          {promotion.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed break-words">
                          You will be saving ${promotion.saving} with this deal!
                        </p>
                        <p className="mt-4 text-lg font-semibold text-gray-900">
                          ${promotion.price}
                        </p>
                      </div>

                      {/* Right Side (Booking Button) */}
                      <div className="flex flex-col justify-between h-full">
                        <div className="mt-auto flex justify-start sm:justify-end">
                          <Link href={linkData.booking_link}>
                            <button className="text-sm text-white font-semibold rounded-md w-[120px] border bg-indigo-600 px-3 py-2 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
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
