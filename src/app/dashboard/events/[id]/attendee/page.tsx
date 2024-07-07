import { Collection } from "@/components/elements";
import { columns } from "./type";

const Attendee = () => (
  <Collection column={columns} limit={10} title="Attendee" />
);

export default Attendee;
