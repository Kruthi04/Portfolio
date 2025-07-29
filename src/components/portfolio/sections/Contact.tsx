import React, { useState, useEffect } from "react";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  UserIcon,
  MessageSquareIcon,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  // Load EmailJS on component mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        // Initialize EmailJS with your public key from environment variables
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey && publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
          window.emailjs.init(publicKey);
        } else {
          console.warn(
            "EmailJS Public Key not configured. Please update your .env file."
          );
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector(
        'script[src*="emailjs"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
    // Clear submit error when user starts typing
    if (submitError) {
      setSubmitError("");
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Using EmailJS to send email
      if (window.emailjs) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "lhosaman@gmail.com", // Your email
        };

        await window.emailjs.send(
          // Get Service ID from environment variables
          import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
          // Get Template ID from environment variables
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            "YOUR_EMAILJS_TEMPLATE_ID",
          templateParams
        );

        // Success
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("EmailJS not loaded");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
      setSubmitError(
        "Failed to send message. Please try again or contact me directly at lhosaman@gmail.com"
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
          linear-gradient(45deg, transparent 40%, rgba(99, 102, 241, 0.02) 50%, transparent 60%)
        `,
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative flex-1 flex flex-col">
        <div className="flex-1 py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Let's Build Something
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  {" "}
                  Amazing Together
                </span>
              </h2>
              <div className="mt-2 w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Whether it's a new project,
                collaboration opportunity, or just a friendly hello - I'd love
                to hear from you!
                <span className="block mt-1 text-indigo-700 font-medium">
                  Let's create something extraordinary together.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Contact Information */}
              <div className="order-2 lg:order-1 flex">
                <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white p-5 md:p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl w-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                    <div className="w-6 h-1 bg-white rounded-full mr-3"></div>
                    Let's Connect
                  </h3>
                  <p className="mb-6 text-base leading-relaxed opacity-90">
                    I'm always excited to hear about new opportunities and
                    collaborations. Whether you have a project in mind or just
                    want to say hello, I'd love to hear from you!
                  </p>

                  <div className="space-y-5 flex-1">
                    <div className="flex items-start group">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-white/30 transition-all duration-300">
                        <MailIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:lhosaman@gmail.com"
                          className="text-sm hover:text-indigo-200 transition-colors break-all group-hover:underline"
                        >
                          lhosaman@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-white/30 transition-all duration-300">
                        <MapPinIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base font-semibold mb-1">
                          Location
                        </h4>
                        <p className="text-sm opacity-90">
                          San Francisco, California
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-base font-semibold mb-4 flex items-center">
                      <div className="w-5 h-0.5 bg-white rounded-full mr-3"></div>
                      Connect with me
                    </h4>
                    <div className="flex space-x-3">
                      <a
                        href="https://linkedin.com/in/lakshmi-kruthi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/Kruthi04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                        aria-label="GitHub"
                      >
                        <svg
                          className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="order-1 lg:order-2 flex">
                <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-full flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-5 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-2"></div>
                    Send Me a Message
                  </h3>

                  {isSubmitted ? (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 p-3 rounded-lg flex items-start border border-green-200 flex-1">
                      <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="font-semibold text-sm">
                          Thank you for your message!
                        </p>
                        <p className="text-xs mt-1 opacity-80">
                          I'll get back to you within 24 hours. Looking forward
                          to our conversation!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-3 flex-1 flex flex-col"
                    >
                      {submitError && (
                        <div className="bg-gradient-to-r from-red-50 to-pink-50 text-red-800 p-3 rounded-lg flex items-start border border-red-200">
                          <AlertCircleIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-red-600" />
                          <div>
                            <p className="font-medium text-xs">
                              Error sending message
                            </p>
                            <p className="text-xs mt-1 opacity-80">
                              {submitError}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="group">
                          <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-medium mb-2 flex items-center"
                          >
                            <UserIcon className="h-4 w-4 mr-2 text-indigo-600" />
                            Your Name{" "}
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-2.5 py-2 border-2 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 bg-white/50 backdrop-blur-sm group-hover:border-indigo-300 ${
                              formErrors.name
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-gray-200"
                            }`}
                            placeholder="Enter your full name"
                          />
                          {formErrors.name && (
                            <p className="mt-1 text-xs text-red-600 flex items-center">
                              <AlertCircleIcon className="h-2 w-2 mr-1" />
                              {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div className="group">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-medium mb-2 flex items-center"
                          >
                            <MailIcon className="h-4 w-4 mr-2 text-indigo-600" />
                            Your Email{" "}
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-2.5 py-2 border-2 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 bg-white/50 backdrop-blur-sm group-hover:border-indigo-300 ${
                              formErrors.email
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-gray-200"
                            }`}
                            placeholder="Enter your email address"
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-xs text-red-600 flex items-center">
                              <AlertCircleIcon className="h-2 w-2 mr-1" />
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="group">
                        <label
                          htmlFor="subject"
                          className="block text-gray-700 text-sm font-semibold mb-2 flex items-center"
                        >
                          <MessageSquareIcon className="h-4 w-4 mr-2 text-indigo-600" />
                          Subject <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-2.5 py-2 border-2 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 bg-white/50 backdrop-blur-sm group-hover:border-indigo-300 ${
                            formErrors.subject
                              ? "border-red-500 focus:ring-red-500/20"
                              : "border-gray-200"
                          }`}
                          placeholder="What's this about?"
                        />
                        {formErrors.subject && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircleIcon className="h-3 w-3 mr-1" />
                            {formErrors.subject}
                          </p>
                        )}
                      </div>

                      <div className="group flex-1 flex flex-col">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 text-sm font-semibold mb-2 flex items-center"
                        >
                          <MessageSquareIcon className="h-4 w-4 mr-2 text-indigo-600" />
                          Message <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full flex-1 px-2.5 py-2 border-2 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 resize-none text-gray-900 bg-white/50 backdrop-blur-sm group-hover:border-indigo-300 ${
                            formErrors.message
                              ? "border-red-500 focus:ring-red-500/20"
                              : "border-gray-200"
                          }`}
                          placeholder="Tell me about your project or inquiry..."
                        />
                        {formErrors.message && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircleIcon className="h-3 w-3 mr-1" />
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-semibold text-sm hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-3 w-3 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <SendIcon className="ml-2 h-3 w-3" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Kruthi Hosamane. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Designed and built with ❤️ by Kruthi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
