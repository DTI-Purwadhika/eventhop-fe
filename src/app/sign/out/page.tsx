"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { Button } from "@/components/forms";
import { signOut } from "next-auth/react";

const Out = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Card className="mx-auto max-w-sm w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
      <CardHeader>
        <CardTitle className="text-2xl">Logout</CardTitle>
        <CardDescription>Do you want to log out now?</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 mt-4">
        <Button variant={"outline"} onClick={() => router.back()}>
          Cancel
        </Button>
        <Button variant={"destructive"} onClick={handleSignOut}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default Out;
