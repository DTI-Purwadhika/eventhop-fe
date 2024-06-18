import { ImageType } from "@/components/elements/Image/type";

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  name: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: 0,
  url: "",
};

export const sizeJudge = (size: ImageType["width"]) => {
  switch (size) {
    case "xxs":
      return 10;
    case "xs":
      return 16;
    case "sm":
      return 24;
    case "md":
      return 32;
    case "lg":
      return 64;
    case "xl":
      return 128;
  }
};
