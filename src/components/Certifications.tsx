import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certificate of Excellence",
      organization: "180 Degrees Consulting Case Competition",
      description: "Awarded for presenting a well-rounded, analytically grounded, and actionable proposal that stood out for its clarity and feasibility in addressing youth unemployment in Paris.",
      image: "/Certification_of_Excellence_.png",
      date: "July 2025",
      link: "https://www.canva.com/design/DAGtuAa9FKc/qHhOiiEZNA1ggPWNAbt3-w/view?utm_content=DAGtuAa9FKc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h75b38b4832"
    },
    {
      title: "L'Oréal Brandstorm 2025 Certificate",
      organization: "L'Oréal Global Innovation Challenge",
      description: "Recognized for developing EpiSmart, an AI-powered adhesive patch for real-time skin and hair diagnostics, merging technology, sustainability, and self-care in men's grooming.",
      image: "/Brandstorm_certificate.webp",
      date: "March2025",
      link: "https://www.canva.com/design/DAGjazogm0c/N2CtRQUDgxb7yhtSB-ra6w/edit"
    },
    {
      title: "Inside LVMH Certificate",
      organization: "LVMH Group",
      description: "Completed the Inside LVMH program, gaining insights into luxury brand management, innovation strategies, and the business practices of the world's leading luxury goods company.",
      image: "/InsideLVMH.png",
      date: "December 2024",
      link: null
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Recognition for excellence in academic and professional achievements</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-yellow-500 mr-2" size={24} />
                  <h4 className="text-xl font-bold text-gray-900">{cert.title}</h4>
                </div>
                <p className="text-gray-700 font-medium mb-2">{cert.organization}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{cert.date}</span>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                    >
                      <span className="text-sm">View Project</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-4 bg-white">
                <div 
                  onClick={() => window.open(cert.image, '_blank')}
                  className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  title="Click to view full certificate"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-48 object-contain rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 