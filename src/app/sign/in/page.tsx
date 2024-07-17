"use client";

import { z } from "zod";
import { Button, Input } from "@/components/forms";
import { loginDefaultValues } from "@/constants/defaultValues";
import { loginFormSchema } from "@/shares/libs/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

import { handleSignIn } from "./handleSignIn";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    try {
      handleSignIn(values.email, values.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            autoComplete="off"
            className="grid gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full grid gap-2">
                  <FormControl>
                    <Input
                      placeholder="john.doe@example.com"
                      type="email"
                      label="E-mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full grid gap-2">
                  <FormControl>
                    <>
                      <Input
                        placeholder="********"
                        label="Password"
                        type="password"
                        {...field}
                      />
                      {/* <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link> */}
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full mt-4"
            >
              {form.formState.isSubmitting ? "Please Wait..." : `Login`}
            </Button>
            {/* <Button
            variant="outline"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              handleSignIn("", "", "google");
            }}
          >
            {loading ? "Please Wait..." : `Login with Google`}
          </Button> */}
            <Link href="/sign/up" className="text-center">
              Need an account?
              <br />
              <div className="text-primary-500 hover:text-primary-500/75">
                Sign Up Here!
              </div>
            </Link>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;
