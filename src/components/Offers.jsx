import React from "react";
import { UserGroupIcon, MapPinIcon, HomeModernIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const Offers = () => {
  return (
    <div className="m-auto justify-center text-center px-4 py-12 ">
      <p className="text-4xl font-bold mb-8">Why Choose Our Homes</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center items-stretch">
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <UserGroupIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Friendly Environment</h3>
          <p>Safety and comfort guaranteed</p>
        </div>
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <MapPinIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Strategic Location</h3>
          <p>Easy access to city center</p>
        </div>
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <HomeModernIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Quality Construction</h3>
          <p>Built with attention to detail</p>
        </div>
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <BanknotesIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Value for Money</h3>
          <p>Competitive pricing for quality homes</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
