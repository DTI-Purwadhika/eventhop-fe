"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import LoginForm from "@/components/containers/LoginForm";

const In = () => {
  const router = useRouter();

  return (
    <Card className="mx-auto max-w-sm w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default In;
