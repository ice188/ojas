"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { linkData } from "@/data/link-data";
import { serviceData } from "@/data/service-data";
import { promotionData } from "@/data/promotion-data";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rootPath = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-white z-50 mt-[41px]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl border-b border-gray-200 items-center justify-between p-2 px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="font-bold text-xl -m-1.5 p-3 text-[#4B5945]"
          >
            Ojas
          </Link>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-8" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="mt-[98px] fixed inset-y-0 right-0 z-10 w-1/2 sm:w-1/3 overflow-y-auto bg-white px-6 py-6 ring-1 ring-gray-900/10">
          <div className="flex items-center justify-between ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root text-center">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 bg-white">
                  <DisclosureButton className="pl-4 group flex w-full items-center justify-center rounded-lg p-3 font-semibold text-lg text-[#66785F] hover:bg-[#B2C9AD]">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-2 size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {Object.keys(serviceData).map((categoryUrl) => (
                      <DisclosureButton
                        key={categoryUrl}
                        as="a"
                        href={
                          categoryUrl
                            ? `${rootPath}/service/${categoryUrl}`
                            : "#"
                        }
                        className="block rounded-lg text-gray-500 font-normal py-2 pl-6 pr-3 hover:bg-gray-50"
                      >
                        {
                          serviceData[categoryUrl as keyof typeof serviceData]
                            .name
                        }
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href={linkData.booking_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66785F] -mx-3 block rounded-lg px-3 py-4 font-semibold text-lg text-[#66785F] hover:bg-[#B2C9AD]"
                >
                  Booking Appointment
                </Link>

                <Link
                  href={"/about-us"}
                  className="text-[#66785F] -mx-3 block rounded-lg px-3 py-4 font-semibold text-lg text-[#66785F] hover:bg-[#B2C9AD]"
                >
                  About Us
                </Link>

                <Link
                  href={linkData.gift_card_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66785F] -mx-3 block rounded-lg px-3 py-4 font-semibold text-lg text-[#66785F] hover:bg-[#B2C9AD]"
                >
                  Purchase Gift Card
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="pl-4 group flex w-full items-center justify-center rounded-lg p-3 font-semibold text-lg text-[#66785F] hover:bg-[#B2C9AD]">
                    Promotion
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-2 size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {Object.keys(promotionData).map((promotionType) => (
                      <DisclosureButton
                        key={promotionType}
                        as="a"
                        href={
                          promotionType
                            ? `${rootPath}/promotion/${promotionType}`
                            : "#"
                        }
                        className="block rounded-lg text-gray-500 font-normal py-2 pl-6 pr-3 hover:bg-gray-50"
                      >
                        {
                          promotionData[
                            promotionType as keyof typeof promotionData
                          ].name
                        }
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href={"/"}
                  className="text-[#66785F] -mx-3 block rounded-lg px-3 py-4 font-semibold text-lg text-[#66785F] hover:bg-[#B2C9AD]"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
