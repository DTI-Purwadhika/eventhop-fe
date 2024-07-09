"use client";

import { z } from "zod";
import { useState } from "react";
import { Button, Input } from "@/components/forms";
import { loginDefaultValues } from "@/constants/defaultValues";
import { loginFormSchema } from "@/shares/libs/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "./type";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "@/components/navigations";

const LoginForm = ({ type }: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginDefaultValues,
  });

  const handleSignIn = async (e: React.FormEvent) => {
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  const handleSignInGoogle = async (
    email: string,
    password: string,
    type: "credentials" | "google"
  ) => {
    setLoading(true);
    setError("");

    const result = await signIn(type, {
      redirect: false,
      ...(type === "credentials" ? { email, password } : {}),
    });

    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    handleSignIn(values.email, values.password, "credentials");
  };

  return (
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
                <Input placeholder="Your e-mail..?" label="E-mail" {...field} />
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
                    placeholder="Don't worry, I don't see it... 🙈"
                    label="Password"
                    type="password"
                    {...field}
                  />
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
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
          {form.formState.isSubmitting || loading
            ? "Please Wait..."
            : `Sign In`}
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            handleSignIn("", "", "google");
          }}
        >
          {loading ? "Please Wait..." : `Login with Google`}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
