export interface AboutHeroConfig {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface StoryConfig {
  sectionTag: string;
  title: string;
  timeline: readonly TimelineItem[];
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface MissionConfig {
  sectionTag: string;
  title: string;
  description: string;
  values: readonly ValueItem[];
}

export interface StatItem {
  number: string;
  label: string;
  icon: string;
}

export interface StatsConfig {
  title: string;
  items: readonly StatItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface TeamConfig {
  sectionTag: string;
  title: string;
  description: string;
  members: readonly TeamMember[];
}

export interface CommitmentItem {
  title: string;
  description: string;
  icon: string;
}

export interface CommitmentConfig {
  sectionTag: string;
  title: string;
  items: readonly CommitmentItem[];
}

export interface Partner {
  name: string;
  logo: string;
}

export interface PartnersConfig {
  sectionTag: string;
  title: string;
  description: string;
  logos: readonly Partner[];
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface CTAConfig {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton: CTAButton;
}
