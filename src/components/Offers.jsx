import React from "react";
import { UserGroupIcon, MapPinIcon, HomeModernIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const Offers = () => {
  return (
    <div className="m-auto justify-center text-center my-32 px-8 py-12 ">
      <p className="text-4xl font-bold mb-8">Why Choose Our Homes</p>
      <p className="text-lg text-center pb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius qui minus dolorem autem incidunt quam eum facilis asperiores. Deleniti cupiditate tempore eum numquam placeat, ex facilis nisi corrupti enim dolorem ab? Rem aperiam
        sapiente doloribus eveniet reprehenderit, aut blanditiis ullam nam, consectetur quisquam illo, quia cupiditate ad exercitationem minus aliquam.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center items-stretch">
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <UserGroupIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Friendly Environment</h3>
          <p className="text-gray-500">Safety and comfort guaranteed</p>
        </div>
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <MapPinIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Strategic Location</h3>
          <p className="text-gray-500">Easy access to city center</p>
        </div>
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <HomeModernIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Quality Construction</h3>
          <p className="text-gray-500">Built with attention to detail</p>
        </div>
        <div className="px-4 py-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
          <BanknotesIcon className="h-10 w-10 text-teal-950 mb-2" />
          <h3 className="text-2xl font-semibold">Value for Money</h3>
          <p className="text-gray-500">Competitive pricing for quality homes</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
