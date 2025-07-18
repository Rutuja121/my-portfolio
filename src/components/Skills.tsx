import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      skills: [
        { name: "Paid Media Strategy", level: 95 },
        { name: "Content Strategy & A/B Test", level: 92 },
        { name: "Competitor Benchmarking & Market Research", level: 90 },
        { name: "Go-To-Market Planning", level: 88 },
        { name: "Social Media Strategies", level: 93 }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Google Analytics (GA4)", level: 87 },
        { name: "Excel (Advanced)", level: 92 },
        { name: "Looker Studio", level: 80 },
        { name: "Campaign Manager 360", level: 82 }
      ]
    },
    {
      title: "Platforms & Channels",
      skills: [
        { name: "Google Ads (Search, Display, YouTube)", level: 90 },
        { name: "Meta Ads (Facebook & Instagram)", level: 90 },
        { name: "LinkedIn Ads", level: 85 },
        { name: "Programmatic Ads (DV360)", level: 88 },
        { name: "SEO & SEMrush", level: 86 }
      ]
    },
    {
      title: "Content & Tools",
      skills: [
        { name: "MS PowerPoint", level: 95 },
        { name: "Google Suite", level: 90 },
        { name: "Adobe", level: 80 },
        { name: "Canva", level: 92 },
        { name: "WordPress & CMS Tools", level: 85 }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "English", level: 100 },
        { name: "Hindi", level: 100 },
        { name: "Marathi", level: 100 },
        { name: "German", level: 60 },
        { name: "French", level: 50 }
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
                      {"level" in skill && skill.level !== undefined && (
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      )}
                    </div>
                    {"level" in skill && skill.level !== undefined && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-700 to-slate-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
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