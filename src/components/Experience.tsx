import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Associate, Digital Marketing",
      company: "Dentsu India (Ad Agency)",
      location: "India",
      period: "Jun 2022 - Nov 2023",
      description: "Executed paid media campaigns, boosting engagement by 25% through targeted Meta, Google, & DV360 activations. Built automated Excel dashboards & Power BI reports, reducing campaign analysis & reporting time by 30%. Created post-campaign decks and presented strategic recommendations to C-level stakeholders to guide next-phase decisions. Managed cross-market projects independently, coordinating creative, analytics, stakeholder deliverables under tight timelines.",
      technologies: ["Meta Ads", "Google Ads", "DV360", "Excel", "Power BI", "Campaign Analysis", "Stakeholder Management", "Cross-market Projects"]
    },
    {
      title: "Vogue Advertising Sales Intern",
      company: "Conde Nast India",
      location: "India",
      period: "Jun 2021 - Jul 2021",
      description: "Performed in-depth competitor intelligence on 90+ luxury brands, streamlining outreach and enhancing pitch success. Developed pitch decks for luxury clients and created a master sheet data, reducing reporting time by 25%. Worked closely with the sales team to understand luxury brand positioning and advertising strategies in the Indian market.",
      technologies: ["Competitor Analysis", "Pitch Deck Creation", "Data Management", "Luxury Brand Research", "Sales Support", "Market Intelligence"]
    },
    {
      title: "Social Media Intern",
      company: "Trakin Tech (YouTuber/Influencer)",
      location: "India",
      period: "May 2019 - Jun 2019 & Jun 2021",
      description: "Maintained daily social media editorial plan across YouTube, Instagram, & Facebook, ensuring timely content rollout for 200K+ audience. Created original posts, drafted captions, & adapted content to drive shareability, increasing 30,000+ new followers in 2 months. Wrote SEO-optimized articles, generating 5,000+ impressions & ranking in the top 4 Google search for key industry terms. Monitored competitor channels weekly and brainstormed innovative content ideas to strengthen community engagement.",
      technologies: ["YouTube", "Instagram", "Facebook", "SEO Writing", "Content Creation", "Community Management", "Competitor Analysis", "Editorial Planning"]
    },
    {
      title: "Business Development Intern",
      company: "Desi Farms (Wellness Food Startup)",
      location: "India",
      period: "May 2018 - Jul 2018",
      description: "Planned and coordinated retail promotional events and kiosk activations at modern trade outlets and food exhibitions. Generated over 250 leads and converted 80+ new customers via in-person activations and on-ground engagement tactics. Developed understanding of retail marketing and customer acquisition strategies in the wellness food sector.",
      technologies: ["Event Planning", "Lead Generation", "Customer Conversion", "Retail Marketing", "On-ground Activations", "Trade Shows"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in marketing, brand building, and driving business growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-lg text-pink-600 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <ExternalLink className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;