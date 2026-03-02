import { authMiddleware } from "@/middleware/auth-middleware";
import { getCurrentUserFromServer } from "@/serverFn/auth-serverFn";
import { convexQuery } from "@convex-dev/react-query";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useLoaderData,
} from "@tanstack/react-router";
import { api } from "convex/_generated/api";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  // loader: async (ctx) => {
  //   const user = await ctx.context.queryClient.ensureQueryData(
  //     convexQuery(api.auth.getCurrentUser)
  //   );
  //   return user;
  // },
  pendingComponent: PendingComponent,
  ssr: false,
});

function PendingComponent() {
  return (
    <div>
      <Loader2 className="animate-spin" /> <p>Loading ....</p>
    </div>
  );
}

function RouteComponent() {
  const user = Route.useLoaderData();
  console.log(user);
  return (
    <div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Outlet />
    </div>
  );
}
