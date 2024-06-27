"use client";

import clsx from "clsx";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import CompanyLogo from "./CompanyLogo";

const navLinks = [
  { href: "/about", linkName: "About" },
  { href: "/sip", linkName: "SIP" },
  { href: "/studio", linkName: "Studio" },
  { href: "/seeq", linkName: "SEEQ" },
  { href: "/platform", linkName: "Platform" },
  { href: "/initiative", linkName: "Initiatives" },
  { href: "/more", linkName: "More" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [clickState, setClickState] = useState(false);

  return (
    <nav className=" sticky top-0 z-10 w-full flex items-center justify-center bg-[#F9F9F9]">
      <div className=" w-full h-auto lg:max-w-[90dvw] flex justify-between items-center md:px-10 px-5 lg:pt-5 bg:pb-4 py-4 bg-[#F9F9F9] lg:gap-6  ">
        <Link className=" relative z-30 " href={"/home"}>
          <CompanyLogo />
        </Link>
        <div className=" flex gap-5 lg:gap-10 lg:w-full justify-between ">
          <div className=" hidden lg:flex gap-4 items-center ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  role="button"
                  className={clsx(
                    "hover:text-[#20888F] lg:text-[18px] font-[500] ",
                    pathname === link.href &&
                      "pb-3 border-b-main-color border-b-2 border-solid "
                  )}
                  href={link.href}
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
          </div>

          {/* mobile navigation menu bar */}
          {clickState && (
            <div className="absolute z-20 right-0 top-0 bg-primary-bg bg-opacity-10 w-[100dvw] backdrop-blur-[100px] flex ">
              <div className=" right-0 flex flex-col h-[100dvh] gap-4 bg-primary-bg lg:hidden w-full pt-32 px-7 ">
                <X
                  onClick={() => {
                    setClickState(false);
                  }}
                  className=" absolute top-7 text-main-color right-7 "
                  size={32}
                />
                {navLinks.map((link, index) => (
                  <li key={index} className=" w-full flex items-center h-14 ">
                    <Link
                      onClick={() => {
                        setClickState(false);
                      }}
                      role="button"
                      className={clsx(
                        "hover:text-main-color w-full items-start text-left ",
                        pathname === link.href &&
                          "p-5 h-14 flex flex-auto items-center text-main-color bg-white w-full bg-opacity-10 "
                      )}
                      href={link.href}
                    >
                      {link.linkName}
                    </Link>
                  </li>
                ))}
                <div className=" flex flex-wrap gap-3 w-full justify-center ">
                  <button className=" w-full max-w-[190px] h-12 px-[30px] font-medium border-[#212121] border border-solid text-[#212121] items-center justify-center rounded-[24px]  ">
                    SINC With Us
                  </button>
                  <button className=" max-w-[190px] w-full h-12 px-[30px] font-medium bg-[#303030] text-white items-center justify-center rounded-[24px]  ">
                    Apply to SIP 1.0
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className=" flex gap-3 ">
            <button className=" hidden lg:flex h-12 lg:w-[183px] w-full px-[30px] font-medium bg-[#20888F] items-center justify-center rounded-[24px] ">
              SINC With Us
            </button>
            <button className=" hidden lg:flex h-12 lg:w-[183px] w-full px-[30px] font-medium bg-[#303030] text-white items-center justify-center rounded-[24px] ">
              Apply to SIP 1.0
            </button>
          </div>
          <MenuIcon
            role="button"
            className=" lg:hidden text-white flex self-center hover:text-main-color  "
            onClick={() => {
              setClickState(true);
            }}
            size={28}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
