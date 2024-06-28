import { Heading, Text } from "@/components/typhographies";
import {
  Calendar,
  CalendarRange,
  LineChart,
  MessageCircleMore,
  MessageCircleQuestion,
  PieChart,
  Ticket,
  UserRound,
  UsersRound,
  Home,
  Link,
  MapPin,
  Menu,
  MoveUpRight,
  Trash,
  FileUp,
} from "lucide-react";

const Upload = () => (
  <>
    <FileUp />
    <Heading size="h3">Drag photo here</Heading>
    <Text size={12} weight="medium">
      SVG, PNG, JPG
    </Text>
  </>
);

export const Icons = {
  Calendar,
  CalendarRange,
  Home,
  Link,
  LineChart,
  MapPin,
  Menu,
  MessageCircleMore,
  MessageCircleQuestion,
  MoveUpRight,
  PieChart,
  Ticket,
  Trash,
  UserRound,
  UsersRound,
  Upload,
};

const Icon: React.FC<{ name: keyof typeof Icons; className?: string }> = ({
  name,
  className,
}) => {
  const IconCom = Icons[name];
  return IconCom ? <IconCom className={className} /> : null;
};

export default Icon;
