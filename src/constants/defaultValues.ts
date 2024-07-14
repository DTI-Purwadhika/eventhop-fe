export const eventDefaultValues = {
  name: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  url: "",
  ticketTiers: [
    {
      tier_name: "",
    },
  ],
};

export const promoDefaultValues = {
  name: "",
  type: "",
  event_id: "",
  voucher_code: "",
  expire_date: new Date(),
  user_id: "",
};

export const loginDefaultValues = {
  email: undefined,
  password: undefined,
};
