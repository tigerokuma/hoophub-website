import React from 'react';
import { Github, Youtube } from 'lucide-react';

const TeamMember = ({ name, role }) => (
    <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
);

const VideoSection = ({ title, link }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="aspect-video w-full">
        <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${link.split('v=')[1]}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
      </div>
    </div>
);

const LandingPage = () => {
  const teamMembers = [
    { name: "Paul Atwal", role: "Developer" },
    { name: "Kristina Tretiakova", role: "Developer" },
    { name: "Jeffrey Loverock", role: "Developer" },
    { name: "Taiga Okuma", role: "Developer" }
  ];

  const completedItems = [
    "User Authentication System",
    "Core Basketball Stats Tracking",
    "Team Management Features",
    "Performance Analytics Dashboard",
    "Real-time Game Updates",
    "Player Profile System"
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-4">HoopHub</h1>
            <p className="text-xl text-gray-300 mb-8">Group 18, CMPT 362, Fall 2024</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>

          {/* Project Videos */}
          <section className="mb-16 space-y-12">
            <VideoSection
                title="Project Pitch"
                link="https://www.youtube.com/watch?v=EnmO5jZzwSI"
            />

            <VideoSection
                title="Show and Tell 1"
                link="https://www.youtube.com/watch?v=htNIEuc_xWs"
            />
          </section>

          {/* Project Progress */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Project Progress</h2>
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Completed Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {completedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
  );
};

export default LandingPage;