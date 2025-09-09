import Image from 'next/image';
import Link from 'next/link';

export default function BedbugsBiteProject() {
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
          <h1 className="text-4xl font-bold mb-4">Don't Let the Bedbugs Bite</h1>
          <p className="text-xl text-gray-600 mb-6">
            A fun and nostalgic game developed on Godot, featuring engaging gameplay mechanics and charming digital art.
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              Godot
            </span>
          </div>

          {/* Project link */}
          <Link
            href="https://lucigon.itch.io/dont-let-the-bed-bugs-bite"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Play the Game
          </Link>
        </div>

        {/* Project image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/ladybug.png"
            alt="Don't Let the Bedbugs Bite Game Screenshot"
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
                <h3 className="font-medium text-gray-900 mb-2">Gameplay Programming</h3>
                <p className="text-gray-600 text-sm">
                  Developed core game mechanics, player controls, and interactive elements using Godot's scripting system.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Iteration</h3>
                <p className="text-gray-600 text-sm">
                  Continuously refined gameplay based on testing and feedback to create an engaging user experience.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Project Management</h3>
                <p className="text-gray-600 text-sm">
                  Planned and executed the game development process from concept to completion.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Digital Art</h3>
                <p className="text-gray-600 text-sm">
                  Created original artwork and visual assets for the game's characters and environment.
                </p>
              </div>
            </div>
          </div>

          {/* Project description */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
            <div className="prose prose-gray max-w-none">
              <p className="mb-4">
                Created with a team, "Don't Let the Bedbugs Bite" is a charming game that captures the nostalgic feeling of being told a bedtime story and 
                classic arcade games 
                while bringing fresh, modern gameplay elements to the table.
              </p>
              <p className="mb-4">
                Built entirely in Godot, this project showcases my ability to work with game engines and create 
                engaging interactive experiences. The game features intuitive controls, progressive difficulty, 
                and original assets.
              </p>
              <p className="mb-4">
              I helped design all of the levels and develop the storyline, and took a lead on
              user testing, feedback, and implementing changes through each iteration. We each took the lead on one level, in the game
              mine being final scene, where I implemented combat mechanics for a "final battle." 
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Intuitive touch/click controls</li>
                <li>Progressive difficulty system</li>
                <li>Original digital artwork</li>
                <li>Responsive gameplay mechanics</li>
                <li>Cross-platform compatibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documentation section - centered at bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-4">
              I also completed a thorough documentation writeup for our group, which showcases the entire design process. 
              You can read the full project documentation, including our artist's statement, 
              game systems analysis, and development process on the{' '}
              <a 
                href="https://mechanicsofmagic.com/2025/06/07/project-2-dont-let-the-bedbugs-bite-group-10/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 underline font-medium"
              >
                Stanford HCI Game Design Blog
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 