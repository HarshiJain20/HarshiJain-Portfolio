import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timelineData = [
  {
    type: "education",
    icon: <FaGraduationCap />,
    title: "B.Tech in Computer Science",
    place: "Pandit Deendayal Energy University, Gujarat",
    duration: "2023 – Present",
    grade: "9.62 CGPA",
    description:
      "Currently pursuing B.Tech with focus on data structures, full-stack development, and problem-solving.",
  },
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Web Developer Intern",
    place: "iNav Labs",
    duration: "August 2025 - Present",
    grade: "",
    description:
      "Working as a full stack intern on a food delivery app, contributing to both frontend and backend development. Implemented new features, optimized user experience, and collaborated with the team to deliver scalable solutions.",
  },
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Open Source Contributor",
    place: "GirlScript Summer of Code (GSSoC)",
    duration: "August 2025 – Present",
    grade: "",
    description:
      "Recently selected as a contributor for GSSoC 2025. Actively participating in open source projects by resolving issues, implementing new features, and collaborating with mentors and fellow contributors to make meaningful contributions to the community.",
  },
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Web Developer Intern",
    place: "Prodigy InfoTech (Remote)",
    duration: "July 2025",
    grade: "",
    description:
      "Worked on responsive frontend projects using HTML, CSS, JS. Integrated APIs and maintained clean UI design.",
  },
];

export default function WorkAndEducation() {
  return (
    <div id="workandeducation" className="text-white pb-24 pt-7 sm:px-6 lg:px-20">
        <h2 className="text-center text-4xl my-20 font-semibold">
        Work <span className="text-neutral-500">&</span> Education
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute h-full w-1 bg-white sm:left-[38px] lg:left-1/2 transform lg:-translate-x-1/2 z-0"></div>

        <div className="flex flex-col gap-20 relative z-10">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline Icon */}
                <div
                  className={`
                    hidden sm:flex
                    absolute top-0 w-10 h-10 rounded-full bg-white text-black
                    items-center justify-center text-xl z-20 shadow-md
                    left-[10px] sm:left-[20px] lg:left-1/2 lg:-translate-x-1/2
                  `}
                >
                  {item.icon}
                </div>

                {/* Timeline Card */}
                <div
                  className={`
                    w-full sm:w-[90%] md:w-[80%] lg:w-[45%]
                    border-4 border-neutral-800 p-6 rounded-xl shadow-md
                    ${isLeft ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto lg:mr-0"}
                    ml-2 md:ml-20 lg:ml-0
                  `}
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.place}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.duration}</p>
                  {item.grade && (
                    <p className="text-sm font-medium text-pink-400 mb-2">{item.grade}</p>
                  )}
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}