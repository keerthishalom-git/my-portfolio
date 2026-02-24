import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, FileText } from 'lucide-react';

export default function Portfolio() {
  const [profileImage, setProfileImage] = useState('https://image2url.com/r2/default/images/1771915924678-2d8f50ae-5a1d-49d6-a111-8dd476e41784.jpeg');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };

  const skills = [
    { category: "AI & ML", items: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Predictive Modeling", "Neural Networks", "Deep Learning"] },
    { category: "Frontend & Design", items: ["React.js", "Full-Stack Development", "UX Architecture", "Wireframing", "User Flow Design", "Figma", "Product Design"] },
    { category: "Backend & Data", items: ["Flask", "Django", "Node.js", "SQL", "JavaScript", "Data Pipelines", "API Development", "VBA"] },
    { category: "Cloud & DevOps", items: ["AWS (EC2, SNS, IAM, S3, Lambda)", "Docker", "Cloud Deployment Pipelines", "CI/CD Dashboards"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Jupyter", "Jira", "Confluence", "Notion", "Power Query", "Excel (Advanced)", "Slack", "Miro"] },
    { category: "Methodologies & Other", items: ["Agile/Scrum", "IoT Integration", "Supply Chain Management", "CCNA (Networking)", "HRC Database"]}
  ];

  const experiences = [
    {
      title: "Technical Program Manager / End-to-End Product Owner",
      company: "Episcopal Diocese of Missouri",
      location: "St. Louis, MO",
      period: "09/2025 – Present",
      highlights: [
        "Created and delivered user-centered AI application with agentic capabilities, enabling autonomous task completion during offline periods",
        "Owned end-to-end program execution for major product features, aligning engineering, legal, policy, stakeholders across parallel workstreams within the diocese",
        "Partnered closely with engineering leadership to manage technical dependencies, unblock delivery risks, and improve development velocity",
        "Built and maintained program artifacts including roadmaps, execution plans, risk registers, status dashboards, and launch communications",
        "Designed comprehensive UX architecture includes user flows and wireframes to enhance accessibility across all age demographics",
        "Led full stack engineering initiatives, overseeing frontend development, backend systems, API integration, and cloud deployment pipelines",
        "Implemented AI/ML-driven features to optimize data flow and significantly improve user interaction quality"
      ]
    },
    {
      title: "Technical Project Manager",
      company: "Saint Louis University",
      location: "St. Louis, MO",
      period: "01/2024 – 12/2025",
      highlights: [
        "Built AI-based recruiting platform with a team of 4, coordinating cross-functional engineering initiatives across platform, product, and infrastructure ideas",
        "Led high-complexity, cross-team engineering programs, coordinating platform, product, and infrastructure among team to deliver multi-phase releases on schedule",
        "Built and maintained program artifacts including roadmaps, execution plans, risk registers, status dashboards, and launch communications",
        "Drove launch readiness across teams by coordinating cutover plans, validating feature completeness, and ensuring predictable, well-communicated releases",
        "Facilitated technical decision-making by synthesizing trade-offs, driving stakeholder consensus, and resolving blocking issues without direct authority",
        "Established scalable delivery processes to bring structure and clarity to ambiguous, fast-moving initiatives",
        "Coordinated execution across distributed team members operating in different schedules, ensuring alignment and accountability"
      ]
    },
    {
      title: "Technical Business Developer",
      company: "Sodexo",
      location: "St. Louis, MO",
      period: "05/2024 – 12/2025",
      highlights: [
        "Collaborated on Inventory Integration with AI (IoT) project to enhance operational efficiency across business units",
        "Developed and implemented strategic business initiatives to improve client satisfaction and expand service offerings",
        "Successfully onboarded new business partnerships, managing end-to-end negotiations, client requests, and financial agreements",
        "Led team huddles to align daily operational goals, significantly boosting employee engagement and morale",
        "Gained expertise in supply chain management and strategic people management through mentorship by Resident District Manager"
      ]
    },
    {
      title: "Senior Associate, SME/Acting Process Lead - People Experience and Technology (PXT)",
      company: "Amazon",
      location: "Hyderabad, India (North America & EMEA Regions)",
      period: "03/2021 – 01/2024",
      highlights: [
        "Managed end-to-end application screening process for Software Development Engineer Level 5 roles, processing approximately 700 candidates",
        "Coordinated interviewing processes, employee referrals, interview loops, and debriefs for technical hiring",
        "Successfully launched nearly 20 fulfillment centers across North America region through strategic talent acquisition",
        "Collaborated with multiple stakeholders and clients across different time zones to ensure seamless operations",
        "Conducted drug testing coordination for potential candidates by connecting with site managers across North America and vendor partners (Quest, ERP)"
      ]
    },
    {
      title: "Senior HR Analyst - People Experience and Technology (PXT)",
      company: "Amazon",
      location: "Hyderabad, India (North America & EMEA Regions)",
      period: "08/2019 – 03/2021",
      highlights: [
        "Executed background checks and comprehensive application screening for technical positions",
        "Demonstrated advanced Excel proficiency including VLOOKUP for data management and VBA script development for task automation",
        "Operated HRC database systems and managed SIM (System Information Management) processes",
        "Utilized Power Query for data transformation and integration from multiple sources to support robust data analysis"
      ]
    }
  ];

  const projects = [
    {
      name: "AI-Based Recruiting Firm",
      description: "Masters Research Project: Developed end-to-end AI recruiting platform with team of 4 members, implementing advanced matching algorithms and automated screening processes",
      type: "Research Project",
      url: "https://github.com/keerthishalom-git",
      tags: ["AI", "Machine Learning", "Full-Stack", "Research"]
    },
    {
      name: "Full Stack Web Application Development",
      description: "Built multiple production-ready web applications using React.js, Node.js, and cloud technologies with complete deployment pipelines",
      type: "Development",
      url: "https://github.com/keerthishalom-git",
      tags: ["React.js", "Node.js", "Cloud", "Full-Stack"]
    },
    {
      name: "Deep Learning Application",
      description: "Implemented single-layer neural network and planar data classification system from scratch using NumPy",
      type: "Machine Learning",
      url: "https://github.com/keerthishalom-git/python-basics-with-numpy",
      tags: ["Python", "NumPy", "Neural Networks", "Deep Learning"]
    },
    {
      name: "Fenty Beauty's Digital Transformation",
      description: "Comprehensive analysis of Fenty Beauty's agile transformation through strategic product management methodologies",
      type: "Product Management",
      url: "https://medium.com/@keerthishalom1/fenty-beautys-digital-transformation-through-agile-methodologies-2d8f0d65da3a",
      tags: ["Agile", "Digital Transformation", "Product Strategy"]
    },
    {
      name: "Blockbuster vs Netflix Case Study",
      description: "Business analysis exploring strategic decisions, market disruption, and the evolution of streaming services",
      type: "Business Analysis",
      url: "https://medium.com/@keerthishalom1/business-case-study-on-blockbuster-netflix-ca103eb45412",
      tags: ["Strategy", "Market Analysis", "Innovation"]
    }
  ];

  const leadership = {
    organization: "WiCyS-SLU",
    role: "Chapter Director",
    highlights: [
      "Directed a 40+ member student chapter, organizing workshops, CTFs, and speaker sessions on cybersecurity, cloud, and application security",
      "Partnered with industry professionals and faculty to host 10+ events annually, boosting student engagement in security careers by 35%",
      "Mentored peers on topics such as incident response, ethical hacking, and cloud security, helping several members secure internships and research opportunities",
      "Coordinated sponsorships, guest lectures, and hackathons by engaging with cybersecurity leaders and companies to provide real-world exposure",
      "Fostered an inclusive and collaborative environment, aligning chapter goals with WiCyS national initiatives to support diversity in Technology",
      "Lead the events for CPT workshops by collaborating with career services SLU"
    ]
  };

  const certifications = [
    "Neural Networks and Deep Learning - DeepLearning.AI (October 2025)",
    "Digital Product Management: Modern Fundamentals - University of Virginia (May 2025)",
    "Certified Software Development Professional (CSDP) - Saint Louis University (January 2025)",
    "Architecting Solutions on AWS - Amazon Web Services (December 2024)",
    "Cisco Certified Network Associate (CCNA) - Networking - Cisco Networking Academy (January 2021)"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-purple-50 overflow-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: '#1a1a1a' }}>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-purple-100"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_50%)]"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl tracking-wider" style={{ fontWeight: 600, color: '#1a1a1a' }}>KS</div>
          <div className="flex gap-8 text-sm" style={{ color: '#2a2a2a' }}>
            {['Home', 'About', 'Experience', 'Skills', 'Leadership', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={'#' + item.toLowerCase()}
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl tracking-tight animate-fade-in" style={{ fontWeight: 200, background: 'linear-gradient(135deg, #f97316 0%, #a855f7 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Keerthi Shalom Vaddepalli
              </h1>
              <div className="h-px w-32 bg-gradient-to-r from-orange-400 via-purple-400 to-transparent"></div>
              <p className="text-lg md:text-xl tracking-wide" style={{ fontWeight: 400, color: '#2a2a2a' }}>
                Technical Program Manager • Software Engineer • AI Product Manager/Owner
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://www.linkedin.com/in/keerthi-shalom-v-625023323/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-orange-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/keerthishalom-git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-purple-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1wPvPgFhUm_Q35J3FMedjZH9ZXfDHTgXa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-pink-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">Resume</span>
              </a>
              <a href="https://medium.com/@keerthishalom1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-pink-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span className="text-sm font-medium">Medium</span>
              </a>
              <a href="mailto:keerthishalom1@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-orange-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-orange-100 to-purple-100">
                <img 
                  src={profileImage} 
                  alt="Keerthi Shalom Vaddepalli" 
                  className="w-full h-full object-cover"
                />
                <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <div className="text-white text-center">
                    <div className="text-sm font-medium mb-2">Upload New Photo</div>
                    <div className="text-xs opacity-80">Click to change</div>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6" style={{ color: '#666' }} />
        </div>
      </section>

      <section id="about" className="relative z-10 py-32 px-6 bg-white/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-8 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>About Me</h2>
          <p className="text-center text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#3a3a3a' }}>
            Results-driven Technical Program Manager and Business Developer with nearly 7 years of experience in product lifecycle management, full-stack development, and AI/ML implementation. Proven expertise in designing user-centric applications, leading cross-functional teams, and driving business growth through strategic partnerships and innovative technology solutions. Skilled in Agile methodologies, cloud deployment, and managing complex stakeholder relationships across multiple time zones.
          </p>
        </div>
      </section>

      <section id="experience" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-16 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-orange-400 transition-all duration-500 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl text-orange-600 mb-1" style={{ fontWeight: 400 }}>{exp.title}</h3>
                    <p className="text-lg" style={{ color: '#2a2a2a', fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2" style={{ color: '#3a3a3a' }}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 py-32 px-6 bg-white/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-16 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-purple-400 transition-all duration-500">
                <h3 className="text-xl text-purple-600 mb-4" style={{ fontWeight: 400 }}>{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-purple-100 transition-colors duration-300" style={{ color: '#2a2a2a' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-16 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Leadership Experience</h2>
          <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-orange-400 transition-all duration-500 hover:shadow-xl">
            <div className="mb-4">
              <h3 className="text-2xl text-orange-600 mb-1" style={{ fontWeight: 400 }}>{leadership.organization}</h3>
              <p className="text-lg" style={{ color: '#2a2a2a', fontWeight: 500 }}>{leadership.role}</p>
            </div>
            <ul className="space-y-2" style={{ color: '#3a3a3a' }}>
              {leadership.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 py-32 px-6 bg-white/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-16 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Projects & Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a 
                key={idx} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-pink-400 transition-all duration-500 hover:scale-105 hover:shadow-xl block"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg" style={{ fontWeight: 500, color: '#1a1a1a' }}>{project.name}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm mb-3" style={{ color: '#4a4a4a' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-pink-100 text-xs" style={{ color: '#be185d' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-pink-600" style={{ fontWeight: 500 }}>{project.type}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-16 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-purple-400 transition-all duration-500">
                <div className="flex gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <p className="leading-relaxed" style={{ color: '#2a2a2a' }}>{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-32 px-6 bg-white/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl mb-8" style={{ fontWeight: 300, color: '#1a1a1a' }}>Let's Connect</h2>
          <p className="text-lg" style={{ color: '#3a3a3a' }}>
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:keerthishalom1@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-100 border border-orange-300 hover:bg-orange-200 transition-all duration-300" style={{ color: '#1a1a1a' }}>
              <Mail className="w-4 h-4" />
              <span>keerthishalom1@gmail.com</span>
            </a>
            <a href="tel:+13141954955" className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-100 border border-purple-300 hover:bg-purple-200 transition-all duration-300" style={{ color: '#1a1a1a' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (314) 195-4955</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center text-sm" style={{ color: '#4a4a4a' }}>
          <p>© 2025 Keerthi Shalom Vaddepalli. Crafted with precision.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

