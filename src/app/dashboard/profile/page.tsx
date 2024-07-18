import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/typhographies";
import Image from "next/image";
import { Button } from "@/components/forms";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const user = {
    avatar: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    bio: "A short bio about John Doe.",
    phone: "123-456-7890",
    website: "https://johndoe.com",
  };

  return (
    <Card className="mx-auto w-full md:w-4/5 lg:mt-12">
      <CardHeader className="flex items-center md:mb-4">
        <Image
          src="https://picsum.photos/200"
          alt="Profile Avatar"
          className="w-40 h-40 rounded-full mb-4"
          width={150}
          height={150}
        />
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.bio}</CardDescription>
        <br />
        <Separator />
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-4 md:pl-12 xl:grid-cols-3 xl:pl-20">
        <div>
          <Label>Location</Label>
          <Text>{user.location}</Text>
        </div>
        <div>
          <Label>Phone Number</Label>
          <Text>{user.phone}</Text>
        </div>
        <div>
          <Label>Email</Label>
          <Text>{user.email}</Text>
        </div>
      </CardContent>
      <CardFooter className=" md:pl-12 xl:pl-20">
        <Button url="profile/edit">Edit Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;
