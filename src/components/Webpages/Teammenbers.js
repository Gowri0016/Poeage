// import React, { useState } from 'react';
// import CEO from '../../assest/gowri.jpeg'
// import Graper from '../../assest/Shanker.jpg'

// const testimonials = [
//   {
//     name: "Gowri Shankar",
//     role: "CEO & FULL STACK DEVELOPER",
//     image: CEO ,
//     rating: '',
//     feedback:
//       "A CEO (Chief Executive Officer) is the highest-ranking executive in a company, responsible for overall strategy and decision-making. They lead the organization, ensuring business goals are met while balancing stakeholders' interests. A CEO plays a critical role in setting the vision and driving the company's growth and success.",
//   },
//  
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
import Graper from '../../assest/Shanker.jpg'
import HR from '../../assest/HR.Sid.jpeg';
import UIUX from '../../assest/UI:UX.Shree.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mr.GM.Shankar",
    role: "General Manager",
    image: Graper,
    feedback: "As a General Manager, I focus on building strong teams, driving operational excellence, and fostering innovation across all departments. I believe in empowering individuals, encouraging collaboration, and leading with integrity to achieve sustainable growth and success for the organization.",
  },
  {
    name: "Mr.Siddharth",
    role: "HR Manager",
    image: HR,
    feedback: "In Human Resources, my goal is to create a supportive, inclusive workplace where every team member can thrive. I am passionate about talent development, fostering positive work culture, and aligning people strategies with organizational success.",
  },
  {
    name: "Ms.Shreenithi",
    role: "UI/UX Designer",
    image: UIUX,
    feedback: "As a UI/UX Designer, I am passionate about creating intuitive, engaging, and accessible digital experiences. I focus on understanding user needs, combining functionality with aesthetics, and delivering designs that enhance usability and drive user satisfaction.",
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
    <div className="relative z-10 py-20 px-8 md:px-16 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h3 className="mb-10 text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600">
          Meet Our Team
        </h3>

        <div className="relative max-w-xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12 transform transition duration-500 hover:scale-105">
          {image && (
            <img
              src={image}
              alt={name}
              className="object-cover w-32 h-32 items-center rounded-full shadow-lg mx-auto mb-6 border-4 border-blue-200"
            />
          )}
          <h5 className="text-xl md:text-2xl font-semibold text-blue-800">{name}</h5>
          <h6 className="text-sm text-blue-500 mb-4">{role}</h6>
          <p className="text-gray-600 text-base leading-relaxed">{feedback}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={handlePrevious}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

