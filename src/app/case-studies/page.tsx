import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'Digital Transformation for Enterprise Client',
    summary: 'A comprehensive digital transformation project that modernized legacy systems and improved operational efficiency by 60%.',
    challenge: 'The client was struggling with outdated systems that were causing delays and inefficiencies in their daily operations.',
    solution: 'Implemented a modern microservices architecture using cutting-edge technologies while ensuring minimal disruption to existing workflows.',
    impact: ['60% improvement in operational efficiency', 'Reduced system downtime by 85%', '40% cost reduction in maintenance'],
    duration: '8 months',
    role: 'Lead Developer & Solution Architect',
    technologies: ['Next.js', 'Node.js', 'Docker', 'Kubernetes', 'AWS'],
    image: '/images/digital-transformation.jpg',
  },
  {
    id: 2,
    title: 'UX Redesign for Healthcare Platform',
    summary: 'Reimagined the user experience of a healthcare platform serving over 100,000 patients, resulting in a 45% increase in user satisfaction.',
    challenge: 'Users found the existing platform difficult to navigate, leading to poor engagement and frequent support requests.',
    solution: 'Conducted extensive user research and implemented a human-centered design approach to create an intuitive and accessible interface.',
    impact: ['45% increase in user satisfaction', '30% reduction in support tickets', '25% increase in daily active users'],
    duration: '6 months',
    role: 'UX Lead & Frontend Developer',
    technologies: ['React', 'TypeScript', 'Figma', 'Material-UI', 'Firebase'],
    image: '/images/healthcare-ux.jpg',
  },
];

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Case Studies</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Detailed analyses of selected projects, highlighting the challenges, solutions, and measurable impacts achieved.
      </p>

      <div className="space-y-16">
        {caseStudies.map((study) => (
          <article key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] md:h-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                <p className="text-gray-600 mb-6">{study.summary}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">The Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">The Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Impact</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {study.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900">Duration</h4>
                      <p className="text-gray-600">{study.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Role</h4>
                      <p className="text-gray-600">{study.role}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 