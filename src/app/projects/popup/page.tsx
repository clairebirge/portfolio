import Image from 'next/image';
import Link from 'next/link';

export default function PopUpProject() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">PopUp - Social Event App</h1>
          <p className="text-xl text-gray-600 mb-6">
            A full-stack MVP that helps users discover and attend nearby events. Led team coordination and prioritized features under tight deadlines.
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              React
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              Supabase
            </span>
          </div>

          {/* Project link */}
          <Link
            href="https://github.com/superyuser/POPUP_FULLSTACK"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Repository
          </Link>
        </div>

        {/* Project image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/popup3.png"
            alt="PopUp Social Event App Screenshot"
            fill
            className="object-cover"
          />
        </div>

        {/* Project details */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Skills Demonstrated</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Product Design</h3>
                <p className="text-gray-600 text-sm">
                  Designed user-centered solutions that address real user needs and pain points in event discovery.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Rapid Prototyping</h3>
                <p className="text-gray-600 text-sm">
                  Quickly built and iterated on prototypes to validate ideas and gather user feedback efficiently.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">User Flow Design</h3>
                <p className="text-gray-600 text-sm">
                  Created intuitive user journeys that guide users seamlessly from discovery to event attendance.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Research</h3>
                <p className="text-gray-600 text-sm">
                  Conducted user research to understand target audience needs and validate product assumptions.
                </p>
              </div>
            </div>
          </div>

          {/* Project description */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
            <div className="prose prose-gray max-w-none">
              <p className="mb-4">
                PopUp was born from the challenge of helping people discover and connect through local events. 
                The project involved scoping and building a complete MVP from concept to deployment.
              </p>
              <p className="mb-4">
                As the project lead, I coordinated team efforts, managed timelines, and prioritized features 
                to deliver a functional product within tight constraints. The app leverages React for the 
                frontend and Supabase for backend services, creating a scalable foundation for future growth.
              </p>
              <p className="mb-4">
                The development process emphasized rapid iteration and user feedback, allowing us to quickly 
                validate assumptions and refine the product based on real user needs and behaviors.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Event discovery and filtering</li>
                <li>User authentication and profiles</li>
                <li>Live events dashboard</li>
                <li>Location-based event recommendations</li>
                <li>Event albums and feed</li>
              </ul>
              <h3 className="text-lg font-semibold mt-6 mb-3">Technical Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>React hooks and modern state management</li>
                <li>Geolocation services integration</li>
                <li>Optimized performance and loading times</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documentation section - centered at bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-4">
              You can read the full project documentation {' '}
              <a 
                href="https://docs.google.com/document/d/1BttqOzv3XjaKuNm9h0U6mBUPTKGuGDt-zjMQ7KDqlCY/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 underline font-medium"
              >
                here
              </a>, which includes design goals, a competitor analysis, a walkthrough of the features and pages, an in-depth look
              at our tech stack, user analysis/iteration, and design reflections.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
} 