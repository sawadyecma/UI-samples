import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_PATHS } from "./pages/route-path";
import { Layout } from "./shared/Layout";

const router = createBrowserRouter(
  ROUTE_PATHS.map(({ element, ...item }) => ({
    ...item,
    element: <Layout>{element}</Layout>,
  })) satisfies RouteObject[]
);

export const App = () => {
  return <RouterProvider router={router} />;
};
