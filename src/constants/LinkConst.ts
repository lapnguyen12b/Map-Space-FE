import { Breadcrumb } from "src/types";
import { NavLink } from "src/types/Navbar";

const TOP_CITIES_LINKS: NavLink[] = [
  {
    href: "/",
    name: "Melbourne",
  },
  {
    href: "/",
    name: "Sydney",
  },
  {
    href: "/",
    name: "Ha Noi",
  },
  {
    href: "/",
    name: "Beijing",
  },
];

const BREADCRUMB_PAGE_BY_CITY: Breadcrumb[] = [
  {
    href: "/",
    name: "Search parking",
  },
  {
    href: "/",
    name: "NSW parking",
  },
  {
    href: "/",
    name: "Sydney parking",
  },
];

export { TOP_CITIES_LINKS, BREADCRUMB_PAGE_BY_CITY };
