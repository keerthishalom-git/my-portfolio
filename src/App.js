import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, FileText } from 'lucide-react';

export default function Portfolio() {
  const [profileImage, setProfileImage] = useState('https://image2url.com/images/1763008916529-b3f55116-68b1-434d-af57-460f010b1f38.jpg');

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
    { category: "AI & ML", items: ["Python", "TensorFlow", "PyTorch", "NLP", "LLMs (OpenAI, Claude, Mistral)", "RAG Pipelines", "Prompt Engineering", "LoRA", "Model Tuning"] },
    { category: "Frontend & Design", items: ["React.js", "Modern Web Frameworks", "UI/UX Design", "Product Design", "Responsive Design"] },
    { category: "Backend & Data", items: ["Flask", "Django", "Node.js", "SQL", "Data Pipelines", "Predictive Analytics", "scikit-learn"] },
    { category: "Cloud & Tools", items: ["AWS (EC2, SNS, IAM)", "Git", "Jupyter", "Agile/Scrum", "Jira", "ERP", "Salesforce"] }
  ];

  const experiences = [
    {
      title: "Web Developer • UI/UX Designer • Social Media Manager",
      company: "Episcopal Diocese of Missouri & International Christian Fellowship",
      location: "St. Louis, MO",
      period: "10/2025 – Present",
      highlights: [
        "Architected and deployed AI-integrated responsive web interfaces using React.js and modern frontend frameworks, implementing predictive user analytics that drove a 38% increase in system efficiency and user engagement metrics",
        "Engineered comprehensive brand identity system across multi-platform digital ecosystem (Google, Instagram, YouTube, Threads), developing automated content distribution pipelines that increased cross-platform engagement by 55%",
        "Led full-cycle design sprints using Figma and Adobe XD, conducting user research and A/B testing to optimize conversion rates and user experience flows",
        "Implemented SEO strategies and performance optimization techniques, achieving 90+ Lighthouse scores across all web properties"
      ]
    },
    {
      title: "AI-First Product Manager & Software Engineering Intern",
      company: "Airtribe",
      location: "Remote",
      period: "07/2025 – 09/2025",
      highlights: [
        "Spearheaded end-to-end development of AI-native applications integrating LLMs (OpenAI GPT-4, Claude, Mistral) with custom embeddings and Retrieval-Augmented Generation (RAG) pipelines for enhanced contextual accuracy",
        "Implemented advanced prompt engineering techniques and LoRA (Low-Rank Adaptation) fine-tuning to optimize model performance, achieving 25% improvement in response accuracy and 40% reduction in latency",
        "Designed and built production-ready capstone AI product featuring scalable backend architecture (Flask/Django), PostgreSQL database optimization, and containerized deployment using Docker",
        "Collaborated with cross-functional teams using Agile methodologies, managing sprint cycles and product roadmaps through Jira",
        "Developed comprehensive API documentation and conducted code reviews to ensure best practices and maintainable codebases"
      ]
    },
    {
      title: "Technical Business Developer – Intern",
      company: "Sodexo",
      location: "St. Louis, MO",
      period: "05/2024 – 07/2025",
      highlights: [
        "Engineered enterprise-grade AI-driven inventory management system utilizing predictive analytics (scikit-learn, TensorFlow) and real-time data processing pipelines, reducing manual errors by 40% and improving operational efficiency by 30%",
        "Delivered complete Software Development Life Cycle (SDLC) execution: requirements gathering through stakeholder interviews, backend architecture design, automation logic implementation, and RESTful API integration",
        "Built interactive Power BI dashboards with real-time KPI tracking, enabling data-driven decision making for inventory optimization",
        "Implemented automated alert systems using AWS SNS for inventory threshold monitoring and anomaly detection",
        "Conducted technical training sessions for 50+ staff members on new system adoption and best practices"
      ]
    },
    {
      title: "SDE Recruiter",
      company: "Amazon",
      location: "Hyderabad, India",
      period: "08/2019 – 01/2024",
      highlights: [
        "Orchestrated successful launch of seven large-scale warehouse facilities across North America, integrating complex ERP systems and Salesforce-based recruitment tools to streamline operational workflows",
        "Resolved 4000+ technical and operational stakeholder tickets by building custom automation scripts and implementing BI reporting dashboards for real-time issue tracking and resolution",
        "Led full-cycle technical recruitment for 2000+ Software Development Engineer (SDE) candidates, conducting technical screenings, coding assessments, and system design interviews",
        "Developed automated candidate tracking system using Python and SQL, reducing time-to-hire by 35% and improving candidate experience metrics",
        "Collaborated with engineering leadership to refine job requirements, interview processes, and technical assessment frameworks",
        "Created comprehensive recruitment analytics reports to optimize sourcing strategies and diversity initiatives"
      ]
    }
  ];

  const projects = [
    {
      name: "Fenty Beauty's Digital Transformation",
      description: "Comprehensive case study analyzing Fenty Beauty's agile transformation and digital strategy implementation",
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
    },
    {
      name: "Python Deep Learning with NumPy",
      description: "Implementation of neural network fundamentals from scratch using NumPy for educational purposes",
      type: "Machine Learning",
      url: "https://github.com/keerthishalom-git/python-basics-with-numpy",
      tags: ["Python", "NumPy", "Neural Networks"]
    },
    {
      name: "Agentic AI System",
      description: "Built autonomous AI agents with decision-making capabilities and tool integration",
      type: "AI/ML",
      url: "https://github.com/keerthishalom-git",
      tags: ["AI Agents", "LLMs", "Automation"]
    },
    {
      name: "AI-based Recruiting Firm",
      description: "Master's research project developing intelligent recruitment matching system",
      type: "Research",
      url: "https://github.com/keerthishalom-git",
      tags: ["AI", "NLP", "Research"]
    },
    {
      name: "AI Hallucinations Study",
      description: "Research publication analyzing and mitigating hallucinations in large language models",
      type: "Publication",
      url: "https://medium.com/@keerthishalom1",
      tags: ["Research", "LLMs", "AI Safety"]
    }
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
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
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
                Keerthi Shalom
              </h1>
              <div className="h-px w-32 bg-gradient-to-r from-orange-400 via-purple-400 to-transparent"></div>
              <p className="text-lg md:text-xl tracking-wide" style={{ fontWeight: 400, color: '#2a2a2a' }}>
                AI Product Manager • Software Engineer • UI/UX Designer
              </p>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#3a3a3a' }}>
              Building intelligent systems and elegant experiences at the intersection of AI, engineering, and design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://www.linkedin.com/in/keerthi-shalom-v-625023323/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-orange-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/keerthishalom-git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-purple-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <button onClick={() => alert('Resume coming soon!')} className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-pink-100 transition-all duration-300 hover:scale-105" style={{ color: '#1a1a1a' }}>
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">Resume</span>
              </button>
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
                  alt="Keerthi Shalom" 
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
            As a passionate technologist at the intersection of AI, product management, and design, I specialize in building intelligent systems that solve real-world problems. With experience spanning from enterprise software development to AI-powered applications, I bring a unique blend of technical expertise and product thinking to every project. My work focuses on creating seamless user experiences powered by cutting-edge AI technologies, always with an eye toward scalability and impact.
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
          <h2 className="text-4xl mb-16 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Skills & Expertise</h2>
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

      <section id="projects" className="relative z-10 py-32 px-6">
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

      <section id="contact" className="relative z-10 py-32 px-6">
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
