import React from 'react';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-blue-700" size={24} />,
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that resonate with target audiences"
    },
    {
      icon: <TrendingUp className="text-slate-600" size={24} />,
      title: "Growth Marketing",
      description: "Driving measurable growth through data-driven marketing campaigns"
    },
    {
      icon: <Users className="text-teal-600" size={24} />,
      title: "Social Media",
      description: "Building engaged communities and managing social media presence"
    },
    {
      icon: <Award className="text-emerald-600" size={24} />,
      title: "Campaign Excellence",
      description: "Creating award-winning campaigns that deliver exceptional ROI"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creative marketing professional with a passion for building brands and driving growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              I’m currently pursuing a Master in Management at ESCP Business School, specializing in Digital Project Management and International Business & Sustainability, with academic experience across Paris, Berlin, and Madrid. This journey has shaped my global perspective and strengthened my adaptability, cultural sensitivity, and ease with ambiguity, qualities I bring to every team
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              I’ve thrive in high-accountability, fast-paced environments where clarity, ownership, and collaboration are key. Working on cross-market campaign teams taught me to translate complex deliverables into clear, actionable steps. I’ve partnered with content creators to grow their digital presence through consistent, data-driven storytelling, and supported the commercial expansion of an FMCG startup by structuring its retail rollout and optimizing in-store visibility.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Across roles, I’ve led cross-functional marketing initiatives, bridging design, content, and analytics to deliver campaigns that are both creative and strategically grounded. I’m driven by the opportunity to turn ideas into execution and thrive in teams that value curiosity, initiative, and purposeful collaboration.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Meta Ads', 'Google Ads', 'DV360', 'Google Analytics', 'SEO', 'Social Media', 'Copywriting', 'CRM', 'Excel', 'PowerPoint'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;