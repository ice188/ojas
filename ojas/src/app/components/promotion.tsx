import { linkData } from "@/data/link-data";
import Link from "next/link";

export default function Promotion() {
  return (
    <div className="text-[#2a5136] font-noto bg-white pt-8 pb-16 relative">
      <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="py-4  md:-mt-0  font-salsa text-2xl sm:text-4xl font-bold font-manrope leading-normal ">
                Promotions
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white  gap-y-8 text-center text-normal font-semibold">
            
            <Link
              href={`promotion/promotion`}
              className="font-noto mt-auto text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD]  w-[300px] mt-4 border px-3 py-2 font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              TIME-LIMITED OFFERING
            </Link>
            <Link
              href={"/promotion/spa-package"}
              className="font-noto mt-auto text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD] w-[300px] border px-3 py-2 font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              SPA PACKAGES
            </Link>
            <Link
              href={`${linkData.gift_card_link}`}
              className="font-noto mt-auto text-white bg-[#2a5136] text-sm font-medium px-8 py-4 hover:bg-[#B2C9AD] w-[300px] border px-3 py-2 font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              GIFT CARD
            </Link>
            <Link href={"/legal/giftcard"}>Giftcard Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
