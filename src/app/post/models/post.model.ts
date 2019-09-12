
import { Strip } from './strip.model';

export interface Post {
  uuid: string;
  title: string;
  slug?: string;
  date?: Date;
  strip?: Strip;
  content?: string;
  comments?: Comment[];
  createdAt?: Date;
}


export interface Comment {
  author: string;
  email: string;
  createdAt: Date;
  content: string;
}

export function postFactory(args: Partial<Post>) {
    return {...args} as Post;
}
