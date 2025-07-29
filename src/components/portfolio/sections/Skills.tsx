import React, { useEffect, useState } from "react";
import { CodeIcon, BrainIcon, CodepenIcon } from "lucide-react";

const SkillBar = ({ name, percentage, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100 + delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium text-base">{name}</span>
        <span className="text-indigo-400 text-base">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillTag = ({ name, active = false }) => {
  const getGradient = (name) => {
    const hash = name
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const gradients = [
      "from-purple-500 to-indigo-500",
      "from-blue-500 to-cyan-400",
      "from-green-500 to-emerald-400",
      "from-yellow-500 to-orange-400",
    ];
    return gradients[hash % gradients.length];
  };

  const [isHovered, setIsHovered] = useState(false);
  const gradient = getGradient(name);

  return (
    <div
      className={`relative rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 overflow-hidden
                 ${
                   isHovered || active
                     ? "text-white scale-105"
                     : "text-gray-300 bg-gray-800 border border-gray-700"
                 }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-opacity duration-300
                     ${isHovered || active ? "opacity-100" : "opacity-0"}`}
      />
      <span className="relative z-10">{name}</span>
    </div>
  );
};

const Skills = () => {
  // Core technical skills with proficiency percentages
  const coreSkills = [
    { name: "Java", percentage: 85 },
    { name: "Python", percentage: 75 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "Node.js", percentage: 75 },
  ];

  // Key technologies grouped by category
  const technologies = {
    Frontend: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "HTML",
      "CSS",
      "Flask",
      "Flutter",
    ],
    Backend: ["Node.js", "Express", "Python", "Java", "Spring Boot", "Prolog"],
    Database: ["MongoDB", "PostgreSQL"],
    Tools: ["Git", "AWS", "CI/CD", "Jira", "Postman", "Docker"],
    Testing: ["JUnit", "Mockito", "Jenkins"],
  };

  // Essential soft skills
  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Leadership",
    "Adaptability",
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            Skills & Expertise
          </h2>
          <div className="mt-2 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300">
            Technical proficiency and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Core Technical Skills */}
          <div className="bg-gray-800/80 rounded-xl p-8 border border-gray-700/50 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                <CodeIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">Core Skills</h3>
            </div>
            <div className="space-y-4">
              {coreSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 100}
                />
              ))}
            </div>
            <div className="space-y-4 mt-8">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                  <BrainIcon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">
                  Professional Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Technologies & Tools */}
          <div className="bg-gray-800/80 rounded-xl p-8 border border-gray-700/50 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                <CodepenIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">Technologies</h3>
            </div>
            <div className="space-y-6">
              {Object.entries(technologies).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-base font-medium text-indigo-300 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <SkillTag key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
