import React, { useState } from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
const ExperienceItem = ({
  title,
  company,
  location,
  period,
  description,
  active,
  onClick
}) => {
  return <div className={`relative cursor-pointer transition-all duration-300 mb-8 ${active ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`} onClick={onClick}>
      <div className="flex items-center mb-2">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${active ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
          <BriefcaseIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className={`text-lg font-bold ${active ? 'text-indigo-400' : 'text-gray-300'}`}>
            {title}
          </h3>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
      {active && <div className="pl-16 animate-fadeIn">
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span className="mr-4">{period}</span>
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <p className="text-gray-300">{description}</p>
        </div>}
    </div>;
};
const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const experiences = [{
    title: 'Software Developer',
    company: 'Xmplar Management Solutions',
    location: 'Bangalore, India',
    period: 'Aug 2022 - Dec 2023',
    description: 'Built and optimized RESTful APIs using Spring Boot, reducing downtime and improving performance. Automated CI/CD with Jenkins, Maven, and Gradle to streamline deployments. Enhanced PostgreSQL efficiency through indexing and caching. Reduced bugs using JUnit, TestNG, Mockito, and Postman. Migrated ORM from iBatis to MyBatis for better maintainability and faster development.'
  }, {
    title: 'FullStack Developer Intern',
    company: 'Xmplar Management Solutions',
    location: 'Bangalore, India',
    period: 'Dec 2021 - Jul 2022',
    description: 'Integrated RESTful APIs with JSON handling for smooth backend-UI sync. Designed and tested Flutter UI to boost stability and retention. Delivered full-stack features with React.js, Node.js, and MongoDB. Built SPAs using React Router, Axios, and Tailwind. Deployed to AWS (EC2, S3) via GitHub Actions, optimizing CI/CD and uptime.'
  }, {
    title: 'Instructional Aide',
    company: 'Arizona State University',
    location: 'Tempe, Arizona',
    period: 'Aug 2024 - May 2025',
    description: 'Supported DBMS and security instruction, covering topics like normalization, indexing, and threat modeling. Led labs for 80+ students with real-world examples, guided hands-on work using PostgreSQL, MySQL, Docker, and ERD tools, and graded projects with a focus on performance and security.'
  }];
  return <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work Experience
          </h2>
          <div className="mt-2 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">
            My professional journey and accomplishments
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            {experiences.map((experience, index) => <ExperienceItem key={index} {...experience} active={activeExperience === index} onClick={() => setActiveExperience(index)} />)}
          </div>
          <div className="md:w-1/2 bg-gray-700 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Education</h3>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-lg bg-indigo-900 flex items-center justify-center mr-4 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Masters of Science in Computer Software Engineering
                  </h3>
                  <p className="text-gray-300">Arizona State University</p>
                </div>
              </div>
              <div className="pl-16">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>2024 - 2025</span>
                </div>
                <p className="text-gray-300">
                  Final-semester M.S. student in Computer Software Engineering
                  at ASU (GPA: 3.8), with a focus on secure systems, software
                  architecture, and full-stack development. Preparing for a
                  capstone project centered on real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;