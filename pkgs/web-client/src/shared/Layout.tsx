import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../pages/route-path";

export const Layout = ({ children = null }: { children?: React.ReactNode }) => {
  return (
    <>
      <nav>
        <ul>
          {ROUTE_PATHS.map(({ path }) => (
            <li key={path}>
              <Link to={path}>{path}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <main>{children}</main>
    </>
  );
};
