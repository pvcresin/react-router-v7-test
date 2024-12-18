import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { generatePath } from "react-router";

export const ROOT = {
  HOME: "/",
  USER_ID: "/users/:id",
};

export const homePath = () => ROOT.HOME;

export const userPath = ({ userId }: { userId: string }) =>
  generatePath(ROOT.USER_ID, { id: userId });

export default [
  index("routes/home.tsx"),
  route("/users/:id", "routes/user.tsx"),
] satisfies RouteConfig;
