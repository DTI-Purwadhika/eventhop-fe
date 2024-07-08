import PromoForm from "@/components/containers/PromoForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const CreatePromo = () => (
  <Card>
    <CardHeader>
      <CardTitle>Create a Voucher</CardTitle>
      <CardDescription>{`Create a generous voucher! Attract the Hopper to your event`}</CardDescription>
    </CardHeader>
    <CardContent>
      <PromoForm type="create" />
    </CardContent>
  </Card>
);

export default CreatePromo;
