import React from "react";
import MenuItem from "../components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";
import DarkLightSwitch from "./DarkLightSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome}></MenuItem>
        <MenuItem
          title="ABOUT"
          address="/about"
          Icon={AiFillInfoCircle}
        ></MenuItem>
      </div>
      <div className="flex items-center space-x-5">
        <DarkLightSwitch></DarkLightSwitch>
        <Link href="/" className="text-2xl">
          <h2>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMBD
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
