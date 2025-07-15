import React from 'react';
import { ExternalLink, Eye, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "LGBTQ+ India Organization Campaign",
      description: "Developed and shared engaging content for The LGBTQ+ India Organization, focusing on awareness and community building. Created compelling social media content that resonated with the target audience and drove meaningful engagement. The campaign successfully increased brand visibility and community participation through strategic content planning and execution.",
      image: "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Content Creation", "Social Media Strategy", "Community Engagement", "Brand Awareness"],
      results: "30% increase in social media engagement",
      featured: true
    },
    {
      title: "Lunatic Pencil Social Blog",
      description: "Launched and managed a social blog 'Lunatic Pencil' on Instagram, focusing on important social topics like Period Stigma and Body Dysmorphia. Created authentic, engaging content that sparked meaningful conversations and built a strong community around mental health and social awareness. The blog achieved rapid growth through strategic content planning and authentic storytelling.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Instagram", "Content Writing", "Social Awareness", "Community Building"],
      results: "50K impressions in 10 days, strong community engagement",
      featured: true
    },
    {
      title: "Dentsu Multi-Platform Campaigns",
      description: "Executed comprehensive paid media campaigns across Meta, Google, and DV360 platforms for various clients. Developed targeted activation strategies that significantly boosted engagement rates. Created automated reporting systems and dashboards that streamlined campaign analysis and improved decision-making processes for stakeholders.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Meta Ads", "Google Ads", "DV360", "Excel Dashboards", "Power BI"],
      results: "25% engagement boost, 30% reporting time reduction",
      featured: false
    },
    {
      title: "Trakin Tech Content Strategy",
      description: "Managed comprehensive social media strategy for tech influencer with 200K+ followers across YouTube, Instagram, and Facebook. Created engaging content that drove significant follower growth and maintained high engagement rates. Developed SEO-optimized articles that achieved top Google rankings for key industry terms.",
      image: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["YouTube", "Instagram", "Facebook", "SEO Writing", "Content Planning"],
      results: "30K+ new followers in 2 months, Top 4 Google rankings",
      featured: false
    },
    {
      title: "ESCP Student Ambassador Program",
      description: "Led virtual open days and recruitment activities as Student Ambassador at ESCP Business School. Managed large-scale events with 950+ attendees, handled 425+ live chat queries, and coordinated 144 one-to-one sessions. Developed efficient systems for student engagement and information dissemination.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Event Management", "Live Chat", "Student Engagement", "Virtual Events"],
      results: "950+ event attendees, 425+ queries handled, 144 sessions coordinated",
      featured: false
    },
    {
      title: "NMIMS Placement Committee Leadership",
      description: "Led a 24-member team as President of the Placement Committee at NMIMS University. Successfully secured internships and placements for 110 students while onboarding 50 new recruiters. Developed systematic approaches to student-recruiter matching and improved placement processes.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Team Leadership", "Recruitment", "Student Placement", "Stakeholder Management"],
      results: "110 students placed, 50 new recruiters onboarded",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Campaigns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Marketing campaigns and brand strategies that delivered exceptional results
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Eye size={20} />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-green-600" size={16} />
                    <span className="text-green-800 font-semibold text-sm">Key Results</span>
                  </div>
                  <p className="text-green-700 text-sm">{project.results}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">
                    <Eye size={16} />
                    View Case Study
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">
                    <ExternalLink size={16} />
                    Live Campaign
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Campaigns</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                      <Eye size={14} className="inline mr-1" />
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                      <ExternalLink size={14} className="inline mr-1" />
                      Details
                    </button>
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

export default Projects;