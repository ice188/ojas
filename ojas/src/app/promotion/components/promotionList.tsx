import { contactData } from "@/data/contact-data";
import { promotionData } from "@/data/promotion-data";
import Link from "next/link";

export default function PromotionList({
  promotionType,
}: {
  promotionType: keyof typeof promotionData;
}) {
  return (
    <div className="bg-white pb-8  relative mt-[98px] pt-8">
      <div className="w-full max-w-7xl px-8 sm:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <h1  className="w-full font-salsa text-4xl font-bold font-manrope leading-normal text-[#2a5136] text-center">
            {promotionData[promotionType].name} Deals
          </h1>

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
                          <p className="font-salsa text-2xl font-bold font-manrope text-[#2a5136]">
                            {promotion.name}
                          </p>

                          <p className="font-light font-noto text-gray-500 text-md leading-relaxed">
                            You will save ${promotion.saving} with this deal!
                          </p>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          <div>
                            <p className="font-normal font-noto text-lg leading-relaxed text-[#2a5136]">
                              ${promotion.price}
                            </p>
                          </div>

                          <Link href={contactData.phone_link}>
                            <button className="font-noto shadow-md text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD]">
                              Call Now
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
