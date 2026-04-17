export type LayoutType = "standard" | "parallax" | "minimal" | "wiki-app";

export interface Tenant {
  id: string;
  name: string;
  domain: string;
  layout: LayoutType;
  
  theme: {
    primaryColor: string;
    secondaryColor: string;
    font: string;
  };
  
  features: {
    showBlog: boolean;
    showContactForm: boolean;
  };
  
  content: {
    headline: string;
    description: string;
    sections?: {
      title: string;
      subtitle: string;
      image?: string;
    }[];
  };
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    email?: string;
    resume?: string;
  };
  portfolio?: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      image: string;
      link: string;
      tags?: string[];
    }[];
  };
}

export interface user {
  id: number;
  name: string;
  username: string;
  email: string ;
}