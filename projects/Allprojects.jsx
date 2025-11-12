import React from "react";
import Layout from "@theme/Layout";
import { ExternalLink, Github, Calendar, Users, ArrowRight, Star, ChevronRight } from "lucide-react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";

// Projects data
const projects = [
  {
    id: 1,
    title: "Cyber.AI",
    description: "Real-time cybersecurity speech-to-speech system for incident response with offline AI capabilities. Built with advanced machine learning models for threat detection.",
    image: "/img/projects/cyber-ai.jpg",
    technologies: ["Python", "Whisper", "LLaMA", "Piper-TTS", "TensorFlow"],
    category: "AI/ML",
    status: "Completed",
    date: "15/10/2024",
    readTime: "4 min read",
    githubUrl: "https://github.com/yourusername/cyber-ai",
    liveUrl: "#",
    featured: true,
    stats: {
      latency: "<1 sec",
      ram: "1.5GB RAM",
      accuracy: "95%"
    }
  },
  {
    id: 2,
    title: "Envi.AI",
    description: "Voice-controlled email workflow automation with multi-language support. Revolutionizing email management through AI-powered voice commands.",
    image: "/img/projects/envi-ai.jpg",
    technologies: ["Python", "NLP", "Voice Recognition API", "FastAPI", "React"],
    category: "Automation",
    status: "In Progress",
    date: "22/09/2024",
    readTime: "3 min read",
    githubUrl: "https://github.com/yourusername/envi-ai",
    liveUrl: "#",
    featured: true,
    stats: {
      languages: "30+",
      development: "30 hours",
      efficiency: "40% faster"
    }
  },
  {
    id: 3,
    title: "Socially",
    description: "AI-powered social media analytics with real-time engagement tracking and sentiment analysis for content creators and businesses.",
    image: "/img/projects/socially.jpg",
    technologies: ["Next.js", "Astra DB", "Langflow", "ML", "Node.js"],
    category: "Analytics",
    status: "Completed",
    date: "10/08/2024",
    readTime: "5 min read",
    githubUrl: "https://github.com/yourusername/socially",
    liveUrl: "#",
    featured: false,
    stats: {
      dataPoints: "1k+",
      accuracy: "90%+",
      users: "500+"
    }
  },
  {
    id: 4,
    title: "QuizzA",
    description: "AI quiz generator transforming PDFs into interactive learning experiences with adaptive difficulty and progress tracking.",
    image: "/img/projects/quizza.jpg",
    technologies: ["Flutter", "Firebase", "NLP", "PDF Processing", "Dart"],
    category: "Education",
    status: "Completed",
    date: "28/07/2024",
    readTime: "3 min read",
    githubUrl: "https://github.com/yourusername/quizza",
    liveUrl: "#",
    featured: false,
    stats: {
      concurrentUsers: "500+",
      quizGenerated: "1k+",
      satisfaction: "98%"
    }
  },
  {
    id: 5,
    title: "ERPX Studio",
    description: "AI-powered ERP platform for small businesses with automated workflow management and predictive analytics.",
    image: "/img/projects/erpx.jpg",
    technologies: ["Next.js", "AWS", "Prisma", "Python", "ML"],
    category: "Business",
    status: "Completed",
    date: "15/06/2024",
    readTime: "6 min read",
    githubUrl: "https://github.com/yourusername/erpx",
    liveUrl: "#",
    featured: true,
    stats: {
      satisfaction: "95%+",
      automation: "80% tasks",
      performance: "30% boost"
    }
  },
  {
    id: 6,
    title: "HealthTrack AI",
    description: "Intelligent health monitoring system with real-time analytics and predictive health insights using wearable data.",
    image: "/img/projects/healthtrack.jpg",
    technologies: ["React Native", "TensorFlow", "Firebase", "Python", "Redis"],
    category: "Healthcare",
    status: "In Progress",
    date: "05/11/2024",
    readTime: "4 min read",
    githubUrl: "https://github.com/yourusername/healthtrack",
    liveUrl: "#",
    featured: false,
    stats: {
      predictions: "10k+",
      accuracy: "92%",
      responseTime: "<2s"
    }
  },
  {
    id: 7,
    title: "Real-Time Chat App",
    description: "A real-time chat application that enables users to communicate instantly over the internet using WebSocket and Firebase for live message delivery.",
    image: "/img/projects/chat-app.jpg",
    technologies: ["React", "Firebase", "Node.js", "WebSocket"],
    category: "Communication",
    status: "Completed",
    date: "02/05/2024",
    readTime: "3 min read",
    githubUrl: "https://github.com/Prathamesh01110/Realtime-Chat-APP",
    liveUrl: "#",
    featured: false,
    stats: {
      latency: "Real-time",
      users: "100+ active",
      messages: "1k+ daily"
    }
  },
  {
    id: 8,
    title: "BERT Fine-Tuning — Toxic Comment Classifier",
    description: "Fine-tuned BERT model to classify text as toxic or non-toxic using advanced NLP preprocessing and supervised fine-tuning techniques.",
    image: "/img/projects/bert-finetune.jpg",
    technologies: ["Python", "Transformers", "PyTorch", "BERT", "NLP"],
    category: "AI/ML",
    status: "Completed",
    date: "25/08/2024",
    readTime: "5 min read",
    githubUrl: "https://github.com/Prathamesh01110/Bert-Finetuning",
    featured: false,
    stats: {
      accuracy: "94%",
      dataset: "Jigsaw Toxic Comment",
      model: "bert-base-uncased"
    }
  },
  {
    id: 9,
    title: "India Post BRSR Platform (SIH1754)",
    description: "A digital Business Responsibility and Sustainability Reporting (BRSR) platform built for the Department of Posts (India Post). Enables transparency, social accountability, and sustainable business practices across the India Post network.",
    image: "/img/projects/indiapost-brsr.jpg",
    technologies: ["Next.js", "Firebase", "Flutter", "Node.js", "Tailwind"],
    category: "Web + App",
    status: "Completed",
    date: "30/09/2024",
    readTime: "6 min read",
    githubUrl: "https://github.com/Prathamesh01110/web-SIH1754",
    featured: true,
    stats: {
      platforms: "Web + Mobile",
      org: "India Post",
      impact: "Supports nationwide sustainability tracking"
    }
  }
];


