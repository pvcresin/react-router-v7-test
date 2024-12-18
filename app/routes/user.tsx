import type { Route } from "./+types/user";

export function loader({ params }: Route.LoaderArgs) {
  return params.id;
}

export default function User() {
  return <h1>User</h1>;
}
