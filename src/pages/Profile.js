import React from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

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
        <div className="items-center justify-center">
          <ReactLoading
            type="spinningBubbles"
            color="#FDD017"
            height={200}
            width={200}
          />
        </div>
      ) : (
        <div>
          {profile.map((pro, index) => (
            <div key={index}>
              {pro.name}
              {pro.email}
              {/* {pro.location.data.map((loc, index) => (
                <div key={index}>
                  {loc.id}
                  {loc.name}
                </div>
              ))} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
