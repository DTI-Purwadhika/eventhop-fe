import { Image } from "@/components/elements";
import { Heading, Text } from "@/components/typhographies";

export const DeleteIco = () => (
  <Image src="/assets/icons/delete.svg" alt="edit" width={20} height={20} />
);

export const ArrowIco = () => (
  <Image src="/assets/icons/arrow.svg" alt="edit" width={20} height={20} />
);

export const UploadIco = () => (
  <>
    <Image src="/assets/icons/upload.svg" alt="edit" width={20} height={20} />
    <Heading size="h3">Drag photo here</Heading>
    <Text size={12} weight="medium">
      SVG, PNG, JPG
    </Text>
  </>
);

export const MenuIco = () => (
  <Image src="/assets/icons/menu.svg" alt="edit" width={20} height={20} />
);

export const LinkIco = () => (
  <Image src="/assets/icons/link.svg" alt="edit" width={20} height={20} />
);

export const DateIco = () => (
  <Image src="/assets/icons/calendar.svg" alt="edit" width={20} height={20} />
);

export const LocationIco = () => (
  <Image src="/assets/icons/location.svg" alt="edit" width={20} height={20} />
);
