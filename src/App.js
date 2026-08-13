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
    { category: "AI & ML", items: ["Python", "TensorFlow / Keras", "Neural Networks", "CNNs & Transfer Learning", "RAG & LLM APIs (Claude)", "Model Evaluation & Error Analysis"] },
    { category: "Cloud", items: ["AWS (Certified Solutions Architect)"] },
    { category: "Product & Collaboration", items: ["Cross-Functional Stakeholder Coordination", "Ambiguous Problem-Solving", "Agile/Scrum", "Roadmapping", "Product Strategy", "Requirements Gathering", "Backlog Prioritization", "Customer Discovery"] },
    { category: "Web Development (Coursework)", items: ["JavaScript", "React", "Node.js/Express", "MongoDB", "Jest"] }
  ];

  const experiences = [
    {
      title: "Founder",
      company: "Beans",
      location: "Remote",
      period: "11/2025 – Present",
      highlights: [
        "Founded and am building Beans, a two-sided marketplace connecting content creators and brands for sponsorship deals, currently live in a pre-launch waitlist stage",
        "Designed and built separate creator-facing and brand-facing landing experiences solo (positioning, copy, and visual design) as the foundation for the full product build",
        "Defined product strategy and positioning for Beans' two distinct user segments (creators and brands), translating market opportunity into a live pre-launch product"
      ]
    },
    {
      title: "Technical Business Developer",
      company: "Sodexo",
      location: "St. Louis, MO",
      period: "05/2024 – 12/2025",
      highlights: [
        "Collaborated with stakeholders and clients to resolve concerns, working directly with managers and leadership to address issues",
        "Used AI tools to support scheduling, note-taking, and idea generation, contributing suggestions to improve the stakeholder experience"
      ]
    },
    {
      title: "Senior Associate, PXT (People Experience & Technology)",
      company: "Amazon",
      location: "North America & EMEA regions",
      period: "03/2021 – 01/2024",
      highlights: [
        "Evaluated Software Development Engineer candidate profiles against structured technical criteria, making advance/dispose decisions across ~700 candidates",
        "Resolved 4,800+ stakeholder tickets, translating ambiguous requests into clear, actionable outcomes across regions and time zones",
        "Launched 17 fulfillment centers across North America, coordinating with site managers and vendor partners under time pressure",
        "Gathered and translated ambiguous stakeholder requirements into clear, actionable outcomes across regions and time zones"
      ]
    },
    {
      title: "Senior Analyst, PXT",
      company: "Amazon",
      location: "North America & EMEA regions",
      period: "08/2019 – 03/2021",
      highlights: [
        "Executed background checks and technical-role screening at scale",
        "Automated recurring reporting tasks using VBA, and used Power Query to consolidate data across multiple sources for stakeholder reporting"
      ]
    }
  ];

  const projects = [
    {
      name: "Digit Recognition Neural Network",
      description: "Trained a feedforward neural network from scratch on MNIST, reaching 98.03% test accuracy. Included full error analysis identifying which digit pairs the model most often confused.",
      type: "Deep Learning",
      url: "https://github.com/keerthishalom-git",
      tags: ["Python", "TensorFlow", "Neural Networks"]
    },
    {
      name: "Model Tuning & Optimization Comparison",
      description: "Systematically compared 6 training configurations (SGD, SGD+Momentum, Adam at 3 learning rates, Adam+BatchNorm). Found both too-high and too-low learning rates underperformed the default; best result: 97.84% with Adam at its standard rate.",
      type: "Deep Learning",
      url: "https://github.com/keerthishalom-git",
      tags: ["Optimization", "Experimentation", "TensorFlow"]
    },
    {
      name: "Model Error Analysis Report",
      description: "Conducted bias-variance tradeoff diagnosis and systematic confusion-pattern analysis on a trained classifier, exercising judgment to prioritize which failure modes mattered most rather than treating accuracy as a single number.",
      type: "ML Strategy",
      url: "https://github.com/keerthishalom-git",
      tags: ["Model Evaluation", "Diagnostics"]
    },
    {
      name: "Natural Scene Image Classifier",
      description: "Built a 6-class scene classifier using MobileNetV2 transfer learning, reaching 90% test accuracy. Deployed as a live, interactive web app via Streamlit.",
      type: "Computer Vision",
      url: "https://github.com/keerthishalom-git",
      tags: ["Transfer Learning", "CNNs", "Streamlit"]
    },
    {
      name: "Adam: Autonomous Research Agent",
      description: "Built and deployed a live web-based research agent using Claude's web search tool, implementing a genuine think, act, observe loop that autonomously decides how many searches a question requires. Designed a Flask backend with real-time progress streaming and production cost-safety infrastructure (rate limiting, free-tier limits, bring-your-own-key fallback). Triaged and fixed real model behavior issues surfaced by early users based on direct feedback.",
      type: "Agentic AI / LLM Systems",
      url: "https://adam-research-agent.onrender.com/",
      tags: ["Claude API", "Flask", "Agentic AI"]
    },
    {
      name: "AI-Based Recruiting Platform",
      description: "Master's research project (Project Lead, team of 4): designed an end-to-end AI recruiting platform with matching algorithms and automated candidate screening.",
      type: "Research Project",
      url: "https://github.com/keerthishalom-git",
      tags: ["AI", "Full-Stack", "Research"]
    }
  ];

  const leadership = {
    organization: "WiCyS-SLU",
    role: "Chapter Director",
    highlights: [
      "Directed a 40+ member student chapter, organizing workshops and speaker sessions on cloud and application security",
      "Mentored peers on technical topics, helping several members secure internships and research opportunities",
      "Partnered with faculty and industry professionals to host 10+ events annually, growing engagement in security careers by 35%"
    ]
  };

  const certifications = [
    "Neural Networks and Deep Learning: DeepLearning.AI (October 2025)",
    "Architecting Solutions on AWS: Amazon Web Services (December 2024)",
    "Digital Product Management: Modern Fundamentals, University of Virginia (May 2025)"
  ];

  const education = {
    degree: "Master of Science, Information Systems",
    school: "Saint Louis University",
    highlights: [
      "Coursework in enterprise systems design & architecture, cloud security fundamentals, and evidence-based decision making using structured, data-driven methods",
      "Trained across standard project management frameworks (Agile/Scrum, Waterfall) and tools (Jira, Trello, MS Project) applied to real course projects"
    ]
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-purple-50 overflow-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: '#1a1a1a' }}>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-purple-100"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-lg tracking-wider" style={{ fontWeight: 600, color: '#1a1a1a' }}>KS</div>
          <div className="flex gap-6 text-sm" style={{ color: '#2a2a2a' }}>
            {['About', 'Projects', 'Experience', 'Skills', 'Leadership', 'Certifications', 'Contact'].map((item) => (
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

      <section id="home" className="relative z-10 min-h-[85vh] flex items-center justify-center px-6 pt-16">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl tracking-tight" style={{ fontWeight: 200, background: 'linear-gradient(135deg, #f97316 0%, #a855f7 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Keerthi Shalom Vaddepalli
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-orange-400 via-purple-400 to-transparent"></div>
              <p className="text-base md:text-lg tracking-wide" style={{ fontWeight: 400, color: '#2a2a2a' }}>
                AI/ML Practitioner &middot; Aspiring Product Manager, Model Behaviors &amp; Alignment
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.linkedin.com/in/keerthi-shalom-v-625023323/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-orange-100 transition-all duration-300" style={{ color: '#1a1a1a' }}>
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/keerthishalom-git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-purple-100 transition-all duration-300" style={{ color: '#1a1a1a' }}>
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1wPvPgFhUm_Q35J3FMedjZH9ZXfDHTgXa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-pink-100 transition-all duration-300" style={{ color: '#1a1a1a' }}>
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Resume</span>
              </a>
              <a href="mailto:keerthi.shalomv@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-orange-100 transition-all duration-300" style={{ color: '#1a1a1a' }}>
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50"></div>
              <div className="relative w-56 h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-orange-100 to-purple-100">
                <img
                  src={profileImage}
                  alt="Keerthi Shalom Vaddepalli"
                  className="w-full h-full object-cover"
                />
                <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <div className="text-white text-center">
                    <div className="text-xs font-medium">Upload Photo</div>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5" style={{ color: '#999' }} />
        </div>
      </section>

      <section id="about" className="relative z-10 py-14 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-5 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>About</h2>
          <p className="text-center text-base max-w-3xl mx-auto leading-relaxed" style={{ color: '#3a3a3a' }}>
            I'm a first-principles builder who trains and ships real AI systems: training neural networks from scratch, systematically comparing model failure modes, and designing, shipping, and iterating a live LLM-powered agent based on real user feedback and interaction patterns, including diagnosing, triaging, and fixing behavioral issues like incomplete or truncated outputs by adjusting prompts and system logic. I'm also founding Beans, a two-sided marketplace connecting creators and brands, where I own product thinking end-to-end, from positioning through user experience. Before this, I spent nearly five years at Amazon making structured judgment calls at scale, synthesizing 4,800+ stakeholder requests into clear, actionable outcomes across regions. What draws me is the space where technical depth meets human judgment: solving the no-clear-right-answer problems in how AI systems can behave safely. I hold an M.S. in Information Systems from Saint Louis University and an AWS Solutions Architect certification.
          </p>
        </div>
      </section>

      <section id="projects" className="relative z-10 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-pink-400 transition-all duration-300 hover:shadow-lg block"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base" style={{ fontWeight: 500, color: '#1a1a1a' }}>{project.name}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm mb-3" style={{ color: '#4a4a4a' }}>{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full bg-pink-100 text-xs" style={{ color: '#be185d' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-pink-600" style={{ fontWeight: 500 }}>{project.type}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 py-14 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-orange-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg text-orange-600" style={{ fontWeight: 400 }}>{exp.title}</h3>
                    <p className="text-base" style={{ color: '#2a2a2a', fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-1.5" style={{ color: '#3a3a3a' }}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-orange-500 mt-1">&bull;</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-purple-400 transition-all duration-300">
                <h3 className="text-sm text-purple-600 mb-3" style={{ fontWeight: 600 }}>{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-xs" style={{ color: '#2a2a2a' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="relative z-10 py-14 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Leadership</h2>
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-orange-400 transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-lg text-orange-600" style={{ fontWeight: 400 }}>{leadership.organization}</h3>
              <p className="text-base" style={{ color: '#2a2a2a', fontWeight: 500 }}>{leadership.role}</p>
            </div>
            <ul className="space-y-1.5" style={{ color: '#3a3a3a' }}>
              {leadership.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-orange-500 mt-1">&bull;</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications" className="relative z-10 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontWeight: 300, color: '#1a1a1a' }}>Education &amp; Certifications</h2>
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-purple-400 transition-all duration-300 mb-4">
            <h3 className="text-lg text-purple-600" style={{ fontWeight: 400 }}>{education.degree}</h3>
            <p className="text-base mb-3" style={{ color: '#2a2a2a', fontWeight: 500 }}>{education.school}</p>
            <ul className="space-y-1.5" style={{ color: '#3a3a3a' }}>
              {education.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-purple-500 mt-1">&bull;</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-purple-400 transition-all duration-300">
                <div className="flex gap-2">
                  <span className="text-purple-500 mt-0.5">&bull;</span>
                  <p className="text-sm leading-relaxed" style={{ color: '#2a2a2a' }}>{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-14 px-6 bg-white/30">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-2xl" style={{ fontWeight: 300, color: '#1a1a1a' }}>Let's Connect</h2>
          <p className="text-base" style={{ color: '#3a3a3a' }}>
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex justify-center items-center">
            <a href="mailto:keerthi.shalomv@gmail.com" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-100 border border-orange-300 hover:bg-orange-200 transition-all duration-300" style={{ color: '#1a1a1a' }}>
              <Mail className="w-4 h-4" />
              <span className="text-sm">keerthi.shalomv@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-xs" style={{ color: '#4a4a4a' }}>
          <p>&copy; 2026 Keerthi Shalom Vaddepalli.</p>
        </div>
      </footer>
    </div>
  );
}
