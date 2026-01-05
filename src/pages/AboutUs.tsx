// AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { 
  Target, 
  Users, 
  GraduationCap, 
  Building2, 
  ArrowRight,
  Award,
  HeartHandshake,
  TrendingUp,
  Globe,
  BookOpen,
  Lightbulb,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const AboutUs = () => {
  const [ref, isInView] = useInView();
  const teamContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamContainerRef.current) {
      const scrollAmount = 300;
      teamContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { number: '10,000+', label: 'Students Empowered', icon: GraduationCap },
    { number: '500+', label: 'Industry Partners', icon: Building2 },
    { number: '2,000+', label: 'Projects Completed', icon: Award },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: 'Bridging Gaps',
      description: 'Creating meaningful connections between academia and industry',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving to meet the changing needs of civil engineering',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Maintaining highest standards in education and industry readiness',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making quality education and opportunities accessible to all',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const team = [
    {
      name: 'Aarav Sharma',
      role: 'Founder & CEO',
      bio: 'Former structural engineer with 15+ years in construction industry',
      expertise: 'Structural Design & Industry Relations',
      image: '/team/aarav.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Education',
      bio: 'PhD in Civil Engineering with passion for curriculum development',
      expertise: 'Curriculum Design & Academic Partnerships',
      image: '/team/priya.jpg'
    },
    {
      name: 'Rohan Mehta',
      role: 'Industry Relations',
      bio: 'Expert in corporate partnerships and workforce development',
      expertise: 'Corporate Partnerships & Placement',
      image: '/team/rohan.jpg'
    },
    {
      name: 'Ananya Singh',
      role: 'Technology Lead',
      bio: 'Full-stack developer focused on educational technology',
      expertise: 'Platform Development & EdTech',
      image: '/team/ananya.jpg'
    },
    {
      name: 'Vikram Joshi',
      role: 'Senior Mentor',
      bio: 'Civil engineer with 20+ years in infrastructure projects',
      expertise: 'Project Management & Site Execution',
      image: '/team/vikram.jpg'
    },
    {
      name: 'Neha Gupta',
      role: 'Career Coach',
      bio: 'HR professional specializing in engineering placements',
      expertise: 'Career Counseling & Interview Preparation',
      image: '/team/neha.jpg'
    },
    {
      name: 'Rajiv Malhotra',
      role: 'Industry Expert',
      bio: 'Consulting structural engineer with international experience',
      expertise: 'Structural Analysis & Design',
      image: '/team/rajiv.jpg'
    },
    {
      name: 'Sanjay Verma',
      role: 'Software Trainer',
      bio: 'Certified trainer for AutoCAD, Revit, and STAAD Pro',
      expertise: 'CAD/BIM Software Training',
      image: '/team/sanjay.jpg'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Buniyaad Founded', description: 'Started with a vision to transform civil engineering education' },
    { year: '2021', event: 'First 1000 Students', description: 'Reached milestone of 1000 registered students' },
    { year: '2022', event: 'Industry Partnerships', description: 'Onboarded 50+ construction companies as partners' },
    { year: '2023', event: 'Platform Launch', description: 'Launched comprehensive learning and collaboration platform' },
    { year: '2024', event: 'Global Expansion', description: 'Expanding to serve international students and companies' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24" ref={ref}>
      {/* Hero Section - Updated Background */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')` }}>
        <div className="absolute inset-0 bg-black opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Building <span className="text-blue-400">Futures</span>, Creating <span className="text-green-400">Foundations</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Bridging the gap between civil engineering education and industry requirements through innovation and collaboration.
          </p>
          <p className="mt-4 text-gray-300 italic font-medium text-lg">Educate • Connect • Empower • Transform</p>
          
          {/* Stats bar for credibility */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className={`group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
              isInView ? 'animate-slideUp' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To democratize civil engineering education by providing industry-relevant skills, 
                practical experience, and direct career pathways for students while offering 
                companies access to pre-trained, job-ready talent.
              </p>
              <div className="space-y-3">
                {['Industry-aligned curriculum', 'Practical project experience', 'Mentorship programs', 'Direct job placements'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vision Card */}
            <div className={`group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
              isInView ? 'animate-slideUp' : 'opacity-0'
            }`} style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="text-green-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We envision a world where every civil engineering student graduates with 
                practical industry experience, and every construction company finds 
                perfectly matched, skilled professionals seamlessly.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700 italic font-medium">
                  "To become the bridge that transforms civil engineering education 
                  and creates the next generation of industry-ready professionals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple observation to a transformative platform
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isInView ? 'animate-slideUp' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900">The Problem We Solved</h3>
              <p className="text-gray-600 leading-relaxed">
                While working in the construction industry, our founder noticed a critical gap: 
                fresh civil engineering graduates had theoretical knowledge but lacked practical 
                skills required by employers. Companies spent months training new hires, while 
                talented students struggled to find relevant opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Buniyaad was born from this need - to create a platform that bridges this gap 
                through industry-aligned education, real project experience, and direct 
                industry connections.
              </p>
            </div>
            
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 ${
              isInView ? 'animate-slideUp' : 'opacity-0'
            }`} style={{ animationDelay: '200ms' }}>
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Impact in Numbers</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: '6 months', description: 'Training time saved', icon: Clock },
                  { metric: '3x', description: 'Higher placement rate', icon: TrendingUp },
                  { metric: '40%', description: 'Salary increase', icon: Award },
                  { metric: '94%', description: 'Satisfaction rate', icon: HeartHandshake }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <IconComponent className="text-blue-600" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Buniyaad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isInView ? 'animate-slideUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300" size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    

      {/* Timeline Section */}
    <section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        Our Roadmap
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
        A refined timeline showcasing our growth and future ambitions
      </p>
    </div>

    <div className="relative">
      {/* Clean Black Dotted Line */}
      <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 border-l-4 border-dotted border-black h-full"></div>

      {milestones.map((milestone, index) => {
        const randomSide = Math.random() > 0.5 ? "left" : "right";

        return (
          <div
            key={index}
            className={`relative mb-24 flex flex-col ${
              randomSide === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse md:text-right"
            } 
            items-start transition-all duration-700 ease-out
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            
            {/* Icon + Year */}
            <div className="flex-shrink-0 relative z-20">
              <div className="w-16 h-16 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                  <MapPin size={22} className="text-white" />
                </div>
              </div>

              {/* Year Tag */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 
                              bg-black text-white text-sm font-semibold rounded-full shadow-lg">
                {milestone.year}
              </div>
            </div>

            {/* Card */}
            <div className={`flex-1 mt-8 md:mt-0 ${randomSide === "left" ? "md:ml-12" : "md:mr-12"}`}>
              <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.08)] border border-gray-200 
                              hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-500">

                {/* Soft hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                                bg-gradient-to-r from-gray-200/30 to-gray-300/30 blur-xl transition"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>

    {/* Current Status */}
    <div
      className={`mt-20 text-center p-10 rounded-2xl bg-white shadow-[0_6px_25px_rgba(0,0,0,0.08)] border border-gray-200 
                  transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="w-3 h-3 bg-green-600 rounded-full animate-ping"></div>
        <span className="text-lg text-green-700 font-semibold">Current Status</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900">Expanding Globally</h3>
      <p className="text-gray-600 mt-2 text-lg">
        We’re broadening our reach to empower learners and organizations worldwide.
      </p>
    </div>

  </div>
</section>


      {/* Footer */}
     
    </div>
  );
};

export default AboutUs;
