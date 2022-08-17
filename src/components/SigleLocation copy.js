import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


export default function SingleLocation() {
  const [dlocation, Setdlocation] = useState([]);
  const { locationtitle } = useParams();

  console.log("idddd", locationtitle);

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
     <div className="absolute ml-2 pt-2 text-2xl md:ml-24 md:pt-16 md:text-4xl">
        <Link to={`/`}>
          {" "}
          <BsFillArrowLeftSquareFill />{" "}
        </Link>
      </div>

      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 ">
          All Information on ({locationtitle})
        </h2>

        <div className="mt-6 ">
          {dlocation.map((location, index) => (
            <div key={index}>
              <img src={location.image} alt={location.image} />
              {location.title}
              City: {location.locationname}
              Opening hours: {location.openhourse}
              {location.description}
              {location.email}
              {location.phone}
              {location.website}
              <div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
