import { generatePath, Link } from "react-router";
import { ROOT, homePath, userPath } from "~/routes";
import type { Route } from "./+types/user";

const apiClient = {
  getData: (id: string) => `data for ${id}`,
};

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return apiClient.getData(params.id);
}

export default function User({ params, loaderData }: Route.ComponentProps) {
  return (
    <div>
      userId: {params.id}, data: {loaderData}
      <p>
        <Link to={homePath()}>/</Link>{" "}
        <Link to={userPath({ userId: "pvcresin" })}>/users/pvcresin</Link>
      </p>
    </div>
  );
}
