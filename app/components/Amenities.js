"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Amenities = () => {
  return (
    <div className="main bg-gray-50 ">
      <div className="first grid grid cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 px-4 py-8 items-center mr-8">
        <div className="flex justify-center">
          <Image
            className="w-full md:w-450"
            src="/image9.jpg"
            width={450}
            height={1200}
          ></Image>
        </div>
        <motion.div
          className="space-y-6 "
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <hr className="border-t-1 border-orange" />
          <h2 className="text-center md:text-xl lg:text-2xl text-gray-600 tracking-wider">
            Unforgettable Amenities For A Great Stay
          </h2>
        </motion.div>
      </div>
      <div
        className="second grid text:sm md:text-base text-gray-500 grid-cols-2
      md:grid-cols-3 pt-24 pb-12 px-12 md:px-24 gap-4 md:gap-8 "
      >
        <div className="md:flex items-center flex-1 md:text-sm space-x-4 lg:space-x-10 ">
          <Image
            className="bg-white"
            src="/wifi.webp"
            width={100}
            height={100}
          ></Image>
          <p>High Speed Wifi</p>
        </div>
        <div className="md:flex items-center flex-1 md:text-sm space-x-4 lg:space-x-10 ">
          <Image
            className="bg-white"
            src="/wifi.webp"
            width={100}
            height={100}
          ></Image>
          <p>Scenic Suits</p>
        </div>
        <div className="md:flex items-center flex-1 md:text-sm space-x-4 lg:space-x-10 ">
          <Image
            className="bg-white"
            src="/pool.png"
            width={100}
            height={100}
          ></Image>
          <p>Swimming Pool</p>
        </div>
        <div className="md:flex items-center flex-1 md:text-sm space-x-4 lg:space-x-10 ">
          <Image
            className="bg-white"
            src="/cafe.png"
            width={100}
            height={100}
          ></Image>
          <p>Cafe & Restaurant</p>
        </div>
        <div className="md:flex items-center flex-1 md:text-sm space-x-4 lg:space-x-10 ">
          <Image
            className="bg-white"
            src="/wifi.webp"
            width={100}
            height={100}
          ></Image>
          <p>
            Convenient Living Near Amenities
            <span className="text-[10px]">
              300m away from world-class shopping and restaurant facilities
            </span>{" "}
          </p>
        </div>
        <div className="md:flex items-center flex-1 md:text-sm space-x-4 lg:space-x-10">
          <Image
            className="bg-white"
            src="/clock.png"
            width={100}
            height={100}
          ></Image>
          <p>Round The Clock Security</p>
        </div>
      </div>
      <div className="third">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Amenities;
