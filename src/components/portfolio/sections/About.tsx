import React from "react";
import { BookOpenIcon, BriefcaseIcon, CodeIcon, HeartIcon } from "lucide-react";
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="mt-2 w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-100 rounded-xl"></div>
              <img
                src="src/assets/img/profile.jpeg"
                alt="About Me"
                className="relative z-10 rounded-xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              I'm Kruthi Hosamane, a passionate Software Engineer
            </h3>
            <p className="text-gray-600 mb-6">
              With 2 years of professional experience, I specialize in building
              modern web applications using React, TypeScript, and Node.js. I'm
              passionate about creating clean, efficient, and scalable code that
              solves real-world problems.
            </p>
            <p className="text-gray-600 mb-8">
              I hold a Master’s degree in Computer Software Engineering from
              Arizona State University and have worked across startups and
              enterprise environments, contributing to high-impact projects in
              Spring Boot, PostgreSQL, MongoDB, AWS, and Flutter. I thrive in
              fast-paced teams and continuously explore modern tools and best
              practices to stay ahead in the evolving tech landscape.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <BriefcaseIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Experience</h4>
                  <p className="text-gray-600 text-sm">2+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <CodeIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Projects</h4>
                  <p className="text-gray-600 text-sm">10+ Completed</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <BookOpenIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Education</h4>
                  <p className="text-gray-600 text-sm">
                    M.S. Computer Software Engineering
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <HeartIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Interests</h4>
                  <p className="text-gray-600 text-sm">
                    Open Source, AI, Music, Coding
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/Kruthi Hosamane.pdf"
                download="Kruthi_Hosamane_resume.pdf"
                className="inline-flex px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
