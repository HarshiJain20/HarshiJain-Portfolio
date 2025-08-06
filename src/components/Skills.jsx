import React, { useEffect, useState, useRef } from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa6'
import { FaNodeJs } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [startFloating, setStartFloating] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', floatClass: 'animate-float' },
    { name: 'CSS3', icon: FaCss3, color: 'text-blue-500', floatClass: 'animate-float2' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', floatClass: 'animate-float3' },
    { name: 'React.js', icon: RiReactjsLine, color: 'text-cyan-400', floatClass: 'animate-float4' },
    { name: 'Java', icon: FaJava, color: 'text-red-700', floatClass: 'animate-float' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', floatClass: 'animate-float2' },
    { name: 'Git/GitHub', icon: FaGithub, color: 'text-gray-300', floatClass: 'animate-float3' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', floatClass: 'animate-float4' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
              }, index * 150);
            });
            
            setTimeout(() => {
              setStartFloating(true);
            }, skills.length * 150 + 500);
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
    <div className='border-b border-neutral-800 pb-24 pt-7' id='skills' ref={sectionRef}>
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon
          const isVisible = visibleSkills.includes(index);
          
          return (
            <div key={index} className={`flex flex-col items-center ${startFloating ? skill.floatClass : ''}`}>
              <div className={`rounded-2xl border-4 border-neutral-800 p-4 mb-2 transition-all duration-700 ease-out hover:scale-110 hover:border-neutral-600 ${
                isVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}>
                <IconComponent className={`lg:text-7xl text-6xl ${skill.color}`} />
              </div>
              <span className={`text-sm text-gray-300 font-medium transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
              }`}>{skill.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
