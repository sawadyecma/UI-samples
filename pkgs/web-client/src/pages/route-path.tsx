import { RouteObject } from "react-router-dom";
import { Accordion1 } from "./accordion/Accordion1";

export const ROUTE_PATHS = [
  { path: "/", element: null },
  { path: "/accordion/1", element: <Accordion1 /> },
] satisfies RouteObject[];
