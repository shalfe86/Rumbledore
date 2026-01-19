export interface Movie {
  id: number;
  title: string;
  image: string;
}

export interface MerchItem {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
}

export interface TriviaQuestion {
  question: string;
  answer: string;
}