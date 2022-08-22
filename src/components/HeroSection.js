import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 p-2 pb-14">
      <div className=" flex flex-col  justify-center mb-3 ml-1">
        {""}
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block text-yellow-600 font-extrabold md:text-6xl">
            Kurd Tour
          </span>
          Explore the unexplored
        </h2>
        <p className="text-2xl text-gray-500 mt-3">
          This website is specialized with viewing the most pupilar tourist
          location in Kurdistan.{" "}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to="/locations"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
            >
              View locations
            </Link>
          </div>
          <div className="mt-3  sm:mt-0 sm:ml-3 ">
            <Link
              to="/locations"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-5 ">
        <img
          className="h-full w-auto object-cover"
          src="https://www.rudaw.net/ContentFilesArchive/622613Image1.jpg?version=4427631"
          alt=""
        />
      </div>
    </div>
  );
}
