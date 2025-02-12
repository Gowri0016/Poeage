import React, { useContext } from 'react';
import { DContext } from '../Datacontext/Datacontext';

export const Services = () => {
  const { service } = useContext(DContext);
  console.log("service", service);

  const limitedServices = service && service.length > 6 ? service.slice(0, 6) : service;

  const filteredServices =
    service && service[6] && service[6].choose && service[6].choose.length === 6
      ? service[6].choose.slice(0, 6)
      : service[6]?.choose;

  return (
    <>
      {/* Limited Services Section */}
      <div className="relative z-10 top-20 bg-white py-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 px-4">
          {limitedServices && limitedServices.length > 0 ? (
            limitedServices.map((data, index) => (
              <div
                key={index}
                className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                <img src={data.image} alt="image" className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl mb-2 text-blue-700">{data.topic}</p>
                <p className="text-sm text-gray-700">{data.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No services available</div>
          )}
        </div>
      </div>

      {/* "Why Choose Us" Section */}
      <div className="service_choose px-4 bg-white py-12">
        <div className="grid justify-center text-center gap-5">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600 relative bottom-4">Why Choose Us</p>
        </div>


        {/* Filtered Services Section */}
        <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-14 px-4">
          {filteredServices && filteredServices.length > 0 ? (
            filteredServices.map((data, index) => (
              <div
                key={index}
                className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                <img src={data.image} alt="image" className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl mb-2 text-blue-700">{data.topic}</p>
                <p className="text-sm text-gray-700">{data.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No services available</div>
          )}
        </div>
      </div>
    </>
  );
};
