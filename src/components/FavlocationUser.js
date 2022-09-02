import React from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

export default function FavlocationUser(props) {
  const [profile, SetProfile] = useState();

  useEffect(() => {
    onSnapshot(
      query(collection(db, "users"), where("email", "==", props.Email)),
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
          <div className="justify-center items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-yellow-600 mt-9">
              Favorite location of User
            </h2>

            {/* {JSON.stringify(profile[0].lname[0])} */}
            <ul>
              {profile.map((loc, index) => (
                <Link to={`/locations/${loc.lname[index + 1]}`}>
                  <li key={index} className="text-xl text-gray-500  mt-4">
                    {loc.lname + ""}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
