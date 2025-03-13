// app/page.js (or your HomePage file)
import dynamic from "next/dynamic";
import { fetchLocations } from "@/lib/LocationFetch";
const HeroCarousel = dynamic(() => import("./components/HeroCarousel"), {
  loading: () => <p>Loading...</p>,
});

const LoadingLink = dynamic(() => import("./components/Loader"), {
  loading: () => <p>Loading...</p>,
});

import Image from "next/image";

export default async function HomePage() {
  const locations = await fetchLocations();

  return (
    <>
      <HeroCarousel />

      {/* Locations Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-800">
            Discover India's Top Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    width={500}
                    height={256}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "256px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {loc.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <LoadingLink href={`/locations/${loc.id}`}>
                    <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300">
                      View Hostels
                    </button>
                  </LoadingLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
