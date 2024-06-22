import { Heading, Text } from "@/components/typhographies";
import { Image } from "@/components/elements";

const ArrowIco = () => (
  <Image src="/assets/icons/arrow.svg" alt="edit" width={20} height={20} />
);

const DateIco = () => (
  <Image src="/assets/icons/calendar.svg" alt="edit" width={20} height={20} />
);

const DeleteIco = () => (
  <Image src="/assets/icons/delete.svg" alt="edit" width={20} height={20} />
);

const LinkIco = () => (
  <Image src="/assets/icons/link.svg" alt="edit" width={20} height={20} />
);

const LocationIco = () => (
  <Image src="/assets/icons/location.svg" alt="edit" width={20} height={20} />
);

const MenuIco = () => (
  <Image src="/assets/icons/menu.svg" alt="edit" width={20} height={20} />
);

const UploadIco = () => (
  <>
    <Image src="/assets/icons/upload.svg" alt="edit" width={20} height={20} />
    <Heading size="h3">Drag photo here</Heading>
    <Text size={12} weight="medium">
      SVG, PNG, JPG
    </Text>
  </>
);

const Icons = {
  DeleteIco,
  ArrowIco,
  UploadIco,
  MenuIco,
  LinkIco,
  DateIco,
  LocationIco,
};

const Icon: React.FC<{ name: keyof typeof Icons }> = ({ name }) => {
  const IconCom = Icons[name];
  return IconCom ? <IconCom /> : null;
};

export default Icon;
