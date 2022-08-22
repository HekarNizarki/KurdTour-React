import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ReactStars from "react-rating-stars-component";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Example() {
  const [location, Setlocation] = useState([]);

  //pagination
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const nextButton = (
    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
  const prevButton = (
    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
  useEffect(() => {
    const locationCollection = collection(db, "Location");
    const getLocations = async () => {
      const data = await getDocs(locationCollection);
      Setlocation(data.docs.map((doc) => ({ ...doc.data(), id: doc.lid })));
    };

    getLocations();
  }, []);

  useEffect(() => {
    /* calculations for the react paginate */

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(location.slice(itemOffset, endOffset));

    console.log("current items:", currentItems);
    setPageCount(Math.ceil(location.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, location]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % location.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (!location) {
    return (
      <div className="flex flex-row justify-center items-center ">
        <ReactLoading
          type="spinningBubbles"
          color="#FFFFFF"
          height={400}
          width={400}
        />
      </div>
    );
  } else {
    return (
      <div className="bg-teal-100 pb-6">
        <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-yellow-600 ">
            Find locations that interest you
          </h2>
          <h2 className="text-xl tracking-tight text-gray-500  mt-4">
            Collections of Locations in cities
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 ">
            {currentItems.map((location, index) => (
              <div
                key={index}
                className="group relative bg-cyan-800 rounded-md border border-gray-400 shadow-md"
              >
                <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1  rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={
                      !location.image ? (
                        <ReactLoading
                          type="spinningBubbles"
                          color="#FFFFFF"
                          height={400}
                          width={400}
                        />
                      ) : (
                        location.image
                      )
                    }
                    alt={location.image}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-2 flex justify-between px-3 py-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200">
                      <Link to={`/locations/${location.title}`}>
                        {" "}
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
                      <a href={location.href}>
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
                      </a>
                    </h3>
                  </div>
                  <p className="text-xs font-medium mt-1 text-gray-200 sm:text-sm md:text-sm">
                    Opening hours: {location.openhourse}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto flex justify-center mb-10 mt-10">
            <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={6}
              pageCount={pageCount}
              className="flex"
              previousLabel={prevButton}
              nextLabel={nextButton}
              pageClassName="bg-white border-gray-300 text-gray-500  hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              activeClassName="bg-gray-300 border-gray-300 text-gray-500  hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    );
  }
}
