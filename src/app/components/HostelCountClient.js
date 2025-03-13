"use client";

import { LocationCity } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { fetchHostels } from "@/lib/LocationFetch";

export default function HostelCountClient({ hostelCounts }) {
  const [selectedLocation, setSelectedLocation] = useState(hostelCounts[0]);
  const [hostelList, setHostelList] = useState([]);

  // Fetch hostels for a given location id and update the state
  const loadHostels = async (locationId) => {
    const hostels = await fetchHostels(locationId);
    setHostelList(hostels);
  };

  useEffect(()=> {
    loadHostels(selectedLocation.id)
  }, [selectedLocation.id])
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-blue-700">Hostel Overview</h1>
        <p className="mt-2 text-gray-600">
          Explore locations and see the available hostel counts with detailed view.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar with list of locations */}
        <aside className="lg:col-span-1 bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Locations</h2>
          <ul className="divide-y divide-gray-200">
            {hostelCounts.map((location) => (
              <li
                key={location.name}
                className={`p-4 flex items-center cursor-pointer transition-colors ${
                  selectedLocation?.name === location.name
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setSelectedLocation(location);
                  loadHostels(location.id);
                }}
              >
                <div className="flex-shrink-0 mr-3">
                  <LocationCity fontSize="large" className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-800">{location.name}</p>
                  <p className="text-sm text-gray-600">
                    {location.count} Hostel{location.count > 1 ? "s" : ""}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Detailed view for the selected location */}
        <section className="lg:col-span-2 bg-white rounded-lg shadow-2xl p-6">
          {selectedLocation ? (
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <LocationCity fontSize="large" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedLocation.name}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {selectedLocation.count} Hostel
                    {selectedLocation.count > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Additional details panel */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Details</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                </p>
              </div>

              {/* Hostels list panel */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Hostels</h3>
                {hostelList && hostelList.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {hostelList.map((hostel) => (
                      <li key={hostel.id} className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={hostel.image}
                            alt={hostel.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="text-lg font-medium text-gray-800">
                              {hostel.name}
                            </p>
                            <p className="text-sm text-gray-600">{hostel.locationname}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    No hostels available for this location.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center">Select a location to view details</p>
          )}
        </section>
      </div>
    </div>
  );
}
