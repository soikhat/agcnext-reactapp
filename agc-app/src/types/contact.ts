// ========================================
// 1. types/contact.ts
// ========================================

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface NewsletterFormData {
  email: string;
  firstName: string;
  lastName: string;
}

export interface ContactSectionProps {
  contactInfo?: ContactInfo;
  onNewsletterSubmit?: (data: NewsletterFormData) => Promise<void>;
  onContactClick?: () => void;
  onDevisClick?: () => void;
}
