"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer transition-opacity ease-in-out duration-250 text-foreground hover:opacity-60 align-middle"
      >
        <Bars3Icon className="size-7" />
      </button>
      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-15">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 backdrop-blur-xs transition-opacity duration-250 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-64 transform transition duration-250 ease-in-out data-closed:translate-x-full sm:duration-350"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-background shadow-xl">
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex items-start justify-between p-4 border-b border-foreground/10">
                      <DialogTitle className="text-lg font-semibold text-rose-400">
                        Navigation
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="cursor-pointer relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <nav className="font-semibold p-4 border-b border-foreground/10">
                      <ul className="flex flex-col gap-4">
                        {links.map((i) => (
                          <Link key={i.title} href={i.href}>
                            <li
                              onClick={() => setIsOpen(false)}
                              className="p-2 rounded transition-colors hover:bg-foreground/10 duration-250"
                            >
                              {i.title}
                            </li>
                          </Link>
                        ))}
                        <a
                          href="resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded transition-colors hover:bg-foreground/10 duration-250"
                          >
                            Resume
                          </li>
                        </a>
                      </ul>
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
