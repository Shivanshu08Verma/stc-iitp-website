export interface Club {
  id: string;
  name: string;
  department: string;
  description: string;
  logo: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    website?: string;
    youtube?: string;
    facebook?: string;
  };
  photos: string[];
  tags?: string[];
}
