"use client";

import React, { useState, useEffect } from "react";
import { Tenant } from "@/lib/types";
import DataTable from './dataTable';
import { mockUsers } from '../mock-data';

// --- NEW COMPONENT: Design Gallery (Tailwind Version) ---
const DesignGallery = ({ index }: { index: number }) => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  // MOCK DATA - Replace with your actual design portfolio items
  const designs = [
    {
      id: 1,
      title: 'Website Design',
      category: 'UI / UX',
      image: 'https://ramoncolon.design/wp-content/uploads/2017/10/ktlo-homepage-v2.png', // 
      description: 'High-fidelity mockup focused on retention and monetization.'
    },
    {
      id: 2,
      title: 'Website Design',
      category: 'UI / UX',
      image: 'https://ramoncolon.design/wp-content/uploads/2017/10/WPWX2-homepage-v4-opt.jpg', // 
      description: 'High-fidelity mockup focused on retention, monetization, and interactivity.'
    },
    {
      id: 3,
      title: 'Graphic Design',
      category: 'Vector Art',
      image: 'https://ramoncolon.design/wp-content/uploads/2017/10/funniest-couple-graphic-2-V2-red-thumb-opt.jpg', // 
      description: 'Banner for client contest.'
    },
    {
      id: 4,
      title: 'Graphic Design',
      category: 'Vector Art',
      image: 'https://ramoncolon.design/wp-content/uploads/2017/10/fathers-day-contest-final.jpg', // 
      description: 'Banner for client promotion.'
    },    
  ];

  // Close modal on 'Esc'
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div 
      className="relative w-full py-24 bg-white text-gray-900 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]"
      style={{ zIndex: index + 11 }} // Ensures it sits above previous sections
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 border-b-2 border-gray-100 pb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Design & Prototyping
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Bridging the gap between static visuals and interactive code.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-screen flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-4xl leading-none"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// 1. HELPER: Social Icon Switcher
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      );
    case "instagram":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      );
    case "email":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      );
    default:
      return (
         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      );
  }
};


// 2. HELPER: The Parallax Card
const ParallaxSection = ({ 
  title, 
  subtitle, 
  color, 
  image, 
  index 
}: { 
  title: string; 
  subtitle: string; 
  color: string; 
  image?: string; 
  index: number; 
}) => (
  <div 
    className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
    style={{ 
      backgroundColor: color, 
      zIndex: index + 10, 
    }}
  >
    {image && (
      <>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </>
    )}

    <div className="relative z-10 max-w-4xl text-center px-4">
      <h2 className="text-[10vh] md:text-[12vh] leading-none font-black text-white tracking-tighter opacity-90 drop-shadow-lg">
        {title}
      </h2>
      <p className="mt-4 text-xl md:text-3xl text-white/90 font-medium uppercase tracking-widest drop-shadow-md whitespace-pre-line">
        {subtitle}
      </p>
    </div>
  </div>
);


// 3. HELPER: Portfolio Grid Section (Websites)
const PortfolioGrid = ({ 
  data, 
  color,
  index 
}: { 
  data: NonNullable<Tenant['portfolio']>; 
  color: string;
  index: number;
}) => (
  <div 
    className="relative top-0 min-h-screen w-full flex flex-col items-center py-20 bg-gray-50 text-gray-900 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
    style={{ 
      zIndex: index + 10,
      backgroundColor: "#f3f4f6"
    }}
  >
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase text-gray-900">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {data.items.map((item, i) => (
          <a 
            key={i} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags?.map(tag => (
                  <span key={tag} className="text-xs font-bold px-3 py-1 bg-gray-100 rounded-full text-gray-600 uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              <div className="flex items-center text-sm font-bold text-gray-900 uppercase tracking-widest">
                View Project 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);


// 4. MAIN COMPONENT 
export default function ParallaxLayout({ tenant }: { tenant: Tenant }) {
  const cardColors = [
    tenant.theme.primaryColor, 
    "#1e293b",                 
    "#f59e0b",                
  ];

  // Calculate index for the designs section
  const baseIndex = (tenant.content.sections?.length || 0);

  return (
    <div className="relative bg-black min-h-screen font-sans">
      
      {/* Intro Hero */}
      <div className="h-screen flex flex-col items-center justify-center bg-zinc-900 text-white sticky top-0 z-0">
         <h1 className="text-8xl font-bold mb-6">{tenant.name}</h1>
         <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-400 text-center px-4">
            {tenant.content.description}
         </h2>
         <div className="animate-bounce mt-10">Scroll Down ↓</div>
      </div>

      {/* Standard Parallax Sections */}
      {tenant.content.sections?.map((section, index) => (
        <ParallaxSection
          key={index}
          index={index}
          title={section.title}
          subtitle={section.subtitle}
          image={section.image}
          color={cardColors[index % cardColors.length]}
        />
      ))}

      {/* Portfolio Grid Section (Websites) */}
      {tenant.portfolio && (
        <PortfolioGrid 
          data={tenant.portfolio} 
          color="#f3f4f6"
          index={baseIndex + 1} 
        />
      )}

      {/* --- NEW SECTION: Design Gallery --- */}
      <DesignGallery index={baseIndex + 2} />


      {/* Footer */}
      <footer className="relative z-[100] bg-white text-black py-24 text-center min-h-[50vh] flex flex-col items-center justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        
        <div className="flex gap-4 flex-wrap justify-center px-4">
          {tenant.socials && Object.entries(tenant.socials).map(([platform, url]) => {
            const href = platform === 'email' && !url.startsWith('mailto:') ? `mailto:${url}` : url;
            return (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white text-lg font-bold transition-transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: tenant.theme.primaryColor }}
              >
                <SocialIcon platform={platform} />
                <span className="capitalize">{platform}</span>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-gray-400 text-sm">
           &copy; {new Date().getFullYear()} {tenant.name}
        </div>
      </footer>
      <DataTable data={mockUsers} itemsPerPage={10} />
    </div>
  );
}