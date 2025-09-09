import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioWebsiteProject() {
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
          <h1 className="text-4xl font-bold mb-4">DataSpires Market Intelligence Platform</h1>
          <p className="text-xl text-gray-600 mb-6">
            A comprehensive market and data analytics platform enabling infrastructure investments across Africa's growing tech ecosystem
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300">
                Supabase
            </span>
          </div>

          {/* Project link */}
          <Link
            href="https://dataspires.com"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Company Website
          </Link>
        </div>

        {/* Project image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="public/mages/market-analytics.jpg"
            alt="Portfolio Website Screenshot"
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
                <h3 className="font-medium text-gray-900 mb-2">Fullstack Development</h3>
                <p className="text-gray-600 text-sm">
                  Built a responsive, modern web application using React and Next.js with TypeScript for type safety.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">API Integration and Development</h3>
                <p className="text-gray-600 text-sm">
                Integrated multiple data sources (energy API, AfterFibre, Supabase)
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Data Engineering</h3>
                <p className="text-gray-600 text-sm">
                  Designed and implemented a robust data pipeline for ingesting and processing data relating to product performance and market trends.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Product Strategy and Management</h3>
                <p className="text-gray-600 text-sm">
                  Owned the strategy and development of this platform, a major differentiator for the company
                </p>
              </div>
            </div>
          </div>

          {/* Project description */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
            <div className="prose prose-gray max-w-none">
              <p className="mb-4">
              <strong> Challenge:</strong> Africa's tech infrastructure market faces a 300% demand-supply gap with a 1200 MW shortage, 
                yet stakeholders lack access to standardized, transparent analytics for informed decision-making in cloud infrastructure investments.   
              </p>
              <p className="mb-4">
              <strong>My Solution:</strong> I led the development of a comprehensive market intelligence platform that provides 
                policy insights, infrastructure mapping, energy analytics, and market data visualization to empower stakeholders 
                making multi-million dollar investment decisions.
              </p>
              <p className="mb-4">
              <strong>Business Impact:</strong> The platform serves as a key differentiator for DataSpires, enabling NGOs, 
                investors, and tech companies to make data-driven decisions that accelerate Africa's digital transformation.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Responsive design for all screen sizes</li>
                <li>Fast loading times and SEO optimization</li>
                <li>Clean, modern UI with smooth animations</li>
                <li>Project showcase with detailed case studies</li>
                <li>Contact form and professional presentation</li>
                <li>Dark/light mode support</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-3">Technical Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Next.js App Router for modern React development</li>
                <li>TypeScript for enhanced code quality and maintainability</li>
                <li>Tailwind CSS for utility-first styling</li>
                <li>Optimized images and assets for performance</li>
                <li>GitHub integration with automatic deployments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documentation section - centered at bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-4">
              The complete documentation for this project is available {' '}
              <a 
                href="https://docs.google.com/document/d/1pMn4jlEd-38PWbIc7oIzuZ8z0nNrAz1xPQ1knP6wAB8/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 underline font-medium"
              >
                here
              </a>, for a more thorough breakdown of the development process and technologies used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
