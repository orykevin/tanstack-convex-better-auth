import { fetchAuthQuery } from "@/lib/auth-server";
import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { api } from "convex/_generated/api";

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    const user = await fetchAuthQuery(api.auth.getCurrentUser);
    console.log(user);
    if (!user) throw redirect({ to: "/login" });
  } catch (e) {
    console.log("Auth Middleware Error", e);
    throw redirect({ to: "/login" });
  }

  return await next();
});
