export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  source?: string;
  href?: string;
  avatarInitials: string;
};