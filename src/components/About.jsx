import React from "react";
import AboutPhoto from "../assets/AboutMe.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-7" id="about">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={AboutPhoto} alt="Photo" className="lg:size-100 sm:w-80 sm:h-80 rounded-2xl" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start lg:items-center h-full">
              <p className="m-2 max-w-xl lg:p-6 lg:px-10 text-start lg:text-left sm:px-1 sm:p-2 pt-6">
                Hi! I'm Harshi Jain, a Computer Science undergraduate at Pandit
                Deendayal Energy University with a passion for building
                interactive and user-friendly web applications. I enjoy bringing
                ideas to life using technologies like React.js, JavaScript, and
                HTML/CSS. Whether it’s creating real-time weather apps or
                developing AI-driven analytics modules, I love solving problems
                and continuously exploring new tools and frameworks. Alongside
                coding, I have a creative side—I'm into video editing, Canva
                design, singing, and dancing. I’m always eager to learn, grow,
                and create meaningful digital experiences.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;