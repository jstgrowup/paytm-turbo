"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { AuthForm } from "./AuthForm";

const AuthFormClient = async () => {
  return (
    <>
      <AuthForm signIn={signIn} />
    </>
  );
};

export default AuthFormClient;
