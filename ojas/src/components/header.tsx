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
import { Salsa } from "next/font/google";

const salsa = Salsa({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rootPath = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-white z-50 mt-[37px]">
      <nav
        aria-label="Global"
        className="w-full mx-auto flex max-w-7xl border-b border-gray-200 items-center justify-between p-2 px-8"
      >
        <div className="flex items-center lg:flex-1">
          <Link
            href="/"
            className="flex items-center font-bold text-xl -m-1.5 p-1 text-[#2a5136]"
          >
            <img src="/logo.png" className="w-12 h-auto mr-4" />
            <div className={`${salsa.className}`}>SPA OJAS</div>
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
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="text-[#2a5136] bg-white mt-[98px] fixed inset-y-0 right-0 z-10 w-1/2 sm:w-1/3 overflow-y-auto bg-white px-6 py-6 ring-1 ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6 " />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 font-salsa  text-md">
                <Disclosure as="div" className="-mx-3 bg-gray">
                  <DisclosureButton className="pl-4 group flex w-full items-center justify-center rounded-lg p-3 ">
                    SERVICES
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
                        className="block  text-gray-500 py-2 pl-6 pr-3 "
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
                  href={"/about-us"}
                  className="text-center -mx-3 block rounded-lg px-3 py-4"
                >
                  ABOUT US
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="pl-4 group flex w-full items-center justify-center rounded-lg p-3 ">
                    PROMOTIONS
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
                        className="block  text-gray-500 py-2 pl-6 pr-3 "
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
                  href={linkData.gift_card_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center -mx-3 block rounded-lg px-3 py-4 "
                >
                  GIFT CARD
                </Link>
                <Link
                  href={linkData.booking_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center -mx-3 block rounded-lg px-3 py-4 "
                >
                  BOOKING
                </Link>

                <Link
                  href={"/"}
                  className="text-center -mx-3 block rounded-lg px-3 py-4 "
                >
                  HOME
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
