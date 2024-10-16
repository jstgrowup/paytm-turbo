import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import type { AuthUserResponseInterface } from "@repo/utils/types";
import { AuthOptions } from "next-auth";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<AuthUserResponseInterface | any> {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Please provide both email and password");
          }
          const foundUser = await db.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (foundUser) {
            const decryptedPassword = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (!decryptedPassword) {
              throw new Error("Wrong password, please try again");
            } else {
              return {
                id: String(foundUser.id),
                email: foundUser?.email ?? "",
              };
            }
          } else {
            const encryptedPass = await bcrypt.hash(credentials.password, 10);
            const createdUser = await db.user.create({
              data: {
                email: credentials.email,
                password: encryptedPass,
              },
            });
            if (createdUser) {
              return {
                id: String(createdUser.id),
                email: createdUser.email,
              };
            } else {
              throw new Error(
                "Something went wrong while creating your account please try again later"
              );
            }
          }
        } catch (error: any) {
          throw new Error(
            error.message || "An error occurred during authentication"
          );
        }
      },
    }),
  ],

  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user = {
        id: token.sub,
        email: token.email,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
};
