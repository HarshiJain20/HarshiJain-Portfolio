import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa6'
import { FaNodeJs } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'React.js', icon: RiReactjsLine, color: 'text-cyan-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-700' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Git/GitHub', icon: FaGithub, color: 'text-gray-300' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' }
  ]

  return (
    <div className='border-b border-neutral-800 pb-24 pt-7' id='skills'>
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-2xl border-4 border-neutral-800 p-4 mb-2">
                <IconComponent className={`lg:text-7xl text-6xl ${skill.color}`} />
              </div>
              <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
