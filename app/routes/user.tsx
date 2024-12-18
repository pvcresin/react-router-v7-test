import { Link } from "react-router";
import type { Route } from "./+types/user";
import { homePath, userPath } from "~/routes";

const userId = "pvcresin";

export default function User({ params }: Route.ComponentProps) {
  console.log(params.id);

  return (
    <h1>
      User
      <p>
        <Link to={homePath()}>/</Link>{" "}
        <Link to={userPath({ userId })}>/users/pvcresin</Link>
      </p>
      <p>{JSON.stringify(params)}</p>
    </h1>
  );
}
