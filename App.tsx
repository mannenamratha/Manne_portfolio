import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Code, Database, Smartphone, Globe, Award, Calendar, GraduationCap, Briefcase, User, Star, Menu, X, Shield, Brain, Cloud, Search } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 95, icon: <Code className="w-6 h-6" />, category: 'Programming' },
    { name: 'Java', level: 90, icon: <Code className="w-6 h-6" />, category: 'Programming' },
    { name: 'C', level: 85, icon: <Code className="w-6 h-6" />, category: 'Programming' },
    { name: 'SQL', level: 88, icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'MongoDB', level: 80, icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'HTML/CSS', level: 85, icon: <Globe className="w-6 h-6" />, category: 'Web' },
    { name: 'Machine Learning', level: 90, icon: <Brain className="w-6 h-6" />, category: 'AI/ML' },
    { name: 'Data Science', level: 88, icon: <Award className="w-6 h-6" />, category: 'AI/ML' },
    { name: 'Cloud Engineering', level: 85, icon: <Cloud className="w-6 h-6" />, category: 'Cloud' },
    { name: 'AWS', level: 82, icon: <Cloud className="w-6 h-6" />, category: 'Cloud' }
  ];

  const projects = [
    {
      title: 'Microsoft Malware Prediction',
      description: 'Trained a LightGBM classification model on Microsoft\'s malware dataset achieving 96.2% accuracy and high F1-score in detecting malicious software through feature importance and behavioral analysis.',
      technologies: ['Python', 'LightGBM', 'Pandas', 'Scikit-learn', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      accuracy: '96.2%',
      githubUrl: '#',
      category: 'Machine Learning'
    },
    {
      title: 'Face Mask Detection',
      description: 'Built a real-time face mask detection model using CNN with TensorFlow and OpenCV, achieving 94% accuracy on test data, supporting public health compliance through live video stream analysis.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800',
      accuracy: '94%',
      githubUrl: '#',
      category: 'Computer Vision'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Created a content-based filtering movie recommendation engine using TF-IDF Vectorizer and Cosine Similarity, achieving 87% precision at top 5 recommendations for personalized movie suggestions.',
      technologies: ['Python', 'TF-IDF', 'Cosine Similarity', 'Pandas', 'Scikit-learn'],
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      accuracy: '87%',
      githubUrl: '#',
      category: 'Recommendation System'
    },
    {
      title: 'Password Generator',
      description: 'Developed a secure password generator in Python using secrets and string modules, capable of producing strong, randomized passwords with variable lengths and character sets, enhancing authentication security.',
      technologies: ['Python', 'Cryptography', 'Security', 'Random Generation'],
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      accuracy: '87.5%',
      githubUrl: '#',
      category: 'Security'
    }
  ];

  const experiences = [
    {
      title: 'Google AI-ML Virtual Internship',
      company: 'Google',
      period: 'April - June 2024',
      description: 'Applied machine learning algorithms and built predictive models, focusing on real-world AI solution deployment. Gained hands-on experience with Google\'s AI/ML tools and frameworks.',
      skills: ['Machine Learning', 'AI', 'Python', 'TensorFlow', 'Model Deployment'],
      type: 'Virtual Internship'
    },
    {
      title: 'AWS Cloud Virtual Internship',
      company: 'Amazon Web Services',
      period: 'October - November 2024',
      description: 'Designed and deployed cloud-based solutions using AWS services, enhancing cloud computing and infrastructure management skills. Worked with various AWS services for scalable solutions.',
      skills: ['AWS', 'Cloud Computing', 'Infrastructure', 'DevOps', 'Solution Architecture'],
      type: 'Virtual Internship'
    },
    {
      title: 'Microsoft Learn Student Ambassador',
      company: 'Microsoft',
      period: '2024',
      description: 'Promoted Microsoft technologies and learning resources within the student community. Organized workshops and events to help fellow students learn cloud and development technologies.',
      skills: ['Leadership', 'Community Building', 'Microsoft Azure', 'Public Speaking'],
      type: 'Leadership Role'
    },
    {
      title: 'Student Coordinator',
      company: 'Brainovision Solutions India Pvt. Ltd',
      period: '2024',
      description: 'Coordinated National Level Short Term Training Program, managing logistics and student engagement for technical training initiatives.',
      skills: ['Project Management', 'Coordination', 'Training', 'Leadership'],
      type: 'Coordination Role'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering (Data Science)',
      institution: 'Pragati Engineering College',
      location: 'Surampalem, Rajahmundry, Andhra Pradesh',
      period: '2022 – 2026',
      gpa: 'CGPA: 9.0/10',
      specialization: 'Specialization in Data Science',
      achievements: [
        'Certified Google Associate Cloud Engineer',
        'Microsoft Learn Student Ambassador',
        'Cisco CCNA and Cybersecurity Certified',
        'NPTEL Certified in Data Science with Python',
        '5⭐ ratings on HackerRank (Python, C, Java)',
        'Student Coordinator at National STTP by Brainovision'
      ]
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      institution: 'Sri Prakash Vidya Niketan',
      location: 'Rajahmundry, Andhra Pradesh',
      period: '2020 – 2022',
      gpa: 'Percentage: 94%',
      achievements: [
        'School Topper in Informatics Practices and English',
        'Participated in National Talent Search Examination (NTSE) – State Level',
        'Received "Student of the Year" award for all-round excellence',
        'Won First Prize in Inter-School Debate and Public Speaking Competitions',
        'Represented school at State-Level Science Fair with IoT-based Smart Home model'
      ]
    },
    {
      degree: 'High School (Class X)',
      institution: 'Oakwood School',
      location: 'Rajahmundry, Andhra Pradesh',
      period: '2018 – 2020',
      gpa: 'Percentage: 92%',
      achievements: [
        'Awarded "Best Outgoing Student" for academic and co-curricular excellence',
        'Secured 1st place in School-Level Science Exhibition (Smart Agriculture Project)',
        'Published articles in school magazine on tech innovation and AI awareness',
        'Won multiple inter-school quizzes in General Knowledge and Logical Reasoning',
        'Finalist in district-level Art & Creativity competition for digital poster design'
      ]
    }
  ];

  const certifications = [
    { name: 'Google Associate Cloud Engineer', provider: 'Google Cloud', category: 'Cloud' },
    { name: 'HackerRank Python (5-star)', provider: 'HackerRank', category: 'Programming' },
    { name: 'HackerRank Problem Solving', provider: 'HackerRank', category: 'Programming' },
    { name: 'HackerRank SQL', provider: 'HackerRank', category: 'Database' },
    { name: 'HackerRank Java (5-star)', provider: 'HackerRank', category: 'Programming' },
    { name: 'HackerRank C (5-star)', provider: 'HackerRank', category: 'Programming' },
    { name: 'Java Programming', provider: 'EdX', category: 'Programming' },
    { name: 'Data Structures and Algorithms', provider: 'EdX', category: 'Programming' },
    { name: 'Machine Learning', provider: 'EdX', category: 'AI/ML' },
    { name: 'Public Speaking', provider: 'EdX', category: 'Soft Skills' },
    { name: 'Data Science with Python', provider: 'NPTEL', category: 'Data Science' },
    { name: 'Machine Learning Using Python & SKLearn', provider: 'Google Developer Student Club', category: 'AI/ML' },
    { name: 'Cybersecurity', provider: 'Cisco', category: 'Security' },
    { name: 'CCNA', provider: 'Cisco', category: 'Networking' },
    { name: 'Wadhwani Employability Skilling Program (Advanced)', provider: 'Wadhwani Foundation', category: 'Professional' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100"></div>
        
        {/* Moving Pastel Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-88 h-88 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-diagonal"></div>
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-circular"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-300/30 to-purple-300/30 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-300/30 to-teal-300/30 transform rotate-12 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-lg border-b border-purple-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">Namratha Sai</div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === section
                        ? 'text-purple-600 font-medium scale-110'
                        : 'text-gray-700 hover:text-purple-600 hover:scale-105'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-purple-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-3 py-2 capitalize transition-colors ${
                      activeSection === section
                        ? 'text-purple-600 font-medium bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-indigo-200/40"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                Hi, I'm <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">Namratha Sai</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                AI/ML Engineer & Cloud Computing Enthusiast
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                Passionate about building intelligent systems and scalable cloud solutions. Specialized in Machine Learning, Data Science, and Cloud Engineering with proven track record in AI model development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all transform hover:scale-110 flex items-center gap-2 shadow-xl animate-pulse-gentle"
                >
                  View My Projects
                  <ExternalLink size={20} />
                </button>
                <a
                  href="https://drive.google.com/file/d/1AZvmnPHTXlVyvnR2WEbRuxKQSNvHd3mB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-400 bg-white/80 backdrop-blur-sm text-purple-600 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-all transform hover:scale-110 flex items-center gap-2 shadow-xl"
                >
                  Download Resume
                  <Download size={20} />
                </a>
              </div>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-purple-500" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-teal-100/60 to-cyan-100/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">About Me</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Computer Science Engineering student with expertise in AI/ML, Cloud Computing, and Software Development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <User className="text-emerald-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Background</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I'm a final-year Computer Science Engineering student with a passion for artificial intelligence, 
                  machine learning, and cloud computing. My journey includes building high-accuracy ML models, 
                  working with cutting-edge technologies, and earning multiple industry certifications including 
                  Google Associate Cloud Engineer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With hands-on experience in virtual internships at Google and AWS, I've developed expertise in 
                  deploying AI solutions and designing scalable cloud architectures. I'm also a Microsoft Learn 
                  Student Ambassador, actively contributing to the tech community.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-emerald-200/80 to-teal-200/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">ML Projects</h4>
                    <p className="text-gray-600">4+ Completed</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-200/80 to-cyan-200/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                    <p className="text-gray-600">15+ Earned</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-200/80 via-teal-200/80 to-cyan-200/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-emerald-600" size={20} />
                    <span className="text-gray-700">Rajahmundry, Andhra Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-emerald-600" size={20} />
                    <span className="text-gray-700">manne.namrathasai@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-emerald-600" size={20} />
                    <span className="text-gray-700">+91-7013167751</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href="https://www.linkedin.com/in/manne-namratha-sai-029771259" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 transform hover:scale-125 transition-all">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 transform hover:scale-125 transition-all">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-pink-100/60 to-fuchsia-100/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">Technical Skills</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive expertise across programming languages, AI/ML frameworks, and cloud technologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 border border-pink-200/50 hover:border-pink-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-rose-600 bg-gradient-to-br from-rose-100 to-pink-100 p-2 rounded-lg">{skill.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                      <p className="text-sm text-gray-500">{skill.category}</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 h-3 rounded-full transition-all duration-1000 animate-pulse-gentle"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-rose-200/80 to-pink-200/80 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Coursework</h4>
                <p className="text-sm text-gray-600">DSA, OS, DBMS, Computer Networks</p>
              </div>
              <div className="bg-gradient-to-br from-pink-200/80 to-fuchsia-200/80 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                <p className="text-sm text-gray-600">VS Code, GitHub, TensorFlow, OpenCV</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-200/80 to-purple-200/80 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                <p className="text-sm text-gray-600">AI/ML, Data Science, Cloud Engineering</p>
              </div>
              <div className="bg-gradient-to-br from-purple-200/80 to-rose-200/80 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Platforms</h4>
                <p className="text-sm text-gray-600">AWS, Google Cloud, HackerRank</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 via-blue-100/60 to-cyan-100/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Machine Learning and AI projects with proven accuracy and real-world applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden border border-blue-200/50">
                  <div className="h-48 bg-gradient-to-br from-indigo-200/80 to-cyan-200/80 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-green-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm animate-pulse-gentle">
                        {project.accuracy} Accuracy
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-indigo-200/80 to-blue-200/80 text-indigo-700 text-xs rounded-full backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 bg-gradient-to-r from-gray-200/80 to-gray-300/80 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 text-sm transition-colors transform hover:scale-110"
                      >
                        GitHub <Github size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-orange-100/60 to-red-100/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Experience & Leadership</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Virtual internships, leadership roles, and professional development experiences
              </p>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-orange-200/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-amber-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                      <span className="text-xs bg-gradient-to-r from-purple-200/80 to-pink-200/80 text-purple-800 px-3 py-1 rounded-full backdrop-blur-sm">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-amber-200/80 to-orange-200/80 text-amber-700 text-sm rounded-full backdrop-blur-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 via-purple-100/60 to-fuchsia-100/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">Education</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Academic journey from high school to specialized engineering degree
              </p>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-purple-200/50">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-violet-400 to-purple-400 p-3 rounded-lg shadow-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-violet-600 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="bg-gradient-to-r from-violet-200/80 to-purple-200/80 px-2 py-1 rounded backdrop-blur-sm">{edu.period}</span>
                        <span>•</span>
                        <span className="bg-gradient-to-r from-purple-200/80 to-fuchsia-200/80 px-2 py-1 rounded font-medium backdrop-blur-sm">{edu.gpa}</span>
                      </div>
                      {edu.specialization && (
                        <p className="text-purple-600 font-medium text-sm mb-3 bg-gradient-to-r from-purple-100/80 to-fuchsia-100/80 px-3 py-1 rounded-full inline-block backdrop-blur-sm">
                          💡 {edu.specialization}
                        </p>
                      )}
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Star className="text-yellow-500" size={16} />
                          Achievements:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 bg-gradient-to-r from-violet-100/80 to-purple-100/80 p-2 rounded-lg backdrop-blur-sm">
                              <span className="text-violet-500 mt-0.5">•</span>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-green-100/60 to-teal-100/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4">Certifications & Achievements</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry certifications and professional achievements demonstrating expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 border border-green-200/50">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-emerald-300 to-teal-300 p-2 rounded-lg shadow-lg">
                      <Award className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-emerald-600 text-sm font-medium mb-2">{cert.provider}</p>
                      <span className="text-xs bg-gradient-to-r from-emerald-200/80 to-teal-200/80 text-emerald-700 px-2 py-1 rounded-full backdrop-blur-sm">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Achievements */}
            <div className="mt-12 bg-gradient-to-r from-emerald-400/80 via-teal-400/80 to-cyan-400/80 backdrop-blur-lg rounded-2xl p-8 text-white shadow-2xl border border-white/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Special Achievements</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                    <Star className="mx-auto" size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">5-Star HackerRank</h4>
                  <p className="text-sm opacity-90">Achieved 5-star ratings in Python, C, and Java</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                    <Shield className="mx-auto" size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">Google Cloud Certified</h4>
                  <p className="text-sm opacity-90">Associate Cloud Engineer certification</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                    <Briefcase className="mx-auto" size={32} />
                  </div>
                  <h4 className="font-semibold mb-2">Student Ambassador</h4>
                  <p className="text-sm opacity-90">Microsoft Learn Student Ambassador</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 via-purple-800/80 to-slate-800/80"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">Get In Touch</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, and interesting AI/ML projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-3 rounded-lg border border-white/20">
                    <Mail className="text-purple-400" size={24} />
                    <span className="text-white">manne.namrathasai@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-3 rounded-lg border border-white/20">
                    <Phone className="text-purple-400" size={24} />
                    <span className="text-white">+91-7013167751</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-3 rounded-lg border border-white/20">
                    <MapPin className="text-purple-400" size={24} />
                    <span className="text-white">Rajahmundry, Andhra Pradesh, India</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/manne-namratha-sai-029771259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all transform hover:scale-125 shadow-xl"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#"
                    className="bg-gradient-to-r from-gray-500 to-gray-600 p-3 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-125 shadow-xl"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white py-3 rounded-lg hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-800/90 via-purple-800/90 to-slate-800/90 backdrop-blur-lg border-t border-purple-700/50 py-8 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm">
                © 2024 Manne Namratha Sai. All rights reserved.
              </div>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="https://www.linkedin.com/in/manne-namratha-sai-029771259" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors transform hover:scale-125">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors transform hover:scale-125">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;