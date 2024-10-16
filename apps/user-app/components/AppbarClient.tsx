"use client";
import { Appbar } from "@repo/ui/appbar";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AppbarClient = () => {
  const session = useSession();
  const router = useRouter();
  const onSignout = async () => await signOut();
  return (
    <div>
      <Appbar
        onSignout={onSignout}
        onRedirect={() => router.push("/auth")}
        user={session?.data?.user}
      />
    </div>
  );
};

export default AppbarClient;
