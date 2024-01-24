export interface Photo {
  id: string;
  title: string;
  description: string;
  images: {
    small: string;
    medium: string;
    large: string;
    'x-large': string;
  };
  publish_date: string;
}
