import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";

export default function Example() {
  const [dlocation, Setdlocation] = useState([]);
  const { locationtitle } = useParams();

  // console.log("idddd", locationtitle);

  useEffect(() => {
    // const locationCollection = collection(db, "Location");
    // const getAllLocations = async () => {
    //   const data = await getDocs(locationCollection);
    //   Setlocation(data.docs.map((doc) => ({ ...doc.data(), id: doc.lid })));
    // };
    onSnapshot(
      query(collection(db, "Location"), where("title", "==", locationtitle)),
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
      <div className="absolute ml-6 pt-6 text-2xl md:ml-8 md:pt-4 sm:pt-6 md:text-4xl">
        <Link to={`/locations`}>
          {" "}
          <BsFillArrowLeftSquareFill />{" "}
        </Link>
      </div>
      {dlocation.map((location, index) => (
        <div key={index}>
          <div className="pt-6">
            {/* Product info */}
            <div className="max-w-5xl mx-auto pt-10 pb-9 px-3 sm:px-6 ">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-3xl">
                {location.title}
              </h1>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div>
                      <ReactStars
                        count={location.rating}
                        size={30}
                        edit={false}
                        value={location.rating}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="mt-1">
                {/* Image gallery */}
                <div className="mt-4 max-w-4xl sm:px-6 ">
                  <div className="aspect-w-3 aspect-h-1 object-left pl-0 ml-0 rounded-md overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.image}
                      className="w-full h-full object-left object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1  lg:border-gray-200 lg:pr-8">
                {/* Description and details */}
                <div>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {location.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-xl font-bold text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm font-medium text-gray-900">
                      {" "}
                      City: {location.locationname}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {" "}
                      Opening hours: {location.openhourse}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {" "}
                      E-mail:
                      <a href={`mailto:${location.email}`}>{location.email}</a>
                    </p>

                    <p className="text-sm font-medium text-gray-900">
                      {" "}
                      Website:{" "}
                      <a
                        href={location.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {location.website}
                      </a>
                    </p>

                    <p className="text-sm font-medium text-gray-900">
                      {" "}
                      Phone: {location.phone}
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-gray-900 pb-3">Map</h2>
                  <div className="container w-full h-96 object-left object-cover">
                    <MapContainer
                      center={[location.loca, location.locl]}
                      zoom={32}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[location.loca, location.locl]}>
                        <Popup>{location.title}</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
