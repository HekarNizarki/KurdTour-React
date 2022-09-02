import React from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import FavlocationUser from "../components/FavlocationUser";

export default function Profile() {
  const { idProfile } = useParams();

  const [profile, SetProfile] = useState();

  useEffect(() => {
    onSnapshot(
      query(collection(db, "users"), where("email", "==", idProfile)),
      (snapshot) => {
        SetProfile(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
        );
      }
    );
  }, [idProfile]);

  return (
    <div>
      {!profile ? (
        <div className="flex items-center justify-center pt-24">
          <ReactLoading
            type="spinningBubbles"
            color="#FDD017"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center text-center container">
            {profile.map((pro, index) => (
              <div key={index}>
                <div className="">
                  <img
                    className="rounded-full w-auto h-60 mt-9 mb-4 container"
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt=""
                  />
                  <h2 className="text-3xl font-bold tracking-tight text-yellow-600 ">
                    {pro.name}
                  </h2>
                  <h2 className="text-xl tracking-tight text-gray-500  mt-4">
                    {pro.email}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <FavlocationUser Email={idProfile} />
        </div>
      )}
    </div>
  );
}
