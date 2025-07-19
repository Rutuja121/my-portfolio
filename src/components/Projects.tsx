import React from 'react';
import { ExternalLink, Eye, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "L'Oréal Brandstorm 2025 : Revolutionizing Men's Grooming",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>As part of L'Oréal's global innovation challenge, we conceptualized EpiSmart, an AI-powered, adhesive patch that delivers real-time skin and hair diagnostics for men—merging technology, sustainability, and self-care in a single, interactive experience.</li>
          <li>Our product, Patch Perfect, was designed to make grooming more data-informed, eco-conscious, and engaging, particularly for Gen Z and digitally native consumers.</li>
          <li>Inspired by L'Oréal's commitment to inclusivity and tech-forward beauty, we built a strategy that balanced hardware innovation, gamified user experience, and scalable retail integration.</li>
          <li>We positioned EpiSmart as a bridge between personal wellness and smart tech, targeting both direct-to-consumer and professional grooming channels.</li>
        </ul>
      ),
      image: "/Loreal.webp",
      technologies: ["Product Innovation", "AI Technology", "Sustainability", "Brand Strategy", "Market Research"],
      results: "Developed product concept, branding, sustainability model, and activation plan within 6 weeks",
      featured: true,
      link: "https://www.canva.com/design/DAGjazogm0c/N2CtRQUDgxb7yhtSB-ra6w/edit"
    },
    {
      title: "Agile Project : Investment Proposal for KLM Airlines",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>As part of ESCP's Agile Project Management course, I worked on a live case simulation to help a major airline boost customer loyalty and ancillary revenue through digital innovation.</li>
          <li>Our team's "killer feature" was a blockchain-powered digital wallet embedded in the airline's mobile app. It allowed travelers to earn decentralized tokens based on trip history, ancillary spend, and engagement. These tokens could be redeemed, traded, or transferred across partner brands, creating a gamified and transparent loyalty ecosystem.</li>
          <li>We developed the solution using Agile sprints, mapping user stories and prioritizing features such as:
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Smart notifications (e.g. gate changes, carousel info)</li>
              <li>Layover-based content and promotions</li>
              <li>Loyalty-based upsell prompts</li>
              <li>Post-flight concierge suggestions via feedback loops</li>
            </ul>
          </li>
          <li>The solution positioned the app as a loyalty ecosystem hub, blending Web3 thinking with a real-world travel use case.</li>
        </ul>
      ),
      image: "/KLM.jpeg",
      technologies: ["Agile Project Management", "User Stories, MVP", "Kanban", "Mobile UX Strategy", "Loyalty & Revenue Growth"],
      results: "Delivered full user journey maps, stakeholder storyboards, and KPI framework. Received a perfect score (100%) and ranked top in class.",
      featured: true,
      link: "https://drive.google.com/file/d/1astJUqSWt2CT3fYdgowZtQiN1xjvy7w_/view"
    },
    {
      title: "Twitter Sentiment Analysis – U.S. Election 2020",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>As part of the Big Data for Social Science course at ESCP, I worked on a group project simulating the role of a data analyst at a major news outlet.</li>
          <li>We conducted a sentiment and behavior analysis on a large dataset of tweets surrounding the 2020 U.S. presidential election.</li>
          <li>Using Excel and Power BI, we analyzed over 1 million tweets, focusing on:
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Sentiment polarity and tweet volume by candidate (Biden vs. Trump)</li>
              <li>Engagement metrics (likes, retweets, follower counts)</li>
              <li>Geolocation trends compared to state-level election results</li>
              <li>User join dates in relation to sentiment shifts</li>
              <li>Behavioral changes before vs. after the election</li>
            </ul>
          </li>
          <li>Our insights were presented via interactive dashboards, combining data storytelling with bias-aware framing to reflect how media outlets shape political narratives.</li>
        </ul>
      ),
      image: "/twitter.jpeg",
      technologies: ["PowerBI", "Advanced Excel", "Social Media Analytics", "Bias Framing", "Geolocation Mapping", "Big Data Analytics", "Sentiment Mapping"],
      results: "Delivered a data-backed, bias-aware sentiment analysis model. Integrated geospatial analysis with state-level election results.",
      featured: true,
      link: "https://drive.google.com/file/d/126Jpg35YJDQZTF6Z0xArnnQAymEJWxlA/view"
    },
    {
      title: "SEO-Optimized Blog Series – Trakin Tech",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>As a contributor to Trakin Tech's business blog, I wrote and published a series of articles focused on technology trends, startup insights, and industry updates.</li>
          <li>Each piece was designed to boost the blog's visibility and organic reach, with several articles ranking in the top 5 Google search results.</li>
          <li>I also analyzed reader behavior to refine content length, structure, and call-to-action placements, resulting in an increase in both average session duration and page-level engagement.</li>
        </ul>
      ),
      image: "/Trakin.jpeg",
      technologies: ["Topic Research", "SEO Writing", "Keyword Structuring", "Content Creation & Strategy"],
      results: "Achieved 5,000+ organic impressions per post on average",
      featured: true,
      link: "https://trak.in/tags/business/author/rutuja-abande/"
    },
    {
      title: "MiM Student Ambassador - Marketing & Recruitment Team",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Organized and led virtual open days and webinars for 950+ prospective students, achieving a 72% participation rate and facilitating 425+ live chat interactions.</li>
          <li>Managed 144 personalized 1:1 sessions, guiding students through admissions, scholarships, and program structure.</li>
          <li>Strengthened ESCP's brand presence across international campuses and helped improve applicant engagement funnel.</li>
        </ul>
      ),
      image: "/MIM.jpg",
      technologies: ["Cross-cultural communication", "Webinar facilitation", "CRM coordination", "Stakeholder alignment"],
      results: "Enhanced the school's admissions experience while deepening peer-to-peer engagement and improving webinar-to-application conversions.",
      featured: false
    },
    {
      title: "President, Student-Run Placement Committee | NMIMS University",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Led a 24-member team, managing final placement operations for a batch of 110 students, coordinating company outreach, resume vetting, and logistics.</li>
          <li>Onboarded 50+ new companies across tech, consulting, and FMCG sectors, diversifying role pipelines.</li>
          <li>Designed and executed Rubix, a flagship 2-day event featuring case competitions, live pitches, and on-the-spot hiring for 300+ student participants.</li>
        </ul>
      ),
      image: "/placement.jpg",
      technologies: ["Peer mentoring", "Communication Strategy", "Strategic Leadership", "Corporate Relations", "Event Planning"],
      results: "Supported the placement of 100+ students across two years; drove better recruiter-student fit through data-led positioning.",
      featured: false
    }
  ];

  // Categorize projects
  const researchProjects = projects.filter(p => [
    "L'Oréal Brandstorm 2025 : Revolutionizing Men's Grooming",
    'Agile Project : Investment Proposal for KLM Airlines',
    'Twitter Sentiment Analysis – U.S. Election 2020',
    'SEO-Optimized Blog Series – Trakin Tech'
  ].includes(p.title));

  const leadershipProjects = projects.filter(p => [
    'MiM Student Ambassador - Marketing & Recruitment Team',
    'President, Student-Run Placement Committee | NMIMS University'
  ].includes(p.title));

  // Placeholder for volunteer activities
  const volunteerProjects: typeof projects = [
    {
      title: "Volunteer – Bottles for Change | PET Recycling Initiative",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Led plastic waste collection and awareness efforts as part of Bisleri's Bottles for Change program, focused on PET recycling and sustainable waste management.</li>
          <li>Conducted on-ground awareness drives, educating 200+ individuals on plastic segregation, recycling practices, and cleaner urban environments.</li>
          <li>Raised the highest donation amount, which was contributed to PBVS Study Centre's midday meal program for children of ragpickers in Chembur.</li>
        </ul>
      ),
      image: "/Banner-Gif.gif",
      technologies: ["Community Outreach", "Sustainability Engagement", "Social Impact Awareness"],
      results: "Secured 1st place for collecting and recycling the highest volume of plastic waste, engaging with local communities to promote responsible disposal.",
      featured: false
    },
    {
      title: "LGBTQ+ India Organization – Content Campaign",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Collaborated with the LGBTQ+ India Organization to create content aimed at challenging stigma, raising awareness, and driving inclusive conversation around queer rights and identity in India.</li>
          <li>I wrote and published blog articles that tackled taboo subjects around gender, identity, and acceptance, offering a safe, educational, and supportive narrative for readers.</li>
          <li>Content was optimized for social media, timed to coincide with key cultural moments and awareness days.</li>
          <li>The campaign's unified messaging across Instagram, Twitter, and blog platforms helped amplify marginalized voices and spark authentic community engagement.</li>
        </ul>
      ),
      image: "/LGBTQ+.jpeg",
      technologies: ["Advocacy Writing", "Community Empowerment", "Awareness Campaign Planning", "Blog Strategy", "Brand Building"],
      results: "Achieved a 30% increase in engagement across campaign posts. Strengthened brand visibility and message alignment across platforms.",
      featured: false
    },
    {
      title: "Elderly Care Volunteer",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Provided compassionate care and emotional support to senior residents through bi-weekly visits and calls, fostering community and trust.</li>
          <li>Organized monthly social outings and walks, helping residents stay active and connected.</li>
          <li>Assisted seniors in navigating digital tools to stay in touch with family during the pandemic.</li>
          <li>Accompanied residents to medical appointments, supporting health advocacy with empathy and responsibility.</li>
        </ul>
      ),
      image: "/OldAgeHome.webp",
      technologies: ["Elderly Care Coordination", "Compassionate Communication", "Patience", "Community Service"],
      results: "Reignited emotional engagement and improved quality of life for 30+ elderly residents through consistent support and creative enrichment.",
      featured: false
    },
    {
      title: "Volunteer English Teacher",
      description: (
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Taught English to secondary-level students, adapting lesson plans to diverse learning styles and abilities.</li>
          <li>Improved student comprehension and participation through interactive activities and individualized support.</li>
          <li>Earned recognition for being responsible, enthusiastic, and a valuable team member.</li>
          <li>Contributed to a positive classroom culture that encouraged curiosity, discipline, and continuous learning.</li>
        </ul>
      ),
      image: "/Teaching.jpeg",
      technologies: ["Student Engagement", "Lesson Planning", "Patience & Empathy", "Public Speaking"],
      results: "Taught over 50 students with stronger English proficiency and boosted classroom engagement.",
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
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
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
                  <div className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
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
                  <img src={project.image} alt={project.title} className="w-full h-48 object-contain bg-gray-100" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <div className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</div>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-gray-700 text-xs font-medium">{project.results}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                      ))}
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