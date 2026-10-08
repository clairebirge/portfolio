export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-300">
          Hi, I&apos;m Claire, a senior at Stanford (class of 2027) studying Computer Science with a concentration in
          Human-Computer Interaction and a minor in English. I&apos;m passionate about building thoughtful, engaging
          digital experiences, and I thrive at the intersection of design, development, and product thinking.
          Whether I&apos;m driving a program across teams, prototyping a new feature, or polishing UI interactions,
          I love turning ideas into impactful products. I&apos;ve worked on everything from the Google Sign-In flow
          to indie games in Godot to data engineering for an African compute startup.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Technical Program Manager Intern</h3>
              <p className="text-gray-600 dark:text-gray-300">Google • June 2026 - September 2026</p>
              <ul className="mt-2 list-disc list-outside ml-5 space-y-1">
                <li>
                  Shipped a user-facing feature end to end for the Google Sign-In flow, integrating Recovery Contacts
                  into sign-in through a five-stage roadmap that increased adoption and improved users&apos; ability to
                  recover secure account access.
                </li>
                <li>
                  Built stakeholder relationships and drove alignment across Engineering, Product, UX, and Data
                  Science partners to resolve dependencies, drive decisions, and manage risks.
                </li>
                <li>
                  Built a custom AI agent that tracked commits, reviews, and milestones to auto-generate daily reports
                  and risk logs, saving the team hours of manual tracking each week.
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Tech Ethics and Policy Fellow / Data Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Stanford Institute for Human-Centered AI • April 2025 - September 2025</p>
              <ul className="mt-2 list-disc list-outside ml-5 space-y-1">
                <li>
                  Built end-to-end Python and SQL data pipelines for DataSpires, a platform for compute resource
                  sharing across Africa, integrating 8+ data sources with automated refresh and cleaning.
                </li>
                <li>Developed dashboards and geospatial visuals for 50+ African countries, surfacing compute, fiber, and energy metrics.</li>
                <li>Implemented Supabase analytics tracking supplier share, user counts, growth, and demographics.</li>
                <li>Authored technical documentation and a long-form report on system architecture and data governance.</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Software Engineering Intern</h3>
              <p className="text-gray-600 dark:text-gray-300">Current Sets • July 2024 - April 2025</p>
              <ul className="mt-2 list-disc list-outside ml-5 space-y-1">
                <li>
                  Developed and shipped full-stack user-facing features from design to implementation to testing,
                  including an in-app Project Management Tool, Help Menu, enhanced Comment Feature, and User Dashboard.
                </li>
                <li>Implemented functionality using TypeScript, Supabase, and REST APIs.</li>
                <li>Improved onboarding KPIs through funnel analysis and rapid iteration.</li>
                <li>Wrote specs, feature docs, and QA guidelines supporting engineering and design teams.</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Product Design and Strategy Intern</h3>
              <p className="text-gray-600 dark:text-gray-300">CO/AI • May 2024 - December 2024</p>
              <ul className="mt-2 list-disc list-outside ml-5 space-y-1">
                <li>Designed prototypes using React, Node, and internal APIs to validate new AI-powered workflows.</li>
                <li>Investigated system-level opportunities using usage data and user research.</li>
                <li>Produced workflow diagrams and internal documentation clarifying system logic.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">BS in Computer Science, Human-Computer Interaction</h3>
              <p className="text-gray-600 dark:text-gray-300">Stanford University • 2023 - 2027 • Minor in English</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
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
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Coordinated and streamlined chapter operations, managing schedules, events, 
                and communications to improve efficiency and member engagement.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Marketing Chair, Stanford Club Lacrosse</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Led marketing efforts to boost team visibility and recruitment through social media campaigns, 
                event promotion, and collaboration with campus organizations.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-medium">Facilitator, Stanford Flip the Script</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Facilitated Flip the Script, a sexual violence prevention workshop, guiding participants through
                discussions and skill-building to help create a safer campus community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 