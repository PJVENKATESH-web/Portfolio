import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="text-2xl font-bold">PJV</div>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* About */}
      <section id="about" className="p-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-lg">
          I am a Frontend Web Developer with 3.5 years of experience. I specialize in building responsive and interactive web applications using HTML, CSS, Tailwind, JavaScript, React, and Git. I have worked extensively on eCommerce websites.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="p-6 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="space-y-4">
          {[
            { label: "HTML", value: 80 },
            { label: "CSS, Tailwind", value: 75 },
            { label: "JavaScript", value: 70 },
            { label: "React", value: 70 },
            { label: "Git", value: 80 },
          ].map((skill) => (
            <div key={skill.label}>
              <div className="mb-1 font-semibold">{skill.label}</div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="p-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <p className="text-lg">
          I have hands-on experience with modern frontend tools and frameworks, and have been actively involved in building scalable and user-friendly eCommerce websites.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-6 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-lg">Project details can be added here.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="p-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <div className="space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="mt-2">© 2025 PJV. All rights reserved.</p>
      </footer>
    </div>
  );
}
