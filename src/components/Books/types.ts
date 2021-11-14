export interface TBook {
  authors: string[];
  description: string;
  id: string;
  imageLinks: {
    thumbnail: string;
  };
  language: string;
  publishedDate: string;
  title: string;
}
