import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Award, Code, Briefcase, GraduationCap, ChevronDown, ExternalLink, Trophy, Users, Rocket, BookOpen, Target, Zap, ArrowRight, Star, Sparkles } from 'lucide-react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx'

export default function Personal() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState({});
  const sectionsRef = useRef({});
  const { colorMode } = useColorMode(); // 'light' or 'dark'

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    'Web Technologies': ['React.js', 'Next.js', 'Node.js', 'Express.js', 'REST API', 'MERN Stack'],
    'AI/ML Frameworks': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain', 'Hugging Face', 'NLP', 'Computer Vision'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Prisma ORM'],
    'Cloud & DevOps': ['Linux', 'Docker', 'Git', 'GitHub Actions', 'CI/CD Pipeline'],
    'Mobile Development': ['Flutter', 'React Native', 'Android Development'],
    'Data Analytics': ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Data Visualization']
  };

  const projects = [
    {
      title: 'Cyber.AI',
      desc: 'Real-time cybersecurity speech-to-speech system for incident response with offline AI capabilities',
      tech: ['Python', 'Whisper', 'LLaMA', 'Piper-TTS'],
      highlight: '<1 sec latency • 1.5GB RAM',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Envi.AI',
      desc: 'Voice-controlled email workflow automation with multi-language support',
      tech: ['Python', 'NLP', 'Voice Recognition API'],
      highlight: '30+ languages • Built in 30 hours',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ERPX Studio"',
      desc: 'AI-powered ERP platform for small businesses with automated workflow management and predictive analytics.',
      tech: ["Next.js", "AWS", "Prisma", "Python", "ML"],
      highlight: 'Satisfaction Rate 95%+ , Automation of 80% task, performance Boost 30%',
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  const achievements = [
    { 
      icon: Trophy, 
      title: 'Smart India Hackathon 2024', 
      subtitle: 'Grand Finalist',
      desc: 'Ranked among the top 5 contenders competing against some of India’s brightest minds',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7273539568316882944/',
      color: 'from-yellow-400 to-orange-500',
      image: '/img/image1.jpeg'
    },
    { 
      icon: Award, 
      title: 'CSI Webcade Hackathon', 
      subtitle: 'Winner',
      desc: 'Won among 50+ competing teams',
      link: 'https://linkedin.com/posts/your-webcade-post',
      color: 'from-purple-400 to-pink-500',
      image: '/img/image33.png'
    },
    { 
    icon: Star, 
    title: 'Standard Presentation Competition', 
    subtitle: '3rd Place',
    desc: 'Secured 3rd place while showcasing strategic and communication skills.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7311664921451098112/',
    color: 'from-blue-400 to-indigo-500',
    image: '/img/image6.jpeg'
  },
  { 
      icon: Rocket, 
      title: 'E-Cell IIT Bombay', 
      subtitle: 'Entrepreneurship Challenge',
      desc: 'Semifinalist - Top 150 out of 25,000+ teams',
      link: 'https://linkedin.com/posts/your-ecell-post',
      color: 'from-green-400 to-teal-500',
      image: '/img/image22.jpeg'
    },
  { 
    icon: Zap, 
    title: 'Hackanova Thakur 30-hour Hackathon', 
    subtitle: 'Finalist',
    desc: 'Advanced through all rounds to reach the finals in a 30-hour hackathon challenge.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7311664921451098112/',
    color: 'from-pink-400 to-rose-5000',
    image: '/img/image61.jpeg'
  },
    
    { 
      icon: Code, 
      title: 'GeeksforGeeks', 
      subtitle: 'College Leaderboard',
      desc: 'Top 10 ranking among 280 students (SJCEM)',
      link: 'https://linkedin.com/posts/your-gfg-post',
      color: 'from-orange-400 to-amber-500',
      image: '/img/image5.png'
    }
  ];

  const experience = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'HiQual Solutions',
      period: 'Jan 2025 – Jul 2025',
      current: true,
      points: [
        'Engineered 3 client projects integrating payment gateways & WhatsApp bot automation',
        'Implemented GenAI solutions with Inngest functions and automated cron jobs',
        'Applied Arcjet for database operations and API rate limiting, boosting performance by 30%'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      role: 'AI Developer & CTO Co-founder',
      company: 'ERPX Studio',
      period: 'Mar 2024 – Dec 2024',
      points: [
        'Led development of AI-powered ERP platform using Next.js, AWS, Prisma, and Python',
        'Designed ML models for business workflow automation with 95%+ user satisfaction',
        'Built scalable backend services with integrated machine learning for analytics'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      role: 'Web Developer Intern',
      company: 'Elite Forums',
      period: 'Jun 2024 – Aug 2024',
      points: [
        'Created responsive admin panel with React.js, reducing content management time by 40%',
        'Optimized web application performance by 5x through code refinement'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    'Smart India Hackathon 2024 Grand Finale',
    'Machine Learning Specialization - TestRiq',
    'Prompt Engineering for AI Applications - TestRiq',
    'Database Management Systems - Infosys Springboard',
    'Java Programming - Infosys Springboard'
  ];

  const responsibilities = [
    { title: 'College Hackathon Organizer', detail: '380+ participants', icon: Users },
    { title: 'GDG AIML/DSA Lead', detail: 'Conducting sessions & mentoring', icon: GraduationCap },
    { title: 'Technical Team Leader', detail: 'SIH & E-Cell IIT Bombay', icon: Target },
    { title: 'Mentor & Judge', detail: 'Elite Forums Minithon - 60+ developers', icon: BookOpen },
    { title: 'Technical Committee Member', detail: 'OADS DS Committee (2024-26)', icon: Code }
  ];

  // Color utilities for light/dark mode
  const textColor = {
    primary: colorMode === 'dark' ? 'text-white' : 'text-gray-900',
    secondary: colorMode === 'dark' ? 'text-slate-300' : 'text-gray-700',
    muted: colorMode === 'dark' ? 'text-slate-400' : 'text-gray-500',
    inverted: colorMode === 'dark' ? 'text-gray-900' : 'text-white'
  };

  const bgColor = {
    primary: colorMode === 'dark' ? 'bg-slate-950' : 'bg-white',
    secondary: colorMode === 'dark' ? 'bg-slate-900' : 'bg-gray-50',
    card: colorMode === 'dark' ? 'bg-white/5' : 'bg-gray-50/80',
    overlay: colorMode === 'dark' ? 'bg-black/40' : 'bg-white/80'
  };

  const borderColor = {
    primary: colorMode === 'dark' ? 'border-white/10' : 'border-gray-200',
    hover: colorMode === 'dark' ? 'border-white/20' : 'border-gray-300',
    accent: colorMode === 'dark' ? 'border-blue-400/30' : 'border-blue-500/30'
  };

  return (
    <div className={clsx(
      "min-h-screen overflow-x-hidden transition-colors duration-300",
      colorMode === 'dark' ? "bg-slate-950" : "bg-white"
    )}>
      {/* Adaptive Background */}
      {/* Adaptive Background */}
<div className="fixed inset-0 pointer-events-none overflow-hidden">
  {/* Base gradient */}
  <div
    className={clsx(
      'absolute inset-0 transition-colors duration-500',
      colorMode === 'dark'
        ? 'bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950'
        : 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20'
    )}
  />
  
  {/* Grid pattern */}
  <div
    className={clsx(
      'absolute inset-0',
      colorMode === 'dark' ? 'opacity-30' : 'opacity-40'
    )}
    style={{
      backgroundImage: `
        linear-gradient(${colorMode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.25)'} 1px, transparent 1px),
        linear-gradient(90deg, ${colorMode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.25)'} 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px',
    }}
  />
  
  {/* Visible glow orbs */}
  <div
    className={clsx(
      'absolute w-[500px] h-[500px] rounded-full blur-[100px] transition-all duration-1000',
      colorMode === 'dark'
        ? 'bg-blue-500/30 top-0 -left-40'
        : 'bg-indigo-400/40 top-0 -left-40'
    )}
  />
  <div
    className={clsx(
      'absolute w-[500px] h-[500px] rounded-full blur-[100px] transition-all duration-1000',
      colorMode === 'dark'
        ? 'bg-purple-500/30 bottom-0 -right-40'
        : 'bg-purple-400/40 bottom-0 -right-40'
    )}
  />
  <div
    className={clsx(
      'absolute w-[400px] h-[400px] rounded-full blur-[80px] transition-all duration-1000',
      colorMode === 'dark'
        ? 'bg-pink-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        : 'bg-pink-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    )}
  />
  
  {/* Horizontal gradient lines */}
  <div className="absolute inset-0">
    <div
      className={clsx(
        'absolute h-[2px] w-full top-1/4 animate-pulse',
        colorMode === 'dark'
          ? 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent'
          : 'bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent'
      )}
      style={{ animationDuration: '4s' }}
    />
    <div
      className={clsx(
        'absolute h-[2px] w-full top-2/3 animate-pulse',
        colorMode === 'dark'
          ? 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          : 'bg-gradient-to-r from-transparent via-purple-500/40 to-transparent'
      )}
      style={{ animationDuration: '5s', animationDelay: '1s' }}
    />
  </div>
  
  {/* Vertical gradient lines */}
  <div className="absolute inset-0">
    <div
      className={clsx(
        'absolute w-[2px] h-full left-1/4 animate-pulse',
        colorMode === 'dark'
          ? 'bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent'
          : 'bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent'
      )}
      style={{ animationDuration: '6s', animationDelay: '0.5s' }}
    />
    <div
      className={clsx(
        'absolute w-[2px] h-full right-1/3 animate-pulse',
        colorMode === 'dark'
          ? 'bg-gradient-to-b from-transparent via-blue-500/50 to-transparent'
          : 'bg-gradient-to-b from-transparent via-blue-500/40 to-transparent'
      )}
      style={{ animationDuration: '5s', animationDelay: '2s' }}
    />
  </div>
</div>

      {/* Hero Section */}
     {/* Hero Section */}
<section 
  className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
  style={{
    transform: `translateY(${scrollY * 0.5}px)`,
    opacity: 1 - scrollY / 800
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
    <div className="mb-6 sm:mb-8 inline-block">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto">
        {/* Animated glow ring */}
        <div className={clsx(
          "absolute inset-0 rounded-full animate-spin-slow blur-xl opacity-70",
          colorMode === 'dark'
            ? "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
            : "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500"
        )} />
        
        {/* Image container */}
        <div className={clsx(
          "relative w-full h-full rounded-full overflow-hidden shadow-2xl lg:mt-12 md:mt-12 border-2 sm:border-4 group",
          colorMode === 'dark' 
            ? "border-white/20 hover:border-white/40" 
            : "border-blue-200 hover:border-blue-400"
        )}>
          <img 
            src="/img/image4.jpeg" 
            alt="Prathamesh Jakkula" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight px-4">
      <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
        Prathamesh Jakkula
      </span>
    </h1>
    
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-light px-4">
      <span className={clsx(
        "px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm rounded-full border text-xs sm:text-sm md:text-base",
        colorMode === 'dark' 
          ? "bg-white/5 border-white/10 text-blue-200"
          : "bg-black/5 border-black/10 text-gray-700"
      )}>
        AI Software Engineer
      </span>
      <span className={clsx("hidden sm:inline", colorMode === 'dark' ? "text-blue-400" : "text-blue-500")}>•</span>
      <span className={clsx(
        "px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm rounded-full border text-xs sm:text-sm md:text-base",
        colorMode === 'dark' 
          ? "bg-white/5 border-white/10 text-blue-200"
          : "bg-black/5 border-black/10 text-gray-700"
      )}>
        Full-Stack Developer
      </span>
      <span className={clsx("hidden sm:inline", colorMode === 'dark' ? "text-purple-400" : "text-purple-500")}>•</span>
      <span className={clsx(
        "px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm rounded-full border text-xs sm:text-sm md:text-base",
        colorMode === 'dark' 
          ? "bg-white/5 border-white/10 text-blue-200"
          : "bg-black/5 border-black/10 text-gray-700"
      )}>
        ML Innovator
      </span>
    </div>
    
    <p className={clsx(
      "text-sm sm:text-base md:text-lg max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed px-4",
      colorMode === 'dark' ? "text-slate-300" : "text-gray-600"
    )}>
      <span className={clsx("font-semibold",colorMode === 'dark' ? "text-yellow-400" : "text-yellow-600")}>SIH 2024 Grand Finalist</span> • 
      <span className={clsx("font-semibold",colorMode === 'dark' ? "text-blue-400" : "text-blue-600")}> E-Cell IIT Bombay Semifinalist</span> • 
      <span className={clsx("font-semibold",colorMode === 'dark' ? "text-green-400" : "text-green-600")}> CSI Webcade Winner</span>
    </p>

    
    
  <p className={clsx(
  "text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4",
  colorMode === 'dark' ? "text-slate-400" : "text-gray-500"
)}>
  Building intelligent solutions at the intersection of AI and full-stack development. 
  Passionate about creating real-world impact through innovative technology. 
  <span className={clsx("ml-1 font-medium", colorMode === 'dark' ? "text-blue-300" : "text-blue-700")}>
    — Representing SJCEM
  </span>
</p>

    
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
      <a href="https://github.com/Prathamesh01110" target="_blank" rel="noopener noreferrer" 
         className={clsx(
           "group px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 text-sm sm:text-base",
           colorMode === 'dark' 
             ? "bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white"
             : "bg-black/5 hover:bg-black/10 border border-gray-300 hover:border-gray-400 text-gray-700"
         )}>
        <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
        <span>GitHub</span>
        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
      <a href="https://www.linkedin.com/in/prathamesh-jakkula-496a39285/" target="_blank" rel="noopener noreferrer"
         className={clsx(
           "group px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 text-sm sm:text-base",
           colorMode === 'dark' 
             ? "bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/60 text-white"
             : "bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/60 text-gray-700"
         )}>
        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span>LinkedIn</span>
        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
      <a href="mailto:prathameshjakkula60@gmail.com"
         className="group px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-white hover:scale-105 text-sm sm:text-base">
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
        <span>Get in Touch</span>
      </a>
    </div>

    <div className="animate-bounce">
      <ChevronDown className={clsx(
        "w-8 h-8 sm:w-10 sm:h-10 mx-auto opacity-70",
        colorMode === 'dark' ? "text-blue-400" : "text-blue-500"
      )} />
    </div>
  </div>
</section>

      {/* About Section */}
      <section 
        ref={el => sectionsRef.current['about'] = el}
        id="about"
        className={clsx(
          "py-32 px-6 transition-all duration-1000",
          visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        )}
      >
        <div className="max-w-7xl mx-auto">
         <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
    About Me
  </h2>
</div>
          
         <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start px-4">
  <div className="space-y-6 sm:space-y-8">
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
      <div className={clsx(
        "relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all",
        colorMode === 'dark'
          ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-white/20"
          : "bg-white/80 border-gray-200 hover:border-gray-300 backdrop-blur-sm"
      )}>
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
          </div>
          <div className="flex-1 w-full">
            <h3 className={clsx(
              "text-xl sm:text-2xl font-bold mb-2 sm:mb-3",
              colorMode === 'dark' ? "text-white" : "text-gray-900"
            )}>Education</h3>
            <p className={clsx(
              "text-base sm:text-lg mb-1",
              colorMode === 'dark' ? "text-slate-200" : "text-gray-700"
            )}>B.E. in Computer Science Engineering (Data Science)</p>
            <p className={clsx(
              "text-sm sm:text-base mb-3",
              colorMode === 'dark' ? "text-slate-400" : "text-gray-500"
            )}>St. John College of Engineering & Management</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-green-600 font-bold border border-green-500/30 text-sm sm:text-base">
                CGPA: 9.59/10
              </span>
              <span className={clsx("text-sm sm:text-base", colorMode === 'dark' ? "text-slate-400" : "text-gray-500")}>2023 – 2027</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
      <div className={clsx(
        "relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all",
        colorMode === 'dark'
          ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-white/20"
          : "bg-white/80 border-gray-200 hover:border-gray-300 backdrop-blur-sm"
      )}>
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
          </div>
          <div className="flex-1 w-full">
            <h3 className={clsx(
              "text-xl sm:text-2xl font-bold mb-2 sm:mb-3",
              colorMode === 'dark' ? "text-white" : "text-gray-900"
            )}>Leadership</h3>
            <div className="space-y-2 sm:space-y-3">
              {responsibilities.slice(0, 3).map((resp, i) => {
                const Icon = resp.icon;
                return (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className={clsx("text-sm sm:text-base", colorMode === 'dark' ? "text-slate-200" : "text-gray-700")}>{resp.title}</p>
                      <p className={clsx(
                        "text-xs sm:text-sm",
                        colorMode === 'dark' ? "text-slate-400" : "text-gray-500"
                      )}>{resp.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="space-y-4 sm:space-y-6">
    <div className={clsx(
      "text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border",
      colorMode === 'dark'
        ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 text-slate-300"
        : "bg-white/80 border-gray-200 text-gray-600 backdrop-blur-sm"
    )}>
      <p>
        Passionate about building <span className="text-blue-600 dark:text-blue-400 font-semibold">intelligent solutions</span> that solve real-world problems. 
        My journey spans across AI/ML, full-stack development, and system design, with a focus on creating 
        <span className="text-purple-600 dark:text-purple-400 font-semibold"> impactful technology</span>.
      </p>
      <p>
        Currently pursuing B.E. in Computer Science with a stellar <span className="text-green-600 dark:text-green-400 font-semibold">9.59 CGPA</span>, 
        while actively contributing to the tech community as a <span className="text-blue-600 dark:text-blue-400 font-semibold">GDG AIML/DSA Lead</span> and 
        mentoring 380+ students.
      </p>
      <p>
        Recognized as a <span className="text-yellow-600 dark:text-yellow-400 font-semibold">SIH 2024 Grand Finalist</span> and 
        <span className="text-pink-600 dark:text-pink-400 font-semibold"> E-Cell IIT Bombay Semifinalist</span>, 
        I thrive on innovation and technical excellence in competitive environments.
      </p>
    </div>

    <div className={clsx(
      "p-4 sm:p-6 rounded-xl sm:rounded-2xl border",
      colorMode === 'dark'
        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-400/30"
        : "bg-blue-50/80 border-blue-200 backdrop-blur-sm"
    )}>
      <h4 className={clsx(
        "text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2",
        colorMode === 'dark' ? "text-white" : "text-gray-900"
      )}>
        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
        Programming Profiles
      </h4>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {[
          { name: 'Codeforces', stat: '800+ rating' },
          { name: 'LeetCode', stat: '100+ solved' },
          { name: 'GeeksforGeeks', stat: 'Top 10 in College' },
          { name: 'GitHub', stat: '25+ repos' }
        ].map((profile, i) => (
          <div key={i} className={clsx(
            "p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-colors",
            colorMode === 'dark'
              ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
              : "bg-white border-gray-200 hover:bg-gray-50 text-gray-700"
          )}>
            <p className="font-semibold text-blue-600 dark:text-blue-300 text-sm sm:text-base">{profile.name}</p>
            <p className={clsx(
              "text-xs sm:text-sm",
              colorMode === 'dark' ? "text-slate-400" : "text-gray-500"
            )}>{profile.stat}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={clsx(
      "p-4 sm:p-6 rounded-xl sm:rounded-2xl border",
      colorMode === 'dark'
        ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-400/30"
        : "bg-green-50/80 border-green-200 backdrop-blur-sm"
    )}>
      <h4 className={clsx(
        "text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2",
        colorMode === 'dark' ? "text-white" : "text-gray-900"
      )}>
        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
        Languages
      </h4>
      <p className={clsx("text-sm sm:text-base", colorMode === 'dark' ? "text-slate-300" : "text-gray-600")}>
        <span className="text-green-600 dark:text-green-400 font-semibold">Telugu</span> (Native) • 
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> English, Hindi, Marathi</span> (Fluent)
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Achievements Section */}
<section 
  ref={el => sectionsRef.current['achievements'] = el}
  id="achievements"
  className={clsx(
    "py-32 px-6 transition-all duration-1000",
    colorMode === 'dark' 
      ? "bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"
      : "bg-gradient-to-b from-transparent via-blue-50/50 to-transparent",
    visibleSections['achievements'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  )}
>
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 px-4">
  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
    Achievements
  </h2>
</div>
<p className={clsx(
  "text-sm sm:text-base md:text-lg mb-12 sm:mb-16 ml-8 sm:ml-12 px-4",
  colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
)}>
  Recognition and accolades from prestigious competitions
</p>
    
    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 px-4">
  {achievements.map((achievement, i) => {
    const Icon = achievement.icon;
    return (
      <a 
        key={i}
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />
        
        <div className={clsx(
          "relative h-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg",
          colorMode === 'dark'
            ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-white/30"
            : "bg-white/80 border-gray-200 hover:border-gray-300 backdrop-blur-sm"
        )}>
          <div className={clsx(
            "mb-4 sm:mb-6 h-32 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl border overflow-hidden group-hover:scale-105 transition-transform duration-500 relative",
            colorMode === 'dark' 
              ? "border-white/10" 
              : "border-gray-200"
          )}>
            <img 
              src={achievement.image} 
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-white bg-black/50 rounded-full p-1" />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${achievement.color} bg-opacity-20 flex-shrink-0`}>
              <Icon className={clsx(
                "w-6 h-6 sm:w-8 sm:h-8",
                colorMode === 'dark' ? "text-white" : "text-gray-800"
              )} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={clsx(
                "text-lg sm:text-xl md:text-2xl font-bold mb-1 transition-colors truncate",
                colorMode === 'dark' 
                  ? "text-white group-hover:text-blue-400" 
                  : "text-gray-900 group-hover:text-blue-600"
              )}>
                {achievement.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-blue-600 dark:text-blue-300 font-semibold">
                {achievement.subtitle}
              </p>
            </div>
            <ExternalLink className={clsx(
              "w-4 h-4 sm:w-5 sm:h-5 transition-all group-hover:rotate-45 flex-shrink-0",
              colorMode === 'dark'
                ? "text-slate-400 group-hover:text-blue-400"
                : "text-gray-400 group-hover:text-blue-600"
            )} />
          </div>
          
          <p className={clsx("text-sm sm:text-base", colorMode === 'dark' ? "text-slate-300" : "text-gray-700")}>{achievement.desc}</p>

          <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full" />
        </div>
      </a>
    );
  })}
</div>
  </div>
</section>


            {/* Featured Projects Section */}
<section 
  ref={el => sectionsRef.current['projects'] = el}
  id="projects"
  className={clsx(
    "py-32 px-6 transition-all duration-1000",
    colorMode === 'dark' 
      ? "bg-gradient-to-b from-transparent via-slate-900/20 to-transparent"
      : "bg-gradient-to-b from-transparent via-gray-50/50 to-transparent",
    visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  )}
>
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 px-4">
  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
    Featured Projects
  </h2>
</div>
<p className={clsx(
  "text-sm sm:text-base md:text-lg mb-12 sm:mb-16 ml-8 sm:ml-12 px-4",
  colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
)}>
  Showcasing innovative solutions with real-world impact
</p>

{/* Projects Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
  {projects.slice(0, 3).map((project, i) => (
    <div
      key={i}
      className={clsx(
        "group relative rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 hover:scale-105 hover:shadow-2xl",
        colorMode === 'dark'
          ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-purple-400/50"
          : "bg-white/80 border-gray-200 hover:border-purple-400/50 backdrop-blur-sm"
      )}
    >
      <div className={`h-2 sm:h-3 bg-gradient-to-r ${project.gradient}`} />
      
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <h3 className={clsx(
            "text-lg sm:text-xl md:text-2xl font-bold",
            colorMode === 'dark' ? "text-white" : "text-gray-900"
          )}>
            {project.title}
          </h3>
          <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20 flex-shrink-0`}>
            <Rocket className={clsx(
              "w-4 h-4 sm:w-5 sm:h-5",
              colorMode === 'dark' ? "text-white" : "text-gray-700"
            )} />
          </div>
        </div>

        <p className={clsx(
          "mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base",
          colorMode === 'dark' ? "text-slate-300" : "text-gray-600"
        )}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {project.tech.map((tech, j) => (
            <span
              key={j}
              className={clsx(
                "px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border font-medium",
                colorMode === 'dark'
                  ? "bg-white/5 border-white/10 text-blue-300"
                  : "bg-blue-50 border-blue-200 text-blue-700"
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={clsx(
          "p-2 sm:p-3 rounded-lg sm:rounded-xl border",
          colorMode === 'dark'
            ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-400/20"
            : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200"
        )}>
          <p className={clsx(
            "text-xs sm:text-sm font-semibold text-center",
                        colorMode === 'dark' ? "text-purple-300" : "text-purple-700"
          )}>
            ⚡ {project.highlight}
          </p>
        </div>
      </div>

      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
    </div>
  ))}
</div>
     


    {/* Show More Button */}
    <div className="text-center px-4">
  <button
    onClick={() => window.location.href = '/projects'}
    className={clsx(
      "group px-6 py-3 sm:px-8 sm:py-4 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-sm sm:text-base",
      colorMode === 'dark'
        ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-400/30 hover:border-purple-400/60 text-white hover:bg-purple-500/20"
        : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300 hover:border-purple-400 text-purple-700 hover:bg-purple-100"
    )}
  >
    <span className="flex items-center gap-2 sm:gap-3">
      View All Projects
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </button>
</div>

{/* Stats Bar */}
<div className={clsx(
  "mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border mx-4",
  colorMode === 'dark'
    ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-white/10"
    : "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
)}>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
    {[
      { number: '20+', label: 'Projects Built', icon: Code },
      { number: '500+', label: 'Users Reached', icon: Users },
      { number: '95%', label: 'Success Rate', icon: Trophy },
      { number: '2', label: 'Awards Won', icon: Award }
    ].map((stat, i) => {
      const Icon = stat.icon;
      return (
        <div key={i} className="group">
          <Icon className={clsx(
            "w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 transition-colors",
            colorMode === 'dark' 
              ? "text-blue-400 group-hover:text-purple-400" 
              : "text-blue-500 group-hover:text-purple-500"
          )} />
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {stat.number}
          </div>
          <div className={clsx(
            "text-xs sm:text-sm mt-1",
            colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
          )}>
            {stat.label}
          </div>
        </div>
      );
    })}
  </div>
</div>
</div>
</section>

 {/* Skills Section */}
<section 
  ref={el => sectionsRef.current['skills'] = el}
  id="skills"
  className={clsx(
    "py-20 sm:py-32 px-4 sm:px-6 transition-all duration-1000",
    visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  )}
>
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Technical Arsenal
      </h2>
    </div>
    <p className={clsx(
      "text-sm sm:text-base md:text-lg mb-8 sm:mb-16 ml-8 sm:ml-12",
      colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
    )}>Comprehensive skill set across modern tech stack</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Object.entries(skills).map(([category, items], i) => (
        <div 
          key={category}
          className={clsx(
            "group relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border transition-all duration-500 hover:scale-105",
            colorMode === 'dark'
              ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-blue-400/50"
              : "bg-white/80 border-gray-200 hover:border-blue-400/50 backdrop-blur-sm"
          )}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-500" />
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 group-hover:w-3 sm:group-hover:w-4 transition-all duration-300 flex-shrink-0" />
              <h3 className={clsx(
                "text-base sm:text-lg md:text-xl lg:text-2xl font-bold",
                colorMode === 'dark' ? "text-blue-300" : "text-blue-600"
              )}>{category}</h3>
            </div>
            
            {/* Mobile: Horizontal scroll pills, Desktop: Vertical list */}
            <div className="block sm:hidden">
              {/* Mobile Compact Pills Layout */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span
                    key={j}
                    className={clsx(
                      "px-3 py-1.5 rounded-full text-xs font-medium border",
                      colorMode === 'dark'
                        ? "bg-blue-500/10 border-blue-400/20 text-slate-300"
                        : "bg-blue-50 border-blue-200 text-gray-700"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Desktop: Traditional List */}
            <ul className={clsx(
              "hidden sm:block space-y-2 text-sm md:text-base",
              colorMode === 'dark' ? "text-slate-300" : "text-gray-700"
            )}>
              {items.map((skill, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Experience Section */}
<section 
  ref={el => sectionsRef.current['experience'] = el}
  id="experience"
  className={clsx(
    "py-20 sm:py-32 px-4 sm:px-6 transition-all duration-1000",
    colorMode === 'dark' 
      ? "bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"
      : "bg-gradient-to-b from-blue-50/30 via-indigo-50/50 to-purple-50/30",
    visibleSections['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  )}
>
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <Briefcase className={clsx(
        "w-6 h-6 sm:w-8 sm:h-8",
        colorMode === 'dark' ? "text-blue-400" : "text-blue-600"
      )} />
      <h2 className={clsx(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent",
        colorMode === 'dark'
          ? "bg-gradient-to-r from-blue-400 to-cyan-400"
          : "bg-gradient-to-r from-blue-600 to-cyan-600"
      )}>
        Experience
      </h2>
    </div>
    <p className={clsx(
      "text-sm sm:text-base md:text-lg mb-12 sm:mb-16 ml-8 sm:ml-12",
      colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
    )}>Professional journey and impactful roles</p>
    
    <div className="space-y-6 sm:space-y-8">
      {experience.map((exp, i) => (
        <div 
          key={i} 
          className={clsx(
            "relative group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 hover:scale-[1.02]",
            colorMode === 'dark'
              ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10"
              : "bg-white/90 border-gray-200 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm"
          )}
        >
          <div className={clsx(
            `absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500`,
            colorMode === 'dark'
              ? "opacity-0 group-hover:opacity-20"
              : "opacity-0 group-hover:opacity-10"
          )} />
          
          <div className={clsx(
            "absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-bl-full opacity-20 transition-all duration-500",
            colorMode === 'dark'
              ? `bg-gradient-to-bl ${exp.color}`
              : `bg-gradient-to-bl ${exp.color}`
          )} />
          
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
              <div className="flex-1 mb-3 md:mb-0">
                <h3 className={clsx(
                  "text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:translate-x-2 transition-transform duration-300",
                  colorMode === 'dark' ? "text-blue-300" : "text-blue-700"
                )}>{exp.role}</h3>
                <p className={clsx(
                  "text-base sm:text-lg md:text-xl font-semibold mb-1",
                  colorMode === 'dark' ? "text-slate-300" : "text-gray-800"
                )}>{exp.company}</p>
              </div>
              <div className={clsx(
                "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold w-fit",
                colorMode === 'dark'
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  : "bg-blue-100 text-blue-700 border border-blue-300"
              )}>
                {exp.period}
              </div>
            </div>
            
            <ul className={clsx(
              "space-y-2 sm:space-y-3 text-sm sm:text-base",
              colorMode === 'dark' ? "text-slate-300" : "text-gray-700"
            )}>
              {exp.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 sm:gap-3 group/item">
                  <div className={clsx(
                    "mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300",
                    colorMode === 'dark' ? "bg-blue-400" : "bg-blue-600"
                  )} />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Certifications Section */}
<section 
  ref={el => sectionsRef.current['certifications'] = el}
  id="certifications"
  className={clsx(
    "py-20 sm:py-32 px-4 sm:px-6 transition-all duration-1000",
    visibleSections['certifications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  )}
>
  <div className="max-w-7xl mx-auto text-center">
    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
        Certifications
      </h2>
    </div>
    <p className={clsx(
      "text-sm sm:text-base md:text-lg mb-12 sm:mb-16",
      colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
    )}>Professional and academic certifications earned</p>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {certifications.map((cert, i) => (
        <div 
          key={i}
          className={clsx(
            "p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 hover:scale-105",
            colorMode === 'dark'
              ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-yellow-400/40"
              : "bg-white/80 border-gray-200 hover:border-yellow-400/40 backdrop-blur-sm"
          )}
        >
          <div className="flex items-start gap-2 sm:gap-3">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className={clsx(
              "font-medium text-left text-sm sm:text-base",
              colorMode === 'dark' ? "text-slate-200" : "text-gray-700"
            )}>{cert}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Responsibilities Section */}
<section
  ref={el => sectionsRef.current['responsibilities'] = el}
  id="responsibilities"
  className={clsx(
    "py-20 sm:py-32 px-4 sm:px-6 transition-all duration-1000",
    visibleSections['responsibilities']
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-20"
  )}
>
  <div className="max-w-7xl mx-auto text-center">
    {/* Header */}
    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Responsibilities
      </h2>
    </div>

    {/* Subtitle */}
    <p
      className={clsx(
        "text-sm sm:text-base md:text-lg mb-12 sm:mb-16",
        colorMode === "dark" ? "text-slate-400" : "text-gray-600"
      )}
    >
      Roles I hold in the community and college — mentoring, organizing and leading technical initiatives.
    </p>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
      {responsibilities.map((resp, i) => {
        const Icon = resp.icon;
        return (
          <div
            key={i}
            className={clsx(
              "relative group p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 hover:scale-105",
              colorMode === "dark"
                ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-blue-400/40"
                : "bg-white/80 border-gray-200 hover:border-blue-400/40 backdrop-blur-sm"
            )}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex-shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-white" />
              </div>

              <div className="flex-1">
                <h3
                  className={clsx(
                    "font-bold mb-1 text-base sm:text-xl",
                    colorMode === "dark"
                      ? "text-slate-100"
                      : "text-gray-800"
                  )}
                >
                  {resp.title}
                </h3>
                <p
                  className={clsx(
                    "text-xs sm:text-sm md:text-base",
                    colorMode === "dark"
                      ? "text-slate-400"
                      : "text-gray-600"
                  )}
                >
                  {resp.detail}
                </p>
              </div>
            </div>
           

            {/* Footer index */}
            <div
              className={clsx(
                "absolute bottom-3 right-3 text-[10px] sm:text-xs",
                colorMode === "dark"
                  ? "text-slate-500"
                  : "text-gray-400"
              )}
            >
              {i + 1}/{responsibilities.length}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Footer */}
<footer className={clsx(
  "py-12 sm:py-16 border-t backdrop-blur-xl text-center",
  colorMode === 'dark'
    ? "bg-black/30 border-white/10"
    : "bg-white/80 border-gray-200"
)}>
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-4">
      Let's Build Something Great
    </h3>
    <p className={clsx(
      "mb-5 sm:mb-6 text-sm sm:text-base",
      colorMode === 'dark' ? "text-slate-400" : "text-gray-600"
    )}>
      Open for collaborations, freelance projects, and innovative ideas.  
      Reach out – let's create something impactful together.
    </p>
    <a 
      href="mailto:prathameshjakkula60@gmail.com"
      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 text-white font-semibold text-sm sm:text-base"
    >
      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>Contact Me</span>
    </a>
<div className="w-full flex justify-center items-center mt-4">
  <a
    href="https://www.buymeacoffee.com/prathameshu"
    target="_blank"
    rel="noopener noreferrer"
    className="
      !h-[60px] !w-[217px]
      flex items-center justify-center gap-2
      rounded-xl font-semibold text-base
      transition-all duration-300
      bg-yellow-400 hover:bg-yellow-300
      dark:bg-yellow-500 dark:hover:bg-yellow-400
      text-black
      shadow-md hover:shadow-lg
      hover:scale-[1.03]
    "
  >
    🤖 Fund My AI Project
  </a>
</div>

   

 
 

    
    <div className={clsx(
      "mt-8 sm:mt-10 flex justify-center gap-4 sm:gap-6",
      colorMode === 'dark' ? "text-slate-400" : "text-gray-500"
    )}>
      <a href="https://github.com/Prathamesh01110" target="_blank" className="hover:text-blue-500 transition-colors">
        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="https://www.linkedin.com/in/prathamesh-jakkula-496a39285/" target="_blank" className="hover:text-blue-500 transition-colors">
        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="mailto:prathameshjakkula680@gmail.com" className="hover:text-blue-500 transition-colors">
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>

    <p className={clsx(
      "text-xs sm:text-sm mt-8 sm:mt-10",
      colorMode === 'dark' ? "text-slate-500" : "text-gray-400"
    )}>
      © {new Date().getFullYear()} Prathamesh Jakkula. All Rights Reserved.
    </p>
  </div>
</footer>
   </div>
  );
}