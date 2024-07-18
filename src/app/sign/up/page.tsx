"use client";

import { z } from "zod";
import { Button, Input } from "@/components/forms";
import { loginDefaultValues } from "@/constants/defaultValues";
import { registerFormSchema } from "@/shares/libs/validator";
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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { register } from "@/services/auth/services/register";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const formRegister = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: loginDefaultValues,
  });

  const onRegister = (values: z.infer<typeof registerFormSchema>) => {
    try {
      register(values.name, values.email, values.password, values.referralCode);
      router.push("/sign/in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Register</CardTitle>
        <CardDescription>
          Register for a new account to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...formRegister}>
          <form
            onSubmit={formRegister.handleSubmit(onRegister)}
            autoComplete="off"
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 overflow-y-auto"
          >
            <FormField
              control={formRegister.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full grid gap-2">
                  <FormControl>
                    <Input placeholder="John Doe" label="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
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
              control={formRegister.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full grid gap-2">
                  <FormControl>
                    <Input
                      placeholder="********"
                      label="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
              name="referralCode"
              render={({ field }) => (
                <FormItem className="w-full grid gap-2">
                  <FormControl>
                    <Input
                      placeholder="ABCD#1234"
                      label="Referral Code (Optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={formRegister.formState.isSubmitting}
                className="w-full mb-2 mt-4 md:mb-4"
              >
                {formRegister.formState.isSubmitting
                  ? "Please Wait..."
                  : `Register`}
              </Button>
              <Link href="/sign/in" className="text-center w-full">
                <div>
                  Already have an account? <br />
                  <span className="text-primary-500 hover:text-primary-500/75">
                    Sign In Here!
                  </span>
                </div>
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Register;
