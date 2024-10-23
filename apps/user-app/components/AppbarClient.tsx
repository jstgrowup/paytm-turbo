"use client";
import { Appbar } from "@repo/ui/appbar";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AppbarClient = () => {
  const session = useSession();
  const router = useRouter();
  const onSignout = async () => await signOut();
  useEffect(() => {
    if (!session?.data?.user) {
      router.push("/auth");
    }
  }, [session?.data?.user]);

  return (
    <Appbar
      onSignout={onSignout}
      onRedirect={() => router.push("/auth")}
      user={session?.data?.user}
    />
  );
};

export default AppbarClient;
