import { 음식점리뷰 } from "./reviews.model";

export interface 유저 {
  id: string;
  password: string;
  address?: string;
  img?: string;
  reviewList?: 음식점리뷰[];
}
