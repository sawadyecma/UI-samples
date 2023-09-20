import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accordion1 } from "./pages/accordion/Accordion1";

export const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/accordion/1", element: <Accordion1 /> },
      ])}
    />
  );
};
