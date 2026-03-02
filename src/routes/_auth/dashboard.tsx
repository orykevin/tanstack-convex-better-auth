import { authClient } from "@/lib/auth-client";
import { useConvexQuery } from "@convex-dev/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { api } from "convex/_generated/api";
import { Route as AuthRoute } from "./route";

export const Route = createFileRoute("/_auth/dashboard")({
  component: RouteComponent,
  ssr: false,
});

function RouteComponent() {
  const router = useRouter();
  const { signOut } = authClient;
  const handleLogout = async () => {
    await signOut();
    router.navigate({ to: "/login" });
  };
  // const todos = useConvexQuery(api.todos.list);
  // const user = AuthRoute.useLoaderData();
  // console.log(user);

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <p>Todos</p>
      {/* {todos ? todos.map((todo) => <p>{todo.text}</p>) : <p>Loading ...</p>} */}
    </div>
  );
}
