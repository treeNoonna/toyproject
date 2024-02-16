import { 유저 } from "./user.model";
import { 음식점 } from './restaurant.model';

export interface 리뷰 {
  id: string;
  address: 음식점;
  user: 유저;
  comment: string;
  rating: number;
  userId: string;
  createdAt: number;
  img: string;
 }
