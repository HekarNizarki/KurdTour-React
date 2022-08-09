import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="justify-center bg-teal-50 lg:pb-32 ">
      <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Kurd Tour</span>{" "}
            <span className="block text-yellow-600 xl:inline text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl">
              Explore then an explored
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            This website is specialized with viewing the most pupilar tourist
            location in Kurdistan.
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
        <div className="lg:absolute lg:right-5 lg:top-28 lg:w-1/2 lg:h-auto mt-4 pb-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://www.rudaw.net/ContentFilesArchive/622613Image1.jpg?version=4427631"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
