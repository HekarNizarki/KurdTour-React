import Select from "react-select";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const options = [
  { value: "Duhok Mall", label: "Duhok Mall" },
  { value: "Lalish Temple", label: "Lalish Temple" },
  { value: "Halamata Cave", label: "Halamata Cave" },
  { value: "Pira Delal", label: "Pira Delal" },
  { value: "Erbil Citadel", label: "Erbil Citadel" },
  { value: "Bekhal Waterfall", label: "Bekhal Waterfall" },
  { value: "Sami-Abdulrahman", label: "Sami-Abdulrahman" },
  { value: "Ahmad Awa", label: "Ahmad Awa" },
];

export default function BestLocation() {
  const [location, Setlocation] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (!selectedOption) {
    } else {
      onSnapshot(
        query(
          collection(db, "Location"),
          where("title", "==", selectedOption.value)
        ),
        (snapshot) => {
          Setlocation(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
          );
        }
      );
    }
  }, [selectedOption]);

  return (
    <div className="bg-teal-100">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-yellow-600 ">
          Search for locations that interest you
        </h2>
        <h2 className="text-xl tracking-tight text-gray-500  mt-4">
          Collections of our best Locations
        </h2>

        <Select
          defaultValue={selectedOption.value}
          onChange={setSelectedOption}
          options={options}
        />
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {location.map((location, index) => (
            <div
              key={index}
              className="group relative bg-cyan-800 rounded-md border border-gray-400 shadow-md"
            >
              <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={location.image}
                  alt={location.image}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-2 flex justify-between p-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 ">
                    <Link to={`/locations/${location.title}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                    </Link>
                    {location.title}
                  </h3>
                </div>
                <p className="text-sm font-medium mt-1 text-gray-200">
                  City: {location.locationname}
                </p>
              </div>
              <div className="mt-2 flex justify-between px-3 pb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    <ReactStars
                      count={location.rating}
                      size={24}
                      edit={false}
                      value={location.rating}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </h3>
                </div>
                <p className="text-xs font-medium mt-1 text-gray-200 sm:text-sm md:text-sm">
                  Opening hours: {location.openhourse}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
