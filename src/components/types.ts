// export type ImageUrl = {
//   small: string;
//   regular?: string;
// };

// export type Image = {
//   alt_description: string;
//   urls: ImageUrl;
//   likes: number;
//   user: { name: string };
//   id?: string;
// };

export interface Image {
  id: string;
  urls: {
    small: string;
    regular?: string;
  };
  alt_description: string;
  likes: number;
}
