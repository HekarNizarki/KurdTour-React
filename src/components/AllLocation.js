import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Example() {
  const [location, Setlocation] = useState([]);

 

  useEffect(() => {
    const locationCollection = collection(db, "Location");
    const getLocations = async () => {
      const data = await getDocs(locationCollection);
      Setlocation(data.docs.map((doc) => ({ ...doc.data(), id: doc.lid })));
    };

    getLocations();
  }, []);

  console.log(location);

  return (
    <div className="bg-teal-100">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 ">
          Find locations that interest you
        </h2>
        <h2 className="text-xl tracking-tight text-gray-500  mt-4">
          Collections of Locations in cities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {location.map((location) => (
            <div key={location.lid} className="group relative">
              <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={location.image}
                  alt={location.image}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <a href={location.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {location.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium mt-1 text-gray-900">
                  City: {location.locationname}
                </p>
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <a href={location.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {location.rating}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium mt-1 text-gray-900">
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
