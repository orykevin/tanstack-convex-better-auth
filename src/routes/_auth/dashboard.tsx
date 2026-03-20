import { authClient } from "@/lib/auth-client";
import { getCurrentUserFromServer } from "@/serverFn/auth-serverFn";
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/dashboard")({
  component: RouteComponent,
  loader: async () => {
    const userData = await getCurrentUserFromServer();
    // if (!userData) throw redirect({ to: "/login" });
    return userData;
  }
});

function RouteComponent() {
  const router = useRouter();
  const data = Route.useLoaderData();
  console.log(data)
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
