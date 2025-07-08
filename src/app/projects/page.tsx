import Image from 'next/image';
import Link from 'next/link';

const project = [
  {
    id: 1,
    title: "Don't Let the Bedbugs Bite (Game)",
    description: 'A fun and nostalgic game developed on Godot.',
    image: '/images/ladybug.png',
    skills: ['Gameplay Programming', 'Iteration', 'Project Management', 'Digital Art'],
    builtWith: ['Godot'],
    link: '/projects/bedbugs-bite',
  },
  {
    id: 2,
    title: 'PopUp (Social Event App)',
    description: 'Scoped and prototyped a full-stack MVP to help users discover and attend nearby events. Led team coordination and prioritized features under tight deadlines.',
    image: '/images/popup3.PNG',
    skills: [
      'Product Design',
      'Rapid Prototyping',
      'User Flow Design',
      'Research'
    ],
    builtWith: ['React', 'Supabase'],
    link: '/projects/popup',
  },
];


export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map((projectItem) => (
          <div key={projectItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={projectItem.image}
                alt={projectItem.title}
                fill
                className="object-cover"
              />
              {/* Tech stack bubbles overlaid on image */}
              {projectItem.builtWith && (
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {projectItem.builtWith.map((tool: string) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-purple-500 text-white rounded-full text-xs font-semibold shadow-lg border border-purple-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{projectItem.title}</h3>
              <p className="text-gray-600 mb-4">{projectItem.description}</p>
              
              {projectItem.skills && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectItem.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href={projectItem.link}
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 