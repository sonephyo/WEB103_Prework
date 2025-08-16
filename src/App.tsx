import { Link, Outlet, useRoutes } from "react-router";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import ShowCreators from "./pages/ShowCreators";
import ContentCreator from "./components/ContentCreator";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <div>
          <p>Welcome to ContentCreators Platform.</p>
          <div>
            <Link to="/all">Show all Creators</Link>
            <Link to="/add">Add a new Creator</Link>
          </div>
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "all",
          element: <ShowCreators />,
        },
        {
          path: "add",
          element: <AddCreator />,
        },
        {
          path: "edit",
          element: <EditCreator />,
        },
        {
          path: "view",
          element: <ViewCreator />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
