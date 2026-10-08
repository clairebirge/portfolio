import Image from 'next/image';
import Link from 'next/link';

export default function SparkBookProject() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">SparkBook - Spark Your Creativity</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            A digital notebook that lets artists store multimedia sources of inspiration and smartly organizes them
            into the categories they choose.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              React Native
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              Expo
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              Supabase
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              Spotify API
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-medium text-gray-900 dark:text-gray-100">My role:</span> App Developer &amp; Product Lead. I wore a lot
            of hats, building the app while driving many of the product decisions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <span className="font-medium text-gray-900 dark:text-gray-100">Team:</span> Claire Birge, Elijah Anderson, Luiza Ribeiro,
            Mikela Coseteng
          </p>

          {/* Project link */}
          <Link
            href="https://github.com/ea2187/sparkbook"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Repository
          </Link>
        </div>

        {/* Project image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/sparkbook.svg"
            alt="SparkBook App Screenshot"
            fill
            className="object-cover"
          />
        </div>

        {/* Problem / solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 dark:bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Artists struggle to quickly store their many sources of inspiration in one centralized, organized place,
              which makes it harder to come back to them when they sit down to create.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A mobile app where artists capture photos, notes, audio, files, and music into &quot;Sparklettes,&quot; share
              inspiration with a community, and organize their boards with AI-assisted layouts while staying in control.
            </p>
          </div>
        </div>

        {/* Project details */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Skills Demonstrated</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-white/10 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Product Management</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Drove key product decisions, translating research findings and test results into feature priorities
                  and design changes.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-white/10 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Needfinding &amp; User Research</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Interviewed five artists across media and experience levels, then synthesized findings with empathy
                  maps, POVs, and 30+ How Might We statements.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-white/10 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Experience Prototyping</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Designed three experiments to test our core assumptions before building anything high-fidelity.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-white/10 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Usability Testing &amp; Iteration</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ran think-aloud tests on low- and medium-fidelity prototypes and addressed 96 heuristic evaluation
                  violations, prioritizing severity 3-4 issues.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-white/10 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Mobile App Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Built a working React Native app with real authentication, persistent data, and a Spotify
                  integration that testers could run on their own phones.
                </p>
              </div>
            </div>
          </div>

          {/* Project description */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
            <div className="prose prose-gray max-w-none">
              <p className="mb-4">
                SparkBook came out of a studio on intelligent creative tools: building AI that acts as a collaborator
                rather than a replacement. In our interviews, artists said again and again that art should be
                fundamentally human, but they were open to AI handling the mundane parts, like organization.
              </p>
              <p className="mb-4">
                The artists we spoke with found inspiration everywhere (music, walks, places, people) but scattered it
                across camera rolls, notes apps, and Pinterest boards, and often couldn&apos;t find an idea when they
                needed it. SparkBook gives them one flexible place to capture it all, with AI that suggests organization
                but never takes over creative decisions.
              </p>
              <p className="mb-4">
                On a team of four, I wore a lot of hats. As an app developer I helped build the React Native app end to
                end, and I also drove many of the product decisions, from which features to prioritize to how we
                responded to usability findings between prototype rounds.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Quick Add for photos, notes, voice memos, files, and music</li>
                <li>Sparklette boards for organizing inspiration by project</li>
                <li>Community feed to share and save others&apos; sparks, with attribution</li>
                <li>Organize tool with Grid, Group by Type, and Smart Spacing layouts</li>
                <li>Undo/redo and lightweight &quot;undo&quot; toasts instead of heavy confirmation modals</li>
              </ul>
              <h3 className="text-lg font-semibold mt-6 mb-3">Technical Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>React Native + Expo Go for fast iteration and cross-platform testing</li>
                <li>Supabase authentication and database for real accounts</li>
                <li>Spotify API search-and-attach flow for adding songs</li>
                <li>Expo Router stack navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Design Process</h2>
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Needfinding</h3>
              <p>
                We interviewed five artists, from a 20-year-old film student to a VR and animation artist with 25 years
                of experience, in Palo Alto, San Francisco, and over Zoom. Three themes came out of the interviews:
                artists find inspiration across many media, they struggle to organize it, and they see art as a way
                to build human connection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Experience Prototypes</h3>
              <p className="mb-4">We tested the assumptions behind our top three solutions:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Collaborative creation:</span> after a group discussion
                  about inspiring music, participants felt freer and more creative. The assumption was half proven,
                  since everyone preferred different music.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Documenting inspiration:</span> an artist relied heavily
                  on references but spent a long time digging through untagged photos for a starting image.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Card sorting:</span> sorting by medium helped, but
                  participants found images fastest using their own categories, so we gave users control over how
                  their boards are organized.
                </li>
              </ul>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-white/20 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-gray-100">
                    <tr>
                      <th className="text-left p-3">Card sort round</th>
                      <th className="text-right p-3">Avg. time to find an image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200 dark:border-white/20">
                      <td className="p-3">Random</td>
                      <td className="text-right p-3">3.83s</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-white/20">
                      <td className="p-3">Custom categories</td>
                      <td className="text-right p-3 font-semibold text-purple-700">1.63s</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-white/20">
                      <td className="p-3">By medium</td>
                      <td className="text-right p-3">2.30s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Iteration</h3>
              <p>
                We compared smartwatch, AR, and mobile concepts and chose mobile because accessibility mattered more to
                our users than immersion. Paper prototype testing showed that users couldn&apos;t find the organize
                button and expected to share from the Community tab. We fixed both in our Figma medium-fi prototype,
                then used a heuristic evaluation to tighten consistency (&quot;Add&quot; vs. &quot;Next&quot; vs.
                &quot;Save&quot;), add undo and delete, and make editable fields clear.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Wizard of Oz &amp; Hard-Coded Behaviors</h3>
              <p>
                To test how artists want to interact with &quot;smart&quot; tools before building an ML backend, we
                built the full UX for AI organize and Quick Add suggestions, backed by rule-based layouts and scripted
                suggestions. We also seeded the community feed and demo accounts so testers always saw rich content.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Values in Design</h3>
              <p>
                Three values guided every decision: <span className="font-medium text-gray-900 dark:text-gray-100">flexibility</span>{' '}
                (any medium, any organization), <span className="font-medium text-gray-900 dark:text-gray-100">community</span> (sharing
                with proper attribution), and <span className="font-medium text-gray-900 dark:text-gray-100">spontaneity</span> (capturing
                ideas the moment they strike). We hand-drew most of the app&apos;s icons to signal that SparkBook is a
                space for human artists.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Next Steps</h3>
              <p>
                We&apos;d like to build out the AI organize tool so artists can type exactly how they want their
                inspiration organized, and explore translating media between forms, like turning a song into text.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
