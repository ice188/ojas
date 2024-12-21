import { contactData } from "@/data/contact-data";
import { linkData } from "@/data/link-data";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-[#4B5945]" >
      <div className="relative flex items-center justify-end px-6 py-2.5 border-b border-gray-200">
        <div className="flex space-x-8 text-xs sm:text-sm font-normal text-white">
          <Link
            href={linkData.booking_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Book an appointment
          </Link>
          <Link
            href={contactData.phone_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Call us
          </Link>
          <Link
            href={contactData.map_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Location
          </Link>
        </div>
      </div>
    </div>
  );
}
