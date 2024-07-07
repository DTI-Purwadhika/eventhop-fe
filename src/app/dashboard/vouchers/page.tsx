import { Collection } from "@/components/elements";
import { columns } from "./type";

const Promotions = () => (
  <Collection column={columns} limit={10} title="Promotions" />
);

export default Promotions;
