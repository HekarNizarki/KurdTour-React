import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export default function ViewCityPlasess() {
  const [dlocation, Setdlocation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // const locationCollection = collection(db, "Location");
    // const getAllLocations = async () => {
    //   const data = await getDocs(locationCollection);
    //   Setlocation(data.docs.map((doc) => ({ ...doc.data(), id: doc.lid })));
    // };
    onSnapshot(
      query(collection(db, "Location"), where("locationname", "==", id)),
      (snapshot) => {
        Setdlocation(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
        );
      }
    );

    // getAllLocations();
  });

  return (
    <div className="bg-teal-100">
      <div className="absolute ml-2 pt-2 text-2xl md:ml-24 md:pt-16 md:text-4xl">
        <Link to={`/`}>
          {" "}
          <BsFillArrowLeftSquareFill />{" "}
        </Link>
      </div>

      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 md:text-3xl ">
          Best locations that interest you in {id}
        </h2>
        <h2 className="text-xl tracking-tight text-gray-500  mt-4">
          Collections of our best Locations in cities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {dlocation.map((location, index) => (
            <div
              key={index}
              className="group relative bg-cyan-200 rounded-md border border-gray-400 shadow-md"
            >
              <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={location.image}
                  alt={location.image}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-2 flex justify-between p-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <Link to={`/locations/${location.title}`}>
                      {" "}
                      <span aria-hidden="true" className="absolute inset-0" />
                    </Link>
                    {location.title}
                  </h3>
                </div>
                <p className="text-sm font-medium mt-1 text-gray-900">
                  City: {location.locationname}
                </p>
              </div>
              <div className="mt-2 flex justify-between px-3 pb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
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
                <p className="text-xs font-medium mt-1 text-gray-900 sm:text-sm md:text-sm">
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
