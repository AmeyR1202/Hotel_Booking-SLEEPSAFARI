import React, { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

const Hero = () => {
  const { navigate, getToken, axios, setSearchedCities } = useAppContext();
  const [destination, setDestination] = useState("");
  const onSearch = async (e) => {
    e.preventDefault();
    navigate(`/rooms?destination=${destination}`);
    // call api to save recent searched city
    await axios.post(
      "/api/user/store-recent-search",
      { recentSearchedCity: destination },
      { headers: { Authorization: `Bearer ${await getToken()}` } }
    );

    // add destination to searchedCities max 3 recent searched cities
    setSearchedCities((prevSearchedCities) => {
      const updatedSearchedCities = [...prevSearchedCities, destination];
      if (updatedSearchedCities.length > 3) {
        updatedSearchedCities.shift();
      }
      return updatedSearchedCities;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 text-white pt-16">
      {/* Centered Heading with Curved Highlight on SleepSafari */}
      <div className="w-full flex justify-center text-center relative">
        <h1 className="mt-8 md:mt-0 text-black text-5xl md:text-7xl font-outfit font-bold max-w-4xl relative inline-block">
          End Your Search With{" "}
          <span className="relative inline-block px-3 pb-1">
            <img
              src={assets.YellowHighlight}
              alt=""
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-auto object-contain -z-10"
            />
            SleepSafari
          </span>
        </h1>
      </div>

      {/* Intro Text */}
      <p className="self-start text-left bg-blue-300 text-black px-3.5 py-1 rounded-full mt-20">
        The Ultimate Hotel Experience...
      </p>

      <h1 className="self-start text-left font-playfair text-black text-2xl md:text-5xl md:leading-[55px] font-bold md:font-extrabold max-w-xl mt-2">
        Discover Your Next Perfect Destination
      </h1>

      <p className="max-w-xl mt-2 text-sm md:text-base text-black">
        Unmatched luxury and soothing comfort awaits...
      </p>

      {/* Modern Hotel Booking Form */}
      <form
        onSubmit={onSearch}
        className="flex flex-wrap lg:flex-nowrap items-center gap-4 mt-10 w-full bg-blue-50 bg-opacity-90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
      >
        {/* Location */}
        <div className="flex flex-col flex-1 min-w-[180px]">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Destinations
          </label>
          <div className="text-black">
            <input
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
              list="destinations"
              id="destinationInput"
              type="text"
              placeholder="City, hotel or area"
              className="p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-black"
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Check-In */}
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label className="flex text-sm font-medium text-gray-700 mb-1">
            <img src={assets.calenderIcon} />
            Check-In
          </label>
          <input
            type="date"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>

        {/* Check-Out */}
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Check-Out
          </label>
          <input
            type="date"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family (2 Adults, 1 Child)</option>
            <option>Group (4+)</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-4 lg:mt-4 flex-shrink-0 w-full lg:w-auto">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium px-6 py-3 rounded-full shadow-md"
          >
            Search Hotels
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
