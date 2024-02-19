import { 음식점리뷰 } from "./reviews.model";

export interface 음식점 {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
  reviewList: 음식점리뷰[];
}
