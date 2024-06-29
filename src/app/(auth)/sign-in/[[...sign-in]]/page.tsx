"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormState } from "react-dom";
import { login } from "@/libs/actions";

const loginInitialState = {
  message: "",
  errors: {
    email: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

const Login = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-muted-foreground">
          Sign in to your account or create a new one.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Enter your email and password below to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="#" prefetch={false}>
              Create Account
            </Link>
          </Button>
          <Button type="submit">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Login;
