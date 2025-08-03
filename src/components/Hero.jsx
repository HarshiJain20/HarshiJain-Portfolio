import React, { useEffect, useState } from "react"
import profilePic from "../assets/profilePic.jpg"

const Hero = () => {
  const [animations, setAnimations] = useState({
    name: false,
    title: false,
    description: false,
    photo: false
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimations(prev => ({ ...prev, name: true })), 200);
    const timer2 = setTimeout(() => setAnimations(prev => ({ ...prev, title: true })), 400);
    const timer3 = setTimeout(() => setAnimations(prev => ({ ...prev, description: true, photo: true })), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div id="hero">
      <div className="border-b border-neutral-900 pb-4 pt-35 lg:mb-20 lg:pt-53">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className={`pb-10 text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight mt-6 lg:mt-0 transition-all duration-700 ease-out ${
                animations.name 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                Hi, I'm Harshi Jain
              </h1>

              <span className={`bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl text-3xl tracking-tight text-transparent transition-all duration-700 ease-out delay-200 ${
                animations.title 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                Frontend Developer
              </span>

              <p className={`my-2 max-w-xl py-4 font-light tracking-tight transition-all duration-700 ease-out delay-300 ${
                animations.description 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                Passionate frontend developer crafting efficient, scalable solutions with clean, modern code.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:p-6 lg:pt-0">
            <div className={`flex justify-center transition-all duration-700 ease-out delay-300 ${
              animations.photo 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-8 scale-95'
            }`}>
              <img 
                src={profilePic} 
                alt="Harshi Jain" 
                className="lg:size-100 sm:w-80 sm:h-80 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
