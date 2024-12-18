import { generatePath, Link } from "react-router";

const userId = 1;

a = generatePath("users/:id", { id: userId });

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);

<Link to="users/pvcresin">User pvcresin</Link>;
