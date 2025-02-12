// import React, { useState } from 'react';
// import CEO from '../../assest/gowri.jpg'
// import Graper from '../../assest/Shanker.jpg'
// import Developer from '../../assest/Aravindan.jpg'

// const testimonials = [
//   {
//     name: "Gowri Shankar",
//     role: "CEO & FULL STACK DEVELOPER",
//     image: CEO ,
//     rating: '',
//     feedback:
//       "A CEO (Chief Executive Officer) is the highest-ranking executive in a company, responsible for overall strategy and decision-making. They lead the organization, ensuring business goals are met while balancing stakeholders' interests. A CEO plays a critical role in setting the vision and driving the company's growth and success.",
//   },
//   {
//     name: "Aravindan",
//     role: "FULL STACK DEVELOPER",
//     image: Developer,
//     rating: "",
//     feedback:
//       "A full-stack developer is proficient in both front-end and back-end development, creating complete web applications. They handle everything from designing user interfaces to managing databases and server-side logic.",
//   },
//   {
//     name: "Shankar",
//     role: "PHOTO GRAPHER",
//     image: Graper,
//     rating: "",
//     feedback:
//       "A photographer captures moments and tells stories through images using cameras and creative techniques. They work in various settings like events, nature, portraits, or commercial shoots. A good photographer combines technical skills with an artistic vision to create impactful visuals.",
//   },
// ];

// export const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const { name, role, image, rating, feedback } = testimonials[currentIndex];

//   return (
//     <div className="relative z-10 py-10 px-5 top-6 bg-white h-full">
//       <div className="container mx-auto text-center">
//         <h3 className="text-2xl font-bold mb-4 text-blue-500">Our Team</h3>
//         <div className="relative max-w-lg mx-auto bg-white bg-opacity-90 shadow-md rounded-lg p-6 ">
//           <div className="flex justify-center mb-4">
//             <img
//               src={image}
//               alt={name}
//               className=" rounded-3xl shadow-lg"
//               width="100"
//               height="100"
//             />
//           </div>
//           <h5 className="text-lg font-semibold">{name}</h5>
//           <h6 className="text-sm text-gray-500 mb-3">{role}</h6>
//           <div className="flex justify-center space-x-1 text-blue-500 mb-4">
//             {[...Array(Math.floor(rating))].map((_, i) => (
//               <i key={i} className="fas fa-star"></i>
//             ))}
//             {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
//           </div>
//           <p className="text-gray-600">{feedback}</p>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handlePrevious}
//             className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };



import React, { useState } from 'react';
import CEO from '../../assest/gowri.jpg';
import Graper from '../../assest/Shanker.jpg';
import Developer from '../../assest/Aravindan.jpg';

const testimonials = [
  {
    name: "Gowri Shankar",
    role: "CEO & FULL STACK DEVELOPER",
    image: CEO,
    feedback:
      "A CEO (Chief Executive Officer) is the highest-ranking executive in a company, responsible for overall strategy and decision-making. They lead the organization, ensuring business goals are met while balancing stakeholders' interests.",
  },
  {
    name: "Aravindan",
    role: "FULL STACK DEVELOPER",
    image: Developer,
    feedback:
      "A full-stack developer is proficient in both front-end and back-end development, creating complete web applications. They handle everything from designing user interfaces to managing databases and server-side logic.",
  },
  {
    name: "Shankar",
    role: "PHOTOGRAPHER",
    image: Graper,
    feedback:
      "A photographer captures moments and tells stories through images using cameras and creative techniques. They work in various settings like events, nature, portraits, or commercial shoots. A good photographer combines technical skills with an artistic vision to create impactful visuals.",
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, role, image, feedback } = testimonials[currentIndex];

  return (
    <div className="relative z-10 py-10 px-5 top-6 bg-white h-full">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-500">Our Team</h3>
        <div
          className="relative max-w-lg mx-auto bg-white bg-opacity-90 shadow-md rounded-lg p-6 transition-all duration-300"
          style={{ minHeight: '250px' }} // Keeps the height consistent
        >
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt={name}
              className="rounded-3xl shadow-lg"
              width="100"
              height="100"
            />
          </div>
          <h5 className="text-lg font-semibold">{name}</h5>
          <h6 className="text-sm text-gray-500 mb-3">{role}</h6>
          <p className="text-gray-600">{feedback}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
