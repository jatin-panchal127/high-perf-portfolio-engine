export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}