export default function Allprojects() {
  // const { colorMode } = useColorMode();
    let colorMode = "light";

  if (typeof window !== "undefined") {
    try {
      const theme = require("@docusaurus/theme-common");
      colorMode = theme.useColorMode().colorMode;
    } catch (err) {
      console.warn("Color mode unavailable during SSR, defaulting to light");
    }
  }

  return (
      <div className={clsx(
        "min-h-screen transition-colors duration-300",
        colorMode === 'dark' ? "bg-gray-900" : "bg-gray-50"
      )}>
        {/* Header */}
        <div className={clsx(
          "py-16 border-b",
          colorMode === 'dark' ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        )}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className={clsx(
                "text-5xl font-bold mb-4",
                colorMode === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Projects
              </h1>
              <p className={clsx(
                "text-lg max-w-2xl mx-auto",
                colorMode === 'dark' ? "text-gray-300" : "text-gray-600"
              )}>
                Explore my latest work and collaborations. Each project tells a story of innovation, problem-solving, and technical excellence. 🚀
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                {[
                  { number: projects.length, label: "Projects" },
                  { number: projects.filter(p => p.featured).length, label: "Featured" },
                  { number: projects.filter(p => p.status === "Completed").length, label: "Completed" },
                  { number: "10k+", label: "Users Reached" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={clsx(
                      "text-2xl font-bold",
                      colorMode === 'dark' ? "text-blue-400" : "text-blue-600"
                    )}>
                      {stat.number}
                    </div>
                    <div className={clsx(
                      "text-sm",
                      colorMode === 'dark' ? "text-gray-400" : "text-gray-500"
                    )}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container max-w-6xl mx-auto px-4 py-12">
          {/* Featured Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className={clsx(
                "w-6 h-6",
                colorMode === 'dark' ? "text-yellow-400" : "text-yellow-500"
              )} />
              <h2 className={clsx(
                "text-3xl font-bold",
                colorMode === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Featured Projects
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => project.featured).map((project) => (
                <ProjectCard key={project.id} project={project} colorMode={colorMode} />
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className={clsx(
              "text-3xl font-bold mb-8",
              colorMode === 'dark' ? "text-white" : "text-gray-900"
            )}>
              All Projects
            </h2>
            
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectListItem key={project.id} project={project} colorMode={colorMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

// Project Card Component for Featured Projects
function ProjectCard({ project, colorMode }) {
  return (
    <div className={clsx(
      "group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl",
      colorMode === 'dark' 
        ? "bg-gray-800 border-gray-700 hover:border-blue-500/50" 
        : "bg-white border-gray-200 hover:border-blue-400/50"
    )}>
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-4 left-4">
          <span className={clsx(
            "px-3 py-1 rounded-full text-sm font-medium",
            project.status === "Completed" 
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
          )}>
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className={clsx(
            "px-3 py-1 rounded-full text-sm font-medium border",
            colorMode === 'dark'
              ? "bg-white/10 text-white border-white/20"
              : "bg-black/10 text-gray-700 border-gray-300"
          )}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className={clsx(
          "text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors",
          colorMode === 'dark' ? "text-white" : "text-gray-900"
        )}>
          {project.title}
        </h3>
        
        <p className={clsx(
          "text-sm mb-4 line-clamp-2",
          colorMode === 'dark' ? "text-gray-300" : "text-gray-600"
        )}>
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <span key={key} className={clsx(
              "px-2 py-1 rounded text-xs font-medium",
              colorMode === 'dark'
                ? "bg-blue-500/20 text-blue-300"
                : "bg-blue-100 text-blue-700"
            )}>
              {value}
            </span>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className={clsx(
              "px-2 py-1 rounded text-xs",
              colorMode === 'dark'
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-100 text-gray-600"
            )}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={clsx(
              "px-2 py-1 rounded text-xs",
              colorMode === 'dark'
                ? "bg-gray-700 text-gray-400"
                : "bg-gray-100 text-gray-500"
            )}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className={clsx(
            "text-sm",
            colorMode === 'dark' ? "text-gray-400" : "text-gray-500"
          )}>
            {project.date} • {project.readTime}
          </div>
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-2 rounded-lg transition-colors",
                colorMode === 'dark'
                  ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              )}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-2 rounded-lg transition-colors",
                colorMode === 'dark'
                  ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              )}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project List Item Component for All Projects
function ProjectListItem({ project, colorMode }) {
  return (
    <div className={clsx(
      "group rounded-xl border p-6 transition-all duration-300 hover:shadow-lg",
      colorMode === 'dark'
        ? "bg-gray-800 border-gray-700 hover:border-blue-500/30"
        : "bg-white border-gray-200 hover:border-blue-400/30"
    )}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Image/Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className={clsx(
                  "text-xl font-bold group-hover:text-blue-500 transition-colors",
                  colorMode === 'dark' ? "text-white" : "text-gray-900"
                )}>
                  {project.title}
                </h3>
                {project.featured && (
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                )}
              </div>
              
              <p className={clsx(
                "text-sm mb-3",
                colorMode === 'dark' ? "text-gray-300" : "text-gray-600"
              )}>
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className={clsx(
                  "flex items-center gap-1",
                  colorMode === 'dark' ? "text-gray-400" : "text-gray-500"
                )}>
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </span>
                <span className={clsx(
                  colorMode === 'dark' ? "text-gray-400" : "text-gray-500"
                )}>
                  {project.readTime}
                </span>
                <span className={clsx(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  project.status === "Completed" 
                    ? "bg-green-500/20 text-green-600 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30"
                )}>
                  {project.status}
                </span>
                <span className={clsx(
                  "px-2 py-1 rounded-full text-xs font-medium border",
                  colorMode === 'dark'
                    ? "bg-white/10 text-white border-white/20"
                    : "bg-black/10 text-gray-700 border-gray-300"
                )}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "p-2 rounded-lg transition-colors",
                  colorMode === 'dark'
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                )}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                  colorMode === 'dark'
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                )}
              >
                <span>View</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span key={tech} className={clsx(
                "px-3 py-1 rounded-full text-xs font-medium border",
                colorMode === 'dark'
                  ? "bg-gray-700 text-gray-300 border-gray-600"
                  : "bg-gray-100 text-gray-600 border-gray-300"
              )}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}