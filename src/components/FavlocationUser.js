import React from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function FavlocationUser(props) {
  const [profile, SetProfile] = useState();

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "Location"),
        where("FavLocationEmail", "array-contains", props.Email)
      ),
      (snapshot) => {
        SetProfile(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
        );
      }
    );
  }, [props.Email]);

  return (
    <div>
      {!profile ? (
        <div className="flex flex-col items-center justify-center pt-24">
          <ReactLoading
            type="spinningBubbles"
            color="#FDD017"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <div className="bg-teal-50">
            <div className="max-w-2xl mx-auto py-3 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-yellow-600 ">
                Favorite locations that interest you
              </h2>
              <h2 className="text-xl tracking-tight text-gray-500  mt-4">
                Collections of Favorite Locations
              </h2>
              {/* <Link to={`/location/${"Duhok Mall"}`}> */}
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
                {profile.map((location, index) => (
                  <div
                    key={index}
                    className="group relative bg-cyan-800 rounded-md border border-gray-400 shadow-md"
                  >
                    <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={location.image}
                        alt={location.image}
                        className="w-full h-full object-center rounded-t-md object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-2 flex justify-between p-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 ">
                          <Link to={`/locations/${location.title}`}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
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
        </div>
      )}
    </div>
  );
}
