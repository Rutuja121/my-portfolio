import React from 'react';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-pink-600" size={24} />,
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that resonate with target audiences"
    },
    {
      icon: <TrendingUp className="text-purple-600" size={24} />,
      title: "Growth Marketing",
      description: "Driving measurable growth through data-driven marketing campaigns"
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Social Media",
      description: "Building engaged communities and managing social media presence"
    },
    {
      icon: <Award className="text-green-600" size={24} />,
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
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a performance-driven marketing student currently pursuing my Master in Management at 
              ESCP Business School with specialization in Digital Project Management. With hands-on 
              experience at leading agencies like Dentsu and Conde Nast, I bring a unique blend of 
              academic knowledge and practical expertise in digital marketing.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise lies in paid media campaigns, KPI reporting, and ad copywriting across 
              platforms like Meta, Google Ads, and DV360. I've successfully boosted engagement by 25% 
              through targeted campaigns and reduced reporting time by 30% through automated dashboards. 
              I'm passionate about combining analytical skills with creative strategy to drive results.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond technical skills, I bring strong leadership experience as Student Ambassador at 
              ESCP and former President of the Placement Committee at NMIMS. I'm fluent in English, 
              German, Hindi, and Marathi, making me well-equipped for international marketing roles.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Meta Ads', 'Google Ads', 'DV360', 'Google Analytics', 'SEO', 'Social Media', 'Copywriting', 'CRM', 'Excel', 'PowerPoint'].map((skill) => (
                <span key={skill} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
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