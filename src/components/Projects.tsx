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

  // Categorize projects
  const researchProjects = projects.filter(p => [
    'LGBTQ+ India Organization Campaign',
    'Lunatic Pencil Social Blog',
    'Dentsu Multi-Platform Campaigns',
    'Trakin Tech Content Strategy'
  ].includes(p.title));

  const leadershipProjects = projects.filter(p => [
    'ESCP Student Ambassador Program',
    'NMIMS Placement Committee Leadership'
  ].includes(p.title));

  // Placeholder for volunteer activities
  const volunteerProjects: typeof projects = [
    {
      title: "Community Clean-Up Drive Organizer",
      description: "Organized and led a local community clean-up drive, coordinating volunteers and managing logistics to improve neighborhood spaces. Successfully engaged local residents and increased community participation in sustainability efforts.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Event Organization", "Community Engagement", "Sustainability"],
      results: "50+ volunteers, 200kg waste collected",
      featured: false
    }
  ];

  return (
    <>
      <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Research / Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Academic and professional research projects, campaigns, and case studies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Roles and experiences demonstrating leadership and team management</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteering" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Volunteer Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Community service and volunteer work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerProjects.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No volunteer activities listed yet.</div>
            ) : (
              volunteerProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs px-2 py-1">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;