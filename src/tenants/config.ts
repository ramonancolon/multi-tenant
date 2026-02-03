import { Tenant } from "@/lib/types";

export const tenants: Record<string, Tenant> = {
"ramonacolon.dev": { 
    id: "ramona",
    name: "Ramona Colon",
    domain: "ramonacolon.dev",
    layout: "parallax",
    theme: {
      primaryColor: "#861657", 
      secondaryColor: "#111827", 
      font: "sans-serif",
    },
    features: { showBlog: true, showContactForm: false },
    content: {
      headline: "Ramona Colon",
      description: "Technical Project Lead",
      // Data for parallax cards
        sections: [
        { 
            title: "WHO AM I?", 
            subtitle: "Front End Web Developer with 9+ years of experience architecting high-scale e-commerce and membership platforms.",
            image: "https://ramoncolon.design/wp-content/uploads/2017/10/pexels-photo-436784-opt-opt.jpg"
        },
        { 
            title: "FRONT END ENGINEERING", 
            subtitle: "Core Stack: React.js, TypeScript, Next.js, Apollo GraphQL, JavaScript (ES6+).\nEnterprise: Salesforce Commerce Cloud (SFCC), jQuery, Bootstrap, SCSS/SASS, PHP.\nUI & Design: Material UI, Tailwind CSS, Semantic HTML5, Adobe XD, Figma, Photoshop. Tools & Platforms: Git (GitHub/Bitbucket), Docker, Webpack, Vite, WordPress (Custom Themes/Plugins), Google Analytics/Matomo.",
            image: "https://ramoncolon.design/wp-content/uploads/2017/09/pexels-photo-247791-opt.jpg"
        },
        { 
            title: "WEB DESIGN", 
            subtitle: "Experience in Adobe XD, Figma, Photoshop creating web designs that optimize engagement and coversions once translated to code.",
            image: "https://ramoncolon.design/wp-content/uploads/2017/09/comp-construct-opt.jpg"
        },
        ]
    },
    socials: {
        linkedin: "https://www.linkedin.com/in/ramona-colon-640275a5/",
        email: "emailme@ramonacolon.dev",
        github: "https://github.com/ramonancolon",
        resume: "https://docs.google.com/document/d/1AsmsckahpzbS6IHpTikhjBoO_CCXDGyghnyiDa0MPuQ/edit?pli=1&tab=t.0",
    },
    // Inside "client-a.local" object:

portfolio: {
  title: "Selected Works",
  description: "A collection of high-performance e-commerce and subscription experiences.",
  items: [
    {
      title: "CUUP",
      description: "Modernized the frontend architecture for a DTC intimates brand, improving site speed and conversion.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/shopcuup.png",
      link: "https://shopcuup.com",
      tags: ["Salesforce Commerce Cloud", "React", "Adobe Analytics"]
    },
    {
      title: "DIA & Co",
      description: "Led the development of the 'Style Box' subscription feature and overhauled the checkout flow.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/dia.png",
      link: "https://www.dia.com",
      tags: ["Salesforce Commerce Cloud", "React", "Adobe Analytics"]
    },
    {
      title: "Brylane Home",
      description: "Enterprise-level e-commerce implementation handling thousands of SKUs and complex state.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/brylanehome.png",
      link: "https://www.brylanehome.com/",
      tags: ["Salesforce Commerce Cloud", "React", "Adobe Analytics"]
    },
    {
      title: "Great Fun",
      description: "Subscription service platform built as multi-tenant.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/greatfun.png",
      link: "https://www.greatfun.com/home",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },    
    {
      title: "FYE VIP",
      description: "Skinned subscription service platform for retailer.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/fyevip.png",
      link: "https://fyevip.com/home",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },
    {
      title: "Fifth Third Bank",
      description: "Identity Alert system implementation with strict security and accessibility (WCAG) requirements.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/fiifth-third.png",
      link: "https://www.53identityalert.com/",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },
    {
      title: "PrivacyGuard",
      description: "Frontend development for a credit protection and identity theft monitoring service.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/privacyguard.png",
      link: "https://www.privacyguard.com/",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },
    {
      title: "KTLO",
      description: "Interactive media site for a radio broadcast conglomerate.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/ktlo.png",
      link: "https://www.ktlo.com/",
      tags: ["WordPress", "PHP", "Matomo"]
    },
    {
      title: "Breaking Glass Pictures",
      description: "Interactive media site for an independent film distribution company.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/bgpics.png",
      link: "https://www.bgpics.com/",
      tags: ["WordPress", "PHP", "Matomo"]
    }
  ]
},
  },
  
  "client-b.local": {
    id: "tenant-2",
    name: "Banana Bakeries",
    domain: "client-b.local",
    layout: "standard",
    theme: {
      primaryColor: "#eab308", 
      secondaryColor: "#ffffff",
      font: "serif",
    },
    features: { showBlog: false, showContactForm: true },
    content: {
      headline: "Fresh Bread Daily",
      description: "The best banana bread in town."
    }
  },
    // Fallback
  "localhost": {
    id: "dev-tenant",
    name: "Dev Environment",
    domain: "localhost",
    layout: "parallax",
    theme: {
      primaryColor: "#861657", 
      secondaryColor: "#111827", 
      font: "sans-serif",
    },
    features: { showBlog: true, showContactForm: false },
    content: {
      headline: "Ramona Colon",
      description: "Technical Project Lead",
      // Data for parallax cards
        sections: [
        { 
            title: "WHO AM I?", 
            subtitle: "Front End Web Developer with 9+ years of experience architecting high-scale e-commerce and membership platforms.",
            image: "https://ramoncolon.design/wp-content/uploads/2017/10/pexels-photo-436784-opt-opt.jpg"
        },
        { 
            title: "FRONT END ENGINEERING", 
            subtitle: "Core Stack: React.js, TypeScript, Next.js, Apollo GraphQL, JavaScript (ES6+).\nEnterprise: Salesforce Commerce Cloud (SFCC), jQuery, Bootstrap, SCSS/SASS, PHP.\nUI & Design: Material UI, Tailwind CSS, Semantic HTML5, Adobe XD, Figma, Photoshop. Tools & Platforms: Git (GitHub/Bitbucket), Docker, Webpack, Vite, WordPress (Custom Themes/Plugins), Google Analytics/Matomo.",
            image: "https://ramoncolon.design/wp-content/uploads/2017/09/pexels-photo-247791-opt.jpg"
        },
        { 
            title: "WEB DESIGN", 
            subtitle: "Experience in Adobe XD, Figma, Photoshop creating web designs that optimize engagement and coversions once translated to code.",
            image: "https://ramoncolon.design/wp-content/uploads/2017/09/comp-construct-opt.jpg"
        },
        ]
    },
    socials: {
        linkedin: "https://www.linkedin.com/in/ramona-colon-640275a5/",
        email: "emailme@ramonacolon.dev",
        github: "https://github.com/ramonancolon",
        resume: "https://docs.google.com/document/d/1AsmsckahpzbS6IHpTikhjBoO_CCXDGyghnyiDa0MPuQ/edit?pli=1&tab=t.0",
    },
    // Inside "client-a.local" object:

portfolio: {
  title: "Selected Works",
  description: "A collection of high-performance e-commerce and subscription experiences.",
  items: [
    {
      title: "CUUP",
      description: "Modernized the frontend architecture for a DTC intimates brand, improving site speed and conversion.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/shopcuup.png",
      link: "https://shopcuup.com",
      tags: ["Salesforce Commerce Cloud", "React", "Adobe Analytics"]
    },
    {
      title: "DIA & Co",
      description: "Led the development of the 'Style Box' subscription feature and overhauled the checkout flow.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/dia.png",
      link: "https://www.dia.com",
      tags: ["Salesforce Commerce Cloud", "React", "Adobe Analytics"]
    },
    {
      title: "Brylane Home",
      description: "Enterprise-level e-commerce implementation handling thousands of SKUs and complex state.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/brylanehome.png",
      link: "https://www.brylanehome.com/",
      tags: ["Salesforce Commerce Cloud", "React", "Adobe Analytics"]
    },
    {
      title: "Great Fun",
      description: "Subscription service platform built as multi-tenant.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/greatfun.png",
      link: "https://www.greatfun.com/home",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },    
    {
      title: "FYE VIP",
      description: "Skinned subscription service platform for retailer.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/fyevip.png",
      link: "https://fyevip.com/home",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },
    {
      title: "Fifth Third Bank",
      description: "Identity Alert system implementation with strict security and accessibility (WCAG) requirements.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/fiifth-third.png",
      link: "https://www.53identityalert.com/",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },
    {
      title: "PrivacyGuard",
      description: "Frontend development for a credit protection and identity theft monitoring service.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/privacyguard.png",
      link: "https://www.privacyguard.com/",
      tags: ["Security", "WCAG", "React", "Matomo"]
    },
    {
      title: "KTLO",
      description: "Interactive media site for a radio broadcast conglomerate.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/ktlo.png",
      link: "https://www.ktlo.com/",
      tags: ["WordPress", "PHP", "Matomo"]
    },
    {
      title: "Breaking Glass Pictures",
      description: "Interactive media site for an independent film distribution company.",
      image: "https://ramoncolon.design/wp-content/uploads/2025/12/bgpics.png",
      link: "https://www.bgpics.com/",
      tags: ["WordPress", "PHP", "Matomo"]
    }
  ]
},
  },
};

export const getTenant = (domain: string) => tenants[domain];