import ProfileForm from "@/components/containers/ProfileForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const editProfile = () => (
  <Card className="md:w-4/5 md:mx-auto lg:w-full ">
    <CardHeader>
      <CardTitle>Edit Profile</CardTitle>
      <CardDescription>{`Refine your profile to look more standout!`}</CardDescription>
    </CardHeader>
    <CardContent>
      <ProfileForm type="update" />
    </CardContent>
  </Card>
);

export default editProfile;
