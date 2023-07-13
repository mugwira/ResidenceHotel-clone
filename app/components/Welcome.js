"use client";
import React from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";


const Welcome = () => {
  return (
    <div>
      <div className="main mt-40 md:mt-60 lg:mt-80 mb-32 ">
        <div className="inner md:flex md:gap-8 p-8 bg-gray-50">
          <div className="left flex-1 space-y-6 ">
            <ScrollAnimation>
            <div className="flex justify-center md:-mt-48">
              <Image className="w-full md:w-[500px]" src="/image5.jpg" width={500} height={500}></Image>
            </div>
            </ScrollAnimation>
            <div className="flex justify-center md:mt-8">
              <Image className="w-full md:w-[500px]" src="/image8.jpg" width={500} height={500}></Image>
            </div>
          </div>
          <div className="right flex-1  ">
            <div className="flex justify-center mt-8 md:-mt-24">
              <Image className="w-full md:w-[500px]"
                src="/image7.jpg"
                alt="picture"
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="lg:px-8">
              <h2 className="text-lg text-center lg:text-left lg:text-2xl mt-5 mb-1">
                Welcome To
              </h2>
              <h1 className="mb-6 text-lg text-center lg:text-left lg:text-4xl text-yellow-400">
                The Residence Hotel
              </h1>
              <ScrollAnimation>
                <p className="text-[12px] md:mx-0 lg:text-sm text-gray-400 md:leading-relaxed">
                  Located in the peaceful neighborhood of Borrowdale, just a
                  stone’s throw away from Sam Levy’s village, The Residence Hotel
                  offers comfortable suites for both short and long term stays.
                  With numerous amenities available, our hotel is designed to make
                  you feel as comfortable as you would be at home during your
                  stay.
                </p>
              </ScrollAnimation>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
