import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Example() {
  const [dlocation, Setdlocation] = useState([]);
  const [elocation, Setelocation] = useState([]);
  const [slocation, Setslocation] = useState([]);

  useEffect(() => {
    // const locationCollection = collection(db, "Location");
    // const getAllLocations = async () => {
    //   const data = await getDocs(locationCollection);
    //   Setlocation(data.docs.map((doc) => ({ ...doc.data(), id: doc.lid })));
    // };
    onSnapshot(
      query(collection(db, "Location"), where("locationname", "==", "Duhok")),
      (snapshot) => {
        Setdlocation(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
        );
      }
    );

    onSnapshot(
      query(collection(db, "Location"), where("locationname", "==", "Erbil")),
      (snapshot) => {
        Setelocation(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
        );
      }
    );

    onSnapshot(
      query(
        collection(db, "Location"),
        where("locationname", "==", "Sulaimaniya")
      ),
      (snapshot) => {
        Setslocation(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.lid }))
        );
      }
    );

    // getAllLocations();
  }, []);

  console.log(dlocation);
  const dlingth = Object.keys(dlocation).length;
  const elingth = Object.keys(elocation).length;
  const slingth = Object.keys(slocation).length;

  // console.log(dlingth);
  const Duhok = "Duhok";
  const Erbil = "Erbil";
  const Sulaimany = "Sulaimaniya";

  return (
    <div className="bg-teal-100">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-yellow-600 ">
          Find All Locations that interest you
          {dlocation.title}
        </h2>
        <h2 className="text-xl tracking-tight text-gray-500  mt-4">
          Collections of All Locations in cities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {/* Duhok location */}
          <div
            key={1000}
            className="group relative bg-cyan-800 rounded-md border border-gray-400 shadow-md"
          >
            <div className="w-full  min-h-8 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/26/City_of_Duhok.jpg"
                alt="Duhok"
                className="w-full h-full object-center rounded-t-md object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-2 flex justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 ">
                  <Link to={`/${Duhok}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Duhok
                  </Link>
                </h3>
              </div>
              <p className="text-sm font-medium mt-1 text-gray-200">
                {dlingth} Locations
              </p>
            </div>
          </div>
          {/* location */}

          {/* Hawler location */}
          <div
            key={2000}
            className="group relative bg-cyan-800 rounded-md border border-gray-400 shadow-md"
          >
            <div className="w-full  min-h-8 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fb/e3/3a/photo1jpg.jpg?w=1200&h=-1&s=1"
                alt="Hawler"
                className="w-full h-full object-center object-cover rounded-t-md lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-2 flex justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 ">
                  <Link to={`/${Erbil}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Erbil
                  </Link>
                </h3>
              </div>
              <p className="text-sm font-medium mt-1 text-gray-200">
                {elingth} Locations
              </p>
            </div>
          </div>
          {/* Hawler location */}

          {/* Sulaimany location */}
          <div
            key={3000}
            className="group relative bg-cyan-800 rounded-md border border-gray-400 shadow-md"
          >
            <div className="w-full  min-h-8 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/44/18/c1/this-beautiful-resort.jpg?w=1200&h=-1&s=1"
                alt="Duhok"
                className="w-full h-full object-center object-cover rounded-t-md lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-2 flex justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 ">
                  <Link to={`/${Sulaimany}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Sulaimaniya
                  </Link>
                </h3>
              </div>
              <p className="text-sm font-medium mt-1 text-gray-200">
                {slingth} Locations
              </p>
            </div>
          </div>
          {/* location */}
        </div>
      </div>
    </div>
  );
}
