import { Collection } from "@/components/elements";
import { columns } from "./type";

const Events = () => (
  <Collection column={columns} limit={10} collection="table" />
);

export default Events;
