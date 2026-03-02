import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/profile")({
  component: RouteComponent,
  ssr: false,
});

function RouteComponent() {
  return <div>Hello "/_auth/profile"!</div>;
}
