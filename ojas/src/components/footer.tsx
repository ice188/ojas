import { contactData } from "@/data/contact-data";
import { openingTimeData } from "@/data/opening-time-data";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="w-full max-w-7xl mx-auto w-full border-t">
        <div className="grid grid-cols-2 gap-y-8 md:gap-y-16 gap-16 px-8 md:px-16 py-8 md:py-16 md:grid-cols-3">
          {/* Hours of Service */}
          <div>
            <p className="mb-6 font-bold md:text-lg text-gray-900">
              Opening Hours
            </p>
            <ul className="grid text-gray-500 w-[140px] md:w-[180px] font-medium">
              {openingTimeData.map(({ day_of_week, hours }) => (
                <li
                  className="mb-4 flex justify-between items-center"
                  key={day_of_week}
                >
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    {day_of_week}
                  </span>
                  <span className="text-xs md:text-sm">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-center items-center">
            <p className="mb-6 font-bold md:text-lg text-gray-900">
              Contact Us
            </p>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 flex justify-between items-center text-xs md:text-sm">
                <a
                  href={contactData.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  {contactData.address}
                </a>
              </li>
              <li className="mb-4 flex justify-between items-center text-xs md:text-sm">
                <a
                  href={contactData.phone_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  {contactData.phone}
                </a>
              </li>
              <li className="mb-4 flex justify-between items-center text-xs md:text-sm">
                <a
                  href={contactData.email_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  {contactData.email}
                </a>
              </li>
            </ul>

            {/* <div className="mt-6">
              <p className="mb-6 font-bold md:text-lg text-gray-900">
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

          <div className="flex flex-col items-center md:items-start justify-center md:justify-start col-span-2 md:col-span-1">
            <p className="text-center mb-3 sm:mb-6 -mt-4 md:mt-0 font-bold md:text-lg text-gray-900">
              Subscribe to Receive Promotion Offers
            </p>
            <div className="flex-col items-center justify-center md:flex max-w-md gap-x-4 mx-auto mb-4">
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
                className="w-[160px] sm:w-[200px] mr-2 md:mr-0 text-xs sm:text-sm text-gray-500 font-normal min-w-0 flex-auto border-gray-200 rounded-md border bg-white/5 px-3.5 py-2 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="text-xs sm:text-sm text-gray-500 font-normal rounded-md w-[100px] mt-4 border bg-white px-3 py-2 text-sm font-semibol hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-2.5 -mt-6 sm:-mt-4 bg-white border-t flex items-center justify-between">
          <span className="text-sm text-gray-500 font-normal text-center">
            © 2024 by Ojas
          </span>
          <a
            className="text-sm text-gray-500 font-normal"
            target="_blank"
            rel="noopener noreferrer"
            href="/legal/privacy"
          >
            Privacy & Terms
          </a>
          <div className="flex items-center justify-center space-x-5 rtl:space-x-reverse">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
