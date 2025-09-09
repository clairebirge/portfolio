export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="text-gray-600">
          Hi, I'm Claire — a rising junior at Stanford studying Computer Science with a passion for building thoughtful, 
          engaging digital experiences. I thrive at the intersection of design, development, and product thinking. 
          Whether I'm prototyping a new feature, managing a sprint board, or polishing UI interactions, 
          I love turning ideas into impactful products. I've worked on everything from indie games in Godot 
          to data engineering solutions for an African compute startup.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Data Engineering Intern</h3>
              <p className="text-gray-600">Stanford Center for Human-Centered AI • June 2025 - Present</p>
              <p className="mt-2">
              Developing back-end infrastructure and data analytics solutions for 
              DataSpires, a pioneering platform revolutionizing compute resource sharing across Africa. 
              Contributing to the mission to democratize access to computing power and bridge the digital 
              divide by building scalable, secure data infrastructure that connects users to AI resources.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Software Engineering Intern</h3>
              <p className="text-gray-600">Current Sets • July 2024 - April 2025</p>
              <p className="mt-2">
              Developed software features focused on user-centered design and UI/UX improvements, 
              including an in-app Project Management Tool, Help Menu, enhanced Comment Feature, 
              and User Dashboard. Managed projects end-to-end by identifying product gaps, 
              proposing software solutions, and conducting user interviews to gather feedback 
              and guide design decisions
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Bachelor's in Computer Science</h3>
              <p className="text-gray-600">Stanford University • 2023 - 2027</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Music + Guitar</li>
            <li>Running</li>
            <li>Pilates</li>
            <li>Traveling</li>
            <li>Creative Writing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Leadership & Involvement</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Vice President of Operations, Alpha Phi</h3>
              <p className="mt-2 text-gray-600">
                Coordinated and streamlined chapter operations, managing schedules, events, 
                and communications to improve efficiency and member engagement.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Marketing Chair, Stanford Club Lacrosse</h3>
              <p className="mt-2 text-gray-600">
                Led marketing efforts to boost team visibility and recruitment through social media campaigns, 
                event promotion, and collaboration with campus organizations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 