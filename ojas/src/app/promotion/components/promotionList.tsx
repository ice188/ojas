import { linkData } from "@/data/link-data";
import { promotionData } from "@/data/promotion-data";
import Link from "next/link";

export default function PromotionList({
  promotionType,
}: {
  promotionType: keyof typeof promotionData;
}) {
  return (
    <div className="bg-white pt-16 relative mt-[98px]">
      <div className="w-full max-w-7xl px-8 sm:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <h2  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className="text-white bg-[#91AC8F] text-3xl font-bold font-manrope leading-normal text-center pt-3 pb-3 -mb-8">
            {promotionData[promotionType].name} Deals
          </h2>

          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <ul role="list" className="divide-y w-full">
                {promotionData[promotionType].promotions.map((promotion) => (
                  <li
                    key={promotion.name}
                    className="flex flex-col sm:flex-row gap-6 py-8"
                  >
                    <div className="flex flex-col gap-x-9 w-full sm:flex-row">
                      <div className="flex flex-col justify-between flex-auto mt-6 sm:mt-0">
                        <div>
                          <p className="text-lg font-semibold text-[#66785F]">
                            {promotion.name}
                          </p>

                          <p className="mt-1 text-sm text-gray-500 leading-relaxed break-words">
                            You will save ${promotion.saving} with this deal!
                          </p>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          <div>
                            <p className="text-lg font-semibold text-[#66785F]">
                              ${promotion.price}
                            </p>
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
