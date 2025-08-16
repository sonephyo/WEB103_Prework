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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50vw",
            margin: "16px auto"
          }}
        >
          <h1>Welcome to ContentCreators Platform.</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            <button className="my-button">
              <Link to="/all">Show all Creators</Link>
            </button>
            <button className="my-button">
              <Link to="/add">Add a new Creator</Link>
            </button>
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
          path: "edit/:id",
          element: <EditCreator />,
        },
        {
          path: "view/:id",
          element: <ViewCreator />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
