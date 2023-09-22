import { RouteObject } from "react-router-dom";
import { AccordionPage1 } from "./accordion/AccordionPage1";

export const ROUTE_PATHS = [
  { path: "/", element: null },
  { path: "/accordion/1", element: <AccordionPage1 /> },
] satisfies RouteObject[];
