import { contactData } from "@/data/contact-data";
import { openingTimeData } from "@/data/opening-time-data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#91AC8F] " >
      <div className="w-full mx-auto w-full border-none">

        <div className=" grid grid-cols-2 gap-y-8 md:gap-y-16 gap-16 px-8 md:px-16 py-8 md:grid-cols-3">
          {/* Hours of Service */}
          <div>
            <p className=" mb-6 font-bold md:text-xl text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Opening Hours
            </p>
            <ul className="grid text-white w-[140px] md:w-[180px] font-medium">
              {openingTimeData.map(({ day_of_week, hours }) => (
                <li
                  className="mb-4 flex justify-between items-center"
                  key={day_of_week}
                >
                  <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className="text-xs md:text-sm font-semibold text-white">
                    {day_of_week}
                  </span>
                  <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className="text-xs md:text-sm">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-center items-center">
            <p className="mb-6 font-bold md:text-xl  text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Contact Us
            </p>
            <ul className="text-white font-medium">
              <li className="mb-4 flex justify-between items-center text-xs md:text-sm">
                <Link
                  href={contactData.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 underline"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  {contactData.address}
                </Link>
              </li>
              <li className="mb-4 flex justify-between items-center text-xs md:text-sm">
                <Link
                  href={contactData.phone_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 underline"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  {contactData.phone}
                </Link>
              </li>
              <li className="mb-4 flex justify-between items-center text-xs md:text-sm">
                <Link
                  href={contactData.email_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 underline"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  {contactData.email}
                </Link>
              </li>
            </ul>

            {/* <div className="mt-6">
              <p className="mb-6 font-bold md:text-lg text-green-800">
                Gift Card
              </p>
              <a
                href="/gift-card"
                className="rounded-md mt-4 border bg-white px-3.5 py-2.5 text-sm font-semibol hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Purchase Here
              </a>
            </div> */}
          </div>

          <div className="flex flex-col mb-4 sm:mb-0 items-center md:items-start justify-center md:justify-start col-span-2 md:col-span-1">
            <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className="text-center md:text-left mb-3 sm:mb-6 -mt-4 md:mt-0 font-bold md:text-xl text-white">
              Subscribe to Receive Promotion Offers
            </p>
            <div className="md:items-start flex-col items-center justify-center lg:justify-start md:flex max-w-md gap-x-4 mb-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="focus:outline-0 focus:border-none w-[160px] sm:w-[200px] lg:w-[230px] mr-2 md:mr-0 text-xs sm:text-sm text-white font-normal min-w-0 flex-auto border-gray-200 rounded-md border bg-white px-3.5 py-2 !focus:outline-none focus:ring-2 focus:ring-green-800 sm:text-sm/6"
              />
              <button
                type="submit"
                className="shadow-md border-0 text-white bg-[#66785F] text-xs sm:text-sm font-normal rounded-md w-[100px] mt-4 border px-3 py-2 text-sm font-semibol hover:bg-[#B2C9AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-0 bg-[#4B5945] px-4 py-2.5 -mt-6 sm:-mt-4 flex items-center justify-between" >
          <span className="text-sm text-gray-500 font-normal text-center text-white">
            © 2024 by Ojas
          </span>
          <Link
            className="text-sm text-gray-500 font-normal hover:text-gray-200 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="/legal/privacy"
          >
            Privacy & Terms
          </Link>
          <div className="flex items-center justify-center space-x-5 rtl:space-x-reverse">
            {/* Facebook */}
            <Link href="#" className="text-white hover:text-gray-200 ">
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </Link>
            {/* Instagram */}
            <Link href="#" className="text-white hover:text-gray-200 ">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
