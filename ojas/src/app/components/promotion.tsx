import { linkData } from "@/data/link-data";
import Link from "next/link";

export default function Promotion() {
  return (
    <div className="bg-white pt-8 pb-16 relative">
      <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
        <div className="w-full justify-center items-center gap-8 grid grid-cols-1">
          <div className="w-full flex-col justify-center items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="-mb-5 lg:-mb-4 md:-mt-0 text-[#66785F] text-4xl font-bold font-manrope leading-normal text-center">
                Promotion & Deals
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-8 text-center">
            <Link
              href={`promotion/promotion`}
              className="shadow-md border-0 text-white bg-[#66785F] text-2xl font-normal rounded-md w-[300px] mt-4 border px-3 py-2 font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Special Promotion
            </Link>
            <Link
              href={"/promotion/spa-package"}
              className="shadow-md border-0 text-white bg-[#66785F] text-2xl font-normal rounded-md w-[300px] border px-3 py-2 font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Spa Package
            </Link>
            <Link
              href={`${linkData.gift_card_link}`}
              className="shadow-md border-0 text-white bg-[#66785F] text-2xl font-normal rounded-md w-[300px] border px-3 py-2 font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Purchase Gift Card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
