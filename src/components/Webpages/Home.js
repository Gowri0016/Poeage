import React from 'react';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowRightCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/quotes');
  }

  const socialLinks = [
    {
      platform: 'Twitter',
      url: 'https://x.com/PoeageCom',
      Icon: TwitterIcon,
      color: 'text-blue-400',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/share/1Gcq6JPLpL/',
      Icon: FacebookIcon,
      color: 'text-blue-500',
    },
    {
      platform: 'Linkedin',
      url: 'https://www.linkedin.com/in/g-gowri-shankar',
      Icon: LinkedinIcon,
      color: 'text-blue-600',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/poeage__com?igsh=MTljMmMyanY4dDlsbw==',
      Icon: InstagramIcon,
      color: 'text-pink-500',
    },
  ];

  return (
  <div
  style={{
    backgroundColor: '#ffffff', // solid white background
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    minHeight: '100vh',
  }}
>
  <div className="relative top-24 z-10 flex flex-col justify-center items-center w-full min-h-screen px-4 text-center space-y-6 md:space-y-10 max-w-screen-md mx-auto">
<h1
  className="
    text-3xl sm:text-4xl md:text-5xl
    font-extrabold font-inter
    inline-block
    bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]
    from-blue-600 via-blue-500 to-indigo-600
    bg-clip-text text-transparent
    drop-shadow
  "
>
  Crafting Digital Experiences with Impact
</h1>

<h2
  className="
    font-extrabold text-xl md:text-2xl
    bg-black
    bg-clip-text text-transparent
    font-inter
  
    animate-bounce
    transition
  "
  style={{
    textShadow: '0 2px 12px rgba(0, 255, 255, 0.15)',
  }}
>
  Design. Develop. Deliver.
</h2>

   
   <p
  className="
    max-w-2xl text-lg sm:text-xl md:text-2xl font-medium leading-relaxed
    inline-block
    bg-gradient-to-t from-orange-500 via-blue-500 to-teal-500
    text-transparent bg-clip-text
  "
 
>
  At <span className="font-bold text-cyan-500">Poeage</span>, we blend clean code with captivating design to build memorable digital products. From intuitive interfaces to sleek animations, every pixel is crafted with purpose.
</p>

    {/* ...rest of your code */}
  </div>
</div>
  )
}