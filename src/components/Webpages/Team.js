// import React, { useContext } from 'react';
// import { DContext } from '../Datacontext/Datacontext';

// export const Team = () => {
//   const { Team } = useContext(DContext);
//   console.log("Team:", Team);

//   return (
//     <div className=" p-6 relative bg-white">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Meet Our Team</h1>
//         <p className="text-gray-600 mt-2">Our dedicated team members</p>
//       </div>

//       {/* Team Members Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {Team && Team.length > 0 ? (
//           Team.map((data, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
//             >
//               {/* Image */}
//               <img
//                 src={data.image}
//                 alt={data.name}
//                 className="w-32 h-32 rounded-full object-cover mb-4"
//               />
//               {/* Name and Position */}
//               <p className="text-xl font-semibold">{data.name}</p>
//               <p className="text-gray-500">{data.postion}</p>

//               {/* Social Media Links */}
//               <div className="flex justify-center space-x-4 mt-4 text-blue-600">
//                 {data.socialmedia.facebook && (
//                   <a
//                     href={data.socialmedia.facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-800"
//                   >
//                     <i className="fab fa-facebook"></i>
//                   </a>
//                 )}
//                 {data.socialmedia.instagram && (
//                   <a
//                     href={data.socialmedia.instagram}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-pink-600"
//                   >
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 )}
//                 {data.socialmedia.linkecin && (
//                   <a
//                     href={data.socialmedia.linkecin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-700"
//                   >
//                     <i className="fab fa-linkedin"></i>
//                   </a>
//                 )}
//                 {data.socialmedia.twitter && (
//                   <a
//                     href={data.socialmedia.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-500"
//                   >
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center col-span-full text-gray-500">No team data available</div>
//         )}
//       </div>
//     </div>
//   );
// };
