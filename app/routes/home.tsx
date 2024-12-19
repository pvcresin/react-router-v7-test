import { generatePath, Link } from "react-router";
import { ROOT, homePath, userPath } from "~/routes";

const userId = "pvcresin";

export default function Home() {
  return (
    <div>
      Home
      <p>
        <Link to={homePath()}>/</Link>{" "}
        <Link to={userPath({ userId })}>/users/pvcresin</Link>
      </p>
    </div>
  );
}
