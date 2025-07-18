import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Associate, Digital Marketing",
      company: "Dentsu India (Ad Agency)",
      location: "India",
      period: "Jun 2022 - Nov 2023",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Led the end-to-end planning and execution of paid media campaigns across Google Ads, Meta, YouTube, LinkedIn, and DV360 for global clients across e-commerce, fintech, and lifestyle sectors, delivering up to 2.4M+ monthly visits with performance uplift of 25%+ in engagement and reduced CPAs.</li>
          <li>Oversaw a team of 4-5 analysts, supporting cross-channel execution while coordinating with strategy, creative and analytics teams to streamline delivery pipelines across APAC markets including Singapore and Taiwan.</li>
          <li>Designed and deployed automated campaign dashboards using Power BI, Looker Studio and Excel, reducing reporting turnaround by 30% and enabling faster performance reviews, budget reallocation, and regional pacing checks.</li>
          <li>Implemented A/B testing frameworks and audience cohort segmentation to refine targeting, reduce channel overlap, and unlock 20%+ growth in direct and organic acquisition.</li>
          <li>Delivered post-campaign reports and quarterly business reviews (QBRs) for C-level stakeholders, translating marketing data into actionable recommendations for creative optimization, funnel improvements, and market-specific strategy pivots.</li>
          <li>Partnered with global media publishers and platform reps to pilot new ad formats and sequencing strategies, enhancing upper-funnel visibility and enabling full-funnel storytelling across display and video channels.</li>
        </ul>
      ),
      technologies: [
        "Meta Ads",
        "Google Ads",
        "DV360",
        "Excel",
        "Power BI",
        "KPI Analysis",
        "Stakeholder Management",
        "Media Planning",
        "A/B Testing",
        "Campaign execution",
        "Audience Segmentation"
      ]
    },
    {
      title: "Vogue Advertising Sales Intern",
      company: "Conde Nast India",
      location: "India",
      period: "Jun 2021 - Jul 2021",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Conducted competitive research across 90+ luxury fashion brands, supporting market mapping and pitch strategy for upcoming seasonal collections.</li>
          <li>Maintained and updated internal trackers for pricing, ad discounts, and publication spreads, enhancing visibility and accuracy for sales planning.</li>
          <li>Supported the creation of client pitch decks and internal presentation materials for product launches and campaign previews.</li>
          <li>Coordinated with editorial and marketing teams to track campaign assets and layout flow, reducing delivery errors and improving workflow efficiency by 25%.</li>
          <li>Helped ensure visual brand consistency across all placements by aligning final assets with creative and editorial standards.</li>
        </ul>
      ),
      technologies: [
        "Luxury Media",
        "Brand Strategy",
        "Visual Asset Tracking",
        "Pricing Strategy",
        "MS PowerPoint",
        "MS Excel",
        "Competitor Analysis"
      ]
    },
    {
      title: "Social Media Intern",
      company: "Trakin Tech (YouTuber/Influencer)",
      location: "India",
      period: "May 2019 - Jun 2019 & Jun 2021",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Managed daily content rollout across YouTube, Instagram, and Facebook for a 200K+ follower tech influencer, ensuring timely publishing and editorial consistency.</li>
          <li>Conducted in-depth research on audience behavior, content consumption, and buyer psychology within the tech and startup creator space to refine platform-specific strategies.</li>
          <li>Delivered real-time coverage of tech events including Computex Taiwan and the Realme X launch, creating live updates, polls, and Q&A sessions to boost engagement.</li>
          <li>Wrote and published SEO-optimized blog articles on technology, startups, lifestyle, and business using CMS tools (WordPress), driving 5,000+ organic impressions per article and ranking in top 4 Google results.</li>
          <li>A/B tested thumbnails, captions, and posting times to maximize performance; helped achieve 30K+ follower growth in 2 months by aligning content with viewer habits and engagement patterns.</li>
          <li>Monitored competitor creators weekly to track format trends and benchmark growth strategies, feeding insights into editorial planning.</li>
        </ul>
      ),
      technologies: [
        "Influencer Marketing",
        "Content Strategy",
        "Audience Engagement",
        "SEO",
        "CMS",
        "Trend Mapping",
        "Market Research",
        "YouTube",
        "Instagram",
        "Facebook",
        "Community Management"
      ]
    },
    {
      title: "Business Development Intern",
      company: "Desi Farms (Wellness Food Startup)",
      location: "India",
      period: "May 2018 - Jul 2018",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Spearheaded POS activation campaigns across 15+ retail zones, setting up branded kiosks in high-footfall areas to increase sampling visibility and shopper engagement.</li>
          <li>Conducted product sample testing and in-store feedback collection to assess packaging appeal, taste preferences, and brand perception, insights used to refine retail messaging and SKU design.</li>
          <li>Profiled target customer segments and studied regional buying habits, helping guide market-entry strategy and expansion into 10+ new localities.</li>
          <li>Ran in-person promotional activations that generated 250+ qualified leads and converted over 80 new customers in under eight weeks.</li>
          <li>Performed competitive analysis on pricing and product display, providing data-driven recommendations for merchandising and shelf strategy.</li>
          <li>Acted as a bridge between ground teams and brand management, streamlining sampling logistics and closing feedback loops between retail experience and product development.</li>
        </ul>
      ),
      technologies: [
        "On-ground Activations",
        "Trade Shows",
        "Event Planning",
        "Go-To-Market Strategy",
        "Consumer Research & Segmentation",
        "Lead Generation",
        "Market Expansion",
        "POS Optimization"
      ]
    },
    {
      title: "Junior Executive Member, Incoming Global Entrepreneur (IGT)",
      company: "AIESEC",
      location: "India",
      period: "Jan 2018 - Jul 2018",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Pitched and onboarded 30+ companies and NGOs as internship partners for international volunteers, managing outreach, cold calling, and stakeholder negotiations.</li>
          <li>Facilitated onboarding and local integration for 25+ exchange students, organizing orientation events, volunteering drives, and TED-style talks to foster cultural exchange.</li>
          <li>Managed end-to-end program coordination including documentation and scheduling across partners and incoming talent.</li>
          <li>Developed marketing kits, newsletters, and onboarding materials to improve communication flow across internal and external teams.</li>
          <li>Acted as the liaison between incoming interns and host organizations, ensuring smooth transitions, aligned expectations, and a positive experience for all stakeholders.</li>
        </ul>
      ),
      technologies: [
        "Partner Outreach",
        "Cross-Cultural Engagement",
        "Business Development",
        "Stakeholder Management",
        "Team Management",
        "Public Speaking"
      ]
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
                      {/* External Link Icon: Only for Trakin Tech */}
                      {exp.company === "Trakin Tech (YouTuber/Influencer)" ? (
                        <a href="https://trak.in/tags/business/author/rutuja-abande/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
                        </a>
                      ) : null}
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