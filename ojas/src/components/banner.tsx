import { contactData } from "@/data/contact-data";
import { linkData } from "@/data/link-data";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white">
      <div className="relative flex items-center justify-end px-6 py-2.5 border-b border-gray-200">
        <div className="flex space-x-8 text-gray-500 text-sm font-normal ">
          <Link
            href={linkData.booking_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            Book an appointment
          </Link>
          <Link
            href={contactData.phone_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            Call us
          </Link>
          <Link
            href={contactData.map_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            Location
          </Link>
        </div>
      </div>
    </div>
  );
}
