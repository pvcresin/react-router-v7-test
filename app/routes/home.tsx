import { generatePath, Link } from "react-router";
import { ROOT, homePath, userPath } from "~/routes";

const userId = "pvcresin";

// generatePath("/users/:id", { id: "pvcresin" }); // "/users/pvcresin"
// generatePath("/users/:id", { userId: "pvcresin" }); // -> 型エラー

// generatePath("/files/:type/*", {
//   type: "img",
//   "*": "cat.jpg",
// }); // "/files/img/cat.jpg"

export default function Home() {
  return (
    <h1>
      Home
      <p>
        <Link to={homePath()}>/</Link>{" "}
        <Link to={userPath({ userId })}>/users/pvcresin</Link>
      </p>
    </h1>
  );
}
