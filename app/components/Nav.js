import Link from "next/link";
import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 py-10 px-56 ">
      <div className="logo text-yellow-500">
        <Link href="/">
          <Image
            src="/res-logo.jpg"
            alt="Logo"
            width={100}
            height={100}
          ></Image>
        </Link>
      </div>
      <div className="text-gray-400 space-x-10 text-sm">
        <Link className="hover:text-gray-200" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-200" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-200" href="/reservations">
          Reservations
        </Link>
        <Link className="hover:text-gray-200" href="/get-in-touch">
          Get In Touch
        </Link>
        <Link
          className="text-[10px] font-semibold text-gray-900 bg-white hover:bg-yellow-400 hover:text-white px-2.5 py-1"
          href="/"
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
};

export default Nav;
