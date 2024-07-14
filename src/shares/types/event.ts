export type eventType = {
  title: string;
  eventCategory: string;
  description: string;
  mainImage: string;
  address?: string;
  location: string;
  startTime: string;
  endTime: string;
  eventTiers: eventTierType[];
};

export type eventTierType = {
  name: string;
  price: number;
  seat?: number;
};
