const Locations = [
  {
    id: 1,
    name: "Duhok Mall",
    href: "#",
    imageSrc:
      "http://www.marsmekanik.com/Upload/Galeri/Kucuk/6122016112023947.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    cityOfLocation: "Duhok",
  },
  {
    id: 2,
    name: "Erbil Citadel",
    href: "#",
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fb/e3/3a/photo1jpg.jpg?w=1200&h=-1&s=1",
    imageAlt: "Front of men's Basic Tee in black.",
    cityOfLocation: "Erbil",
  },
  {
    id: 3,
    name: "Ahmad Awa",
    href: "#",
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/44/18/c1/this-beautiful-resort.jpg?w=1200&h=-1&s=1",
    imageAlt: "Front of men's Basic Tee in black.",
    cityOfLocation: "Sulaimaniya",
  },
  // More Locations...
];

export default function BestLocation() {
  return (
    <div className="bg-teal-100">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 ">
          Best locations that interest you
        </h2>
        <h2 className="text-xl tracking-tight text-gray-500  mt-4">
          Collections of our best Locations in cities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {Locations.map((location) => (
            <div key={location.id} className="group relative bg-cyan-200 rounded-md border border-gray-400 shadow-md">
              <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={location.imageSrc}
                  alt={location.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-2 flex justify-between p-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <a href={location.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {location.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium mt-1 text-gray-900">
                  City: {location.cityOfLocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
