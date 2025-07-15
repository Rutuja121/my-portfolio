import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "Meta Ads", level: 90 },
        { name: "Google Ads", level: 88 },
        { name: "DV360", level: 85 },
        { name: "Google Analytics", level: 87 },
        { name: "MS Excel", level: 92 }
      ]
    },
    {
      title: "Marketing Platforms",
      skills: [
        { name: "YouTube Ads", level: 85 },
        { name: "Campaign Manager 360", level: 82 },
        { name: "Power BI", level: 80 },
        { name: "CRM Systems", level: 78 },
        { name: "PowerPoint", level: 90 }
      ]
    },
    {
      title: "Content & Strategy",
      skills: [
        { name: "Copywriting", level: 88 },
        { name: "SEO", level: 85 },
        { name: "Social Media Strategies", level: 90 },
        { name: "Community Management", level: 90 },
        { name: "Content Creation", level: 85 }
      ]
    },
    {
      title: "Project Skills",
      skills: [
        { name: "Analytical Skills", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Structured Work", level: 90 },
        { name: "Detail-oriented", level: 95 }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "English", level: 100 },
        { name: "Hindi", level: 100 },
        { name: "Marathi", level: 100 },
        { name: "German", level: 60 },
        { name: "Business Communication", level: 90 }
      ]
    },
    {
      title: "Certifications",
      skills: [
        { name: "DV360 Certification", level: 100 },
        { name: "Campaign Manager 360", level: 100 },
        { name: "Inside LVMH", level: 100 },
        { name: "L'Oréal Brandstorm 2025", level: 100 },
        { name: "CAPM (In Progress)", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Marketing tools and strategies I use to build brands and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-700 to-slate-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;