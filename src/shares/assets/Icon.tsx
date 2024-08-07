import { Heading, Text } from "@/components/typhographies";
import {
  Calendar,
  CalendarRange,
  Barcode,
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
  TicketPercent,
  Pencil,
  Plus,
  UserRoundPlus,
  Clipboard,
  ListFilter,
  Filter,
  TicketCheck,
  Coins,
  PartyPopper,
  ScanBarcode,
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
  Barcode,
  Home,
  Link,
  LineChart,
  ListFilter,
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
  TicketPercent,
  Pencil,
  Plus,
  UserRoundPlus,
  Clipboard,
  ScanBarcode,
  Filter,
  Coins,
  TicketCheck,
  PartyPopper,
};

const Icon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const IconCom = Icons[name as keyof typeof Icons];
  return IconCom ? <IconCom className={className} /> : null;
};

export default Icon;
