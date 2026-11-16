export interface SocialLinks {
  github: string;
  linkedin: string;
  whatsapp: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  experienceYears: string;
  email: string;
  phone: string;
  resumeUrl: string;
  siteUrl: string;
  socials: SocialLinks;
}
