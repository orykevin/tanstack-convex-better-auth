import { fetchAuthQuery } from "@/lib/auth-server";
import { createServerFn } from "@tanstack/react-start";
import { api } from "convex/_generated/api";

export const getCurrentUserFromServer = createServerFn({
  method: "GET",
}).handler(async () => {
  try {
    const currentUser = await fetchAuthQuery(api.auth.getCurrentUser);
    return currentUser;
  } catch (e) {
    console.log("Error when get current user", e);
    return undefined;
  }
});
