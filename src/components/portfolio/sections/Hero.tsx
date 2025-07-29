import React, { useEffect, useState } from "react";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import profilePhoto from "../../../assets/img/photo1.jpeg";

const Hero = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer";
  const [showCursor, setShowCursor] = useState(true);
  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Decorative SVG Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        {/* Abstract Shapes */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
        </svg>
        <svg width="0" height="0">
          <defs>
            <pattern
              id="grid-pattern"
              patternUnits="userSpaceOnUse"
              width="10"
              height="10"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
        </svg>
        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-600 mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-blue-600 mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-purple-600 mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        {/* Geometric SVG Elements */}
        <svg
          className="absolute top-10 right-10 w-40 h-40 text-indigo-500 opacity-20 animate-pulse"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M 0 100 C 0 44.772 44.772 0 100 0 C 155.228 0 200 44.772 200 100 C 200 155.228 155.228 200 100 200 C 44.772 200 0 155.228 0 100 Z"
            stroke="currentColor"
            strokeWidth="6"
          />
          <path
            d="M 40 100 C 40 67.909 67.909 40 100 40 C 132.091 40 160 67.909 160 100 C 160 132.091 132.091 160 100 160 C 67.909 160 40 132.091 40 100 Z"
            stroke="currentColor"
            strokeWidth="6"
          />
          <path
            d="M 80 100 C 80 89.091 89.091 80 100 80 C 110.909 80 120 89.091 120 100 C 120 110.909 110.909 120 100 120 C 89.091 120 80 110.909 80 100 Z"
            stroke="currentColor"
            strokeWidth="6"
          />
        </svg>
        <svg
          className="absolute bottom-10 left-10 w-40 h-40 text-indigo-500 opacity-20 animate-pulse animation-delay-2000"
          viewBox="0 0 200 200"
          fill="none"
        >
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            stroke="currentColor"
            strokeWidth="6"
          />
          <rect
            x="40"
            y="40"
            width="120"
            height="120"
            stroke="currentColor"
            strokeWidth="6"
          />
          <rect
            x="80"
            y="80"
            width="40"
            height="40"
            stroke="currentColor"
            strokeWidth="6"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative inline-block">
            {/* Profile Image with SVG Decorations */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 blur-xl animate-pulse"></div>
            {/* Orbit Rings */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="1"
                strokeDasharray="10 5"
              />
            </svg>
            <svg
              className="absolute inset-0 w-full h-full animate-reverse-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle
                cx="100"
                cy="100"
                r="60"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="1"
                strokeDasharray="5 5"
              />
            </svg>
            {/* Decorative Dots */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
            >
              <circle
                cx="40"
                cy="40"
                r="3"
                fill="#818cf8"
                className="animate-ping"
                style={{
                  animationDelay: "0s",
                }}
              />
              <circle
                cx="160"
                cy="40"
                r="3"
                fill="#818cf8"
                className="animate-ping"
                style={{
                  animationDelay: "0.5s",
                }}
              />
              <circle
                cx="40"
                cy="160"
                r="3"
                fill="#818cf8"
                className="animate-ping"
                style={{
                  animationDelay: "1s",
                }}
              />
              <circle
                cx="160"
                cy="160"
                r="3"
                fill="#818cf8"
                className="animate-ping"
                style={{
                  animationDelay: "1.5s",
                }}
              />
            </svg>
            <img
              src="/src/assets/img/IMG_PRF_CLR.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-800 shadow-lg relative z-10"
            />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Kruthi Hosamane
            </h1>
            <div className="h-8 mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-gray-300">
                {typedText}
                <span
                  className={`${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity ml-1 text-indigo-400`}
                >
                  |
                </span>
              </h3>
            </div>
            {/* SVG Underline */}
            <svg
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-3 text-indigo-500 opacity-70"
              viewBox="0 0 200 8"
            >
              <path
                d="M0,5 C50,0 150,0 200,5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-gray-300 max-w-2xl mb-8 text-lg mt-4 relative">
            I build exceptional digital experiences with a focus on performance
            and clean code. Passionate about modern technologies—and always
            fueled by coffee. ☕
          </p>
          <div className="flex space-x-4 mb-12">
            <a
              href="https://github.com/Kruthi04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-indigo-400 hover:bg-gray-700 transition-all relative group"
            >
              <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <GithubIcon className="h-6 w-6 relative z-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshmi-kruthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-indigo-400 hover:bg-gray-700 transition-all relative group"
            >
              <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <LinkedinIcon className="h-6 w-6 relative z-10" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="url(#btn-pattern)"
                    className="opacity-0 group-hover:opacity-20 transition-opacity"
                  />
                </svg>
              </div>
              <span className="relative z-10">Contact Me</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="btn-pattern"
                      patternUnits="userSpaceOnUse"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="url(#btn-pattern)"
                  />
                </svg>
              </div>
              <span className="relative z-10">View Projects</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 bg-gray-800 rounded-full shadow-md text-indigo-400 hover:text-indigo-300 transition-colors relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <ArrowDownIcon className="h-6 w-6 relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
