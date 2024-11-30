import { contactData } from "@/data/contact-data";
import { linkData } from "@/data/link-data";

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white">
      <div className="relative flex items-center justify-end px-6 py-2.5 border-b">
        <div className="flex space-x-8 text-gray-500 text-sm font-normal ">
          <a
            href={linkData.booking_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            Book an appointment
          </a>
          <a
            href={contactData.phone_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            Call us
          </a>
          <a
            href={contactData.map_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            Location
          </a>
        </div>
      </div>
    </div>
  );
}
