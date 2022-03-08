export interface UserType {
  username: string;
  password: string;
  description: string;
  imageUrl?: string;
}

export interface MemeCardType {
  href: string;
  like: number;
  dislike: number;
  download: number;
  owner_id?: string;
}
