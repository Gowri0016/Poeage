import React from 'react';
import Builders from '../../assests/5.png';
import Hub from '../../assests/1.png';
import Web from '../../assests/3.png';
import Header from './Header';
import Footer from './Footer';

export default function OurCompany() {
  const companies = [
    {
      name: 'Poeage Builders',
      img: Builders,
      link: 'https://poeagebuilders.in',
      desc: 'Expert construction and architecture solutions blending innovation, quality, and reliability.',
      color: 'from-amber-400 to-red-500',
      align: 'items-start text-left',
    },
    {
      name: 'Poeage Hub',
      img: Hub,
      link: 'https://poeage-hub.vercel.app/',
      desc: 'A futuristic digital commerce platform connecting ideas, services, and businesses seamlessly.',
      color: 'from-blue-500 to-cyan-400',
      align: 'items-center text-center',
    },
    {
      name: 'Poeage Web Solutions',
      img: Web,
      link: 'https://pws-rouge-five.vercel.app/',
      desc: 'Empowering global brands through cutting-edge web design and technology experiences.',
      color: 'from-fuchsia-500 to-indigo-500',
      align: 'items-end text-right',
    },
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_70%)]"></div>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Our Companies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-7xl w-full">
          {companies.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col ${item.align} p-8 md:p-10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col gap-5">
                <div className="w-28 h-28 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-contain drop-shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-block px-6 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r ${item.color} hover:opacity-90 shadow-md transition-all duration-300 self-${item.align.includes('end') ? 'end' : item.align.includes('start') ? 'start' : 'center'}`}
                >
                  Visit Website →
                </a>
              </div>

              <div className={`absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r ${item.color} opacity-25 group-hover:opacity-50 transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}