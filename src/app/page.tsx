'use client';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative min-h-[80vh] flex flex-col items-start justify-center pt-10 bg-gradient-to-r from-purple-50 to-violet-50"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm <span className="text-purple-600">Claire Birge</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            A designer and developer with a passion for creating and managing digital products and experiences
          </motion.p>
          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6 mt-4"
          >
            {/* GitHub */}
            <a
              href="https://github.com/clairebirge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-purple-600 transition-colors text-3xl"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/clairebirge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-purple-600 transition-colors text-3xl"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
              </svg>
            </a>
            {/* Resume */}
            <a
              href="https://docs.google.com/document/d/1DTESJDJga4NiYB2AtqwuLf_rWfGNBaZx/edit?usp=sharing&ouid=104961414142468374347&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="text-gray-500 hover:text-purple-600 transition-colors text-3xl"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>



      {/* Featured Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-6"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="text-3xl font-bold mb-12 flex justify-center items-center text-center w-full"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-purple-400"
            >
              {i === 0 && (
                <>
                  <div className="relative h-48">
                    <Image
                      src="/images/ladybug.png"
                      alt="Don't Let the Bedbugs Bite Game"
                      fill
                      className="object-cover"
                    />
                    {/* Tech stack bubbles */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-300">
                        Godot
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Don't Let the Bedbugs Bite</h3>
                    <p className="text-gray-600 mb-4">
                      A nostalgic game developed on Godot that captures the feeling of being told a bedtime story, featuring engaging gameplay mechanics and original artwork.
                    </p>
                    <Link
                      href="/projects/bedbugs-bite"
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </>
              )}
              {i === 1 && (
                <>
                  <div className="relative h-48">
                    <Image
                      src="/images/popup3.png"
                      alt="PopUp Social Event App"
                      fill
                      className="object-cover"
                    />
                    {/* Tech stack bubbles */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-300">
                        React
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-300">
                        Supabase
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">PopUp - Social Event App</h3>
                    <p className="text-gray-600 mb-4">
                      A full-stack MVP that helps users discover and attend nearby events. Led team coordination and prioritized features under tight deadlines.
                    </p>
                    <Link
                      href="/projects/popup"
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </>
              )}
              {i === 2 && (
                <>
                  <div className="relative h-48">
                    <Image
                      src="/images/dataspires.jpg"
                      alt="DataSpires Analytics"
                      fill
                      className="object-cover"
                    />
                    {/* Tech stack bubbles */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-300">
                        Supabase
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-300">
                        JavaScript
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-300">
                        SQL
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">DataSpires - Data Analytics Platform</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive market and data analytics platform enabling infrastructure investments across Africa's growing tech ecosystem.
                    </p>
                    <Link
                      href="/projects/dataspires"
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </>
              )}

            </motion.div>
          ))}
        </div>
        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              'JavaScript',
              'React',
              'Java',
              'C++',
              'Node.js',
              'TypeScript',
              'Next.js',
              'Supabase',
              'SQL',
              'Tailwind CSS',
              'Python',
              'Git',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
