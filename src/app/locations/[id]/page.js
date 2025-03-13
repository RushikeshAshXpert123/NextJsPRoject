import Image from "next/image";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import { fetchHostels } from "@/lib/LocationFetch";

export default async function HostelsPage(props) {
  // Await the props and extract params
  const { params } = await props;
  const awaitedParams = await params;
  const hostels = await fetchHostels(awaitedParams.id);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Header Section */}
      <header className="mx-auto flex flex-col sm:flex-row items-center justify-between mb-10">
        <div className="flex items-center mb-6 sm:mb-0">
          <HotelIcon className="text-blue-600 mr-3" fontSize="large" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Hostels in {hostels[0]?.locationname || "Your Selected Location"}
          </h1>
        </div>
      </header>

      {/* Hostels List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {hostels.map((hostel) => (
            <div
              key={hostel.id}
              className="w-full bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={hostel.image}
                  alt={hostel.name}
                  width={500}
                  height={300}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "300px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                    {hostel.name}
                  </h3>
                </div>
              </div>

              {/* Hostel Details */}
              <div className="p-4 space-y-3">
                <p className="flex items-center text-gray-600">
                  <LocationOnIcon className="text-blue-500 mr-2" />
                  {hostel.locationname}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <BedIcon className="text-green-500 mr-1" />
                    10 Beds
                  </span>
                  <span className="flex items-center">
                    <StarIcon className="text-yellow-500 mr-1" />
                    5/5
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
