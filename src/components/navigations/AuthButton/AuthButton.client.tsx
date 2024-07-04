"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { signIn, signOut } from "@/libs/authHelper";
import { useRouter } from "next/navigation";
export default function AuthButton() {
  const session = useSession();
  const router = useRouter();

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        router.replace("/");
      }}
    >
      {session.data?.user?.name} : Sign Out
    </Button>
  ) : (
    <Button onClick={async () => await signIn()}>Sign In</Button>
  );
}
