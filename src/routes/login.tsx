import { authClient } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
  ssr: false,
});

function RouteComponent() {
  const { signIn } = authClient;
  const handleSignIn = () => {
    signIn.social({ provider: "google" });
  };
  return (
    <div>
      <button onClick={handleSignIn}>Login via google</button>
    </div>
  );
}
