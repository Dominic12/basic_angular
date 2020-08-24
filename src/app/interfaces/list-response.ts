import {User} from './user';

export interface ListResponse {
  page: number;
  per_page: number;
  total: number;
  data: User[] | any[];
  ad: {
    company: string;
    url: string;
    text: string;
  };
}
