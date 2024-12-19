import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("/users/:id", "routes/user.tsx"),
] satisfies RouteConfig;

import { generatePath } from "react-router";

export const ROOT = {
  HOME: "/",
  USER_ID: "/users/:id",
};

export const homePath = () => ROOT.HOME;

export const userPath = ({ userId }: { userId: string }) =>
  generatePath(ROOT.USER_ID, { id: userId });
