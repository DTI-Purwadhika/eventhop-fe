export const eventDefaultValues = {
  name: "",
  detail: "",
  location: "",
  main_image: "",
  start_date: new Date(),
  end_date: new Date(),
  category: "",
  ticket_type: [
    {
      name: "",
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
  name: undefined,
  ReferralCode: undefined,
};

export const purchaseDefaultValues = {
  ticketType: undefined,
  name: undefined,
  email: undefined,
  telephone: undefined,
  agreement: false,
};
