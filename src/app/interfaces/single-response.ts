import {User} from './user';

export interface SingleResponse {
  data: User | any; // Join these two types
  ad: {
    company: string;
    url: string;
    text: string;
  };
}
