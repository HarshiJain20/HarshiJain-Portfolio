import React, { useEffect, useState, useRef } from "react";
import AboutPhoto from "../assets/AboutMe.jpg"

const About = () => {
  const [animations, setAnimations] = useState({
    image: false,
    text: false
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer1 = setTimeout(() => setAnimations(prev => ({ ...prev, image: true })), 200);
            const timer2 = setTimeout(() => setAnimations(prev => ({ ...prev, text: true })), 400);

            return () => {
              clearTimeout(timer1);
              clearTimeout(timer2);
            };
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 pt-7" id="about" ref={sectionRef}>
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className={`flex items-center justify-center transition-all duration-700 ease-out ${
            animations.image 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-8 scale-95'
          }`}>
            <img src={AboutPhoto} alt="Photo" className="lg:size-100 sm:w-80 sm:h-80 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className={`flex justify-center lg:justify-start lg:items-center h-full transition-all duration-700 ease-out delay-200 ${
              animations.text 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}>
              <p className="m-2 max-w-xl lg:p-6 lg:px-10 text-start lg:text-left sm:px-1 sm:p-2 pt-6">
                Hi! I'm Harshi Jain, a passionate Full Stack Developer and Computer Science undergraduate at Pandit
                Deendayal Energy University. I specialize in building modern, responsive web applications using React.js, 
                Node.js, and modern JavaScript frameworks. Currently working as a Full Stack Intern at iNav Labs, 
                I contribute to both frontend and backend development of a food delivery app, implementing new features 
                and optimizing user experiences. I'm also an active open source contributor, recently selected for 
                GirlScript Summer of Code (GSSoC) 2025, where I collaborate on meaningful projects and contribute 
                to the developer community. My tech stack includes React, JavaScript, Node.js, HTML/CSS, Tailwind CSS, 
                and Git. Beyond coding, I enjoy video editing, Canva design, and creative pursuits. I'm always eager 
                to learn new technologies and create impactful digital solutions that solve real-world problems.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;