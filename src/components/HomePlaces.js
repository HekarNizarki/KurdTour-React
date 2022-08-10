const Locations = [
  {
    id: 1,
    name: "Duhok",
    href: "#",
    imageSrc:
      "https://scontent.febl9-1.fna.fbcdn.net/v/t1.6435-9/89894444_140375824134976_9037075004302295040_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEljvwCuL8wACVsZ9YRtWDX2LPnGLcCrE3Ys-cYtwKsTWTytkclcSbaieqWH__AZJft0IJpv1QL0e-EX7P4kf1f&_nc_ohc=2G4MwM1j4-sAX_X0SSV&_nc_ht=scontent.febl9-1.fna&oh=00_AT_qfUE4kvyT7N3f810KWpp6Ku5tNuoP_5MGr1YYq7bT0g&oe=6316A5CA",
    imageAlt: "Front of men's Basic Tee in black.",
    numberOfLocation: "3",
  },
  {
    id: 2,
    name: "Hewler",
    href: "#",
    imageSrc:
      "https://esta.krd/wp-content/uploads/2021/09/20640309329_24ecf4876a_b.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    numberOfLocation: "4",
  },
  {
    id: 3,
    name: "Sulaimani",
    href: "#",
    imageSrc:
      "https://www.rudaw.net/ContentFilesArchive/509856Image1.jpg?version=3620554",
    imageAlt: "Front of men's Basic Tee in black.",
    numberOfLocation: "6",
  },

  // More Locations...
];

export default function Example() {
  return (
    <div className="bg-teal-100">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 ">
          Find locations that interest you
        </h2>
        <h2 className="text-xl tracking-tight text-gray-500  mt-4">
          Collections of Locations in cities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {Locations.map((location) => (
            <div key={location.id} className="group relative">
              <div className="w-full min-h-8 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={location.imageSrc}
                  alt={location.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <a href={location.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {location.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium mt-1 text-gray-900">
                  {location.numberOfLocation} Locations
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
