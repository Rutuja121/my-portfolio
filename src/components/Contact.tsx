import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-pink-600" size={24} />,
      title: "Email",
      value: "rutuja.abande@edu.escp.eu",
      link: "mailto:rutuja.abande@edu.escp.eu"
    },
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: "Phone",
      value: "+ (49) 1627689701",
      link: "tel:+491627689701"
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Location",
      value: "Paris, France",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/rutujaabande/", label: "LinkedIn" },
    { icon: <Mail size={24} />, url: "mailto:rutuja.abande@edu.escp.eu", label: "Email" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Replace with your Formspree endpoint
    await fetch('https://formspree.io/f/xvgqgdbj', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your brand? Let's discuss your marketing goals and create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new marketing opportunities and creative challenges. 
                Whether you need help with brand strategy, digital campaigns, or growth marketing, 
                I'd love to hear about your project and explore how we can work together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.title}</p>
                    <p className="text-gray-900 group-hover:text-pink-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            {submitted ? (
              <div className="text-center">
                <div className="text-green-600 text-lg font-semibold mb-4">
                  Thank you for reaching out!
                </div>
                <p className="text-gray-600">
                  I'll get back to you within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about yourself, and how I can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;