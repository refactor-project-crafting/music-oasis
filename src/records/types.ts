export type Record = {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  type: "Vynil" | "Digital";
  price: number;
  originalPrice?: number;
  isRecordOfTheMonth: boolean;
};
