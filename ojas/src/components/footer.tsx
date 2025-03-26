import { contactData } from "@/data/contact-data";
import { openingTimeData } from "@/data/opening-time-data";
import { socialData } from "@/data/social-data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-100 text-[#2a5136]">
      <div className="w-full mx-auto border-0">
        <div className=" max-w-7xl grid grid-cols-2 gap-y-8 md:gap-y-16 gap-16 px-8 md:px-16 py-8 ">
          {/* Hours of Service */}
          <div>
            <p className="whitespace-nowrap flex items-center font-salsa mb-8 font-bold md:text-2xl">
              Opening Hours
            </p>
            <ul className="font-light font-noto grid w-[140px] md:w-[180px]">
              {openingTimeData.map(({ day_of_week, hours }) => (
                <li
                  className="mb-4 flex justify-between items-center whitespace-nowrap"
                  key={day_of_week}
                >
                  <span className="font-semibold text-xs md:text-sm uppercase">
                    {day_of_week}
                  </span>
                  <span className="text-xs md:text-sm">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-center items-center">
            <p className="mb-8 font-bold md:text-2xl font-salsa">Contact Us</p>
            <ul className="font-medium">
              <li className="font-light font-noto mb-4 flex justify-between items-center text-xs md:text-sm">
                <Link
                  href={contactData.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex hover:text-gray-200 underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {contactData.address}
                </Link>
              </li>
              <li className="font-light font-noto mb-4 flex justify-between items-center text-xs md:text-sm">
                <Link
                  href={contactData.phone_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-200 underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  {contactData.phone}
                </Link>
              </li>
              <li className="font-light font-noto mb-4 flex justify-between items-center text-xs md:text-sm">
                <Link
                  href={contactData.email_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-200 underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

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
        </div>

        <div className="font-salsa border-0 bg-[#2a5136] px-4 py-2.5 -mt-6 sm:-mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500 font-normal text-center text-white">
            © 2025 by SPA OJAS
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
            <Link
              href={socialData.facebook}
              className="text-white hover:text-gray-200 "
            >
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
            <Link
              href={socialData.instagram}
              className="text-white hover:text-gray-200 "
            >
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
