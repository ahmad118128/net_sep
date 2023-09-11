import PrivateLayout from "@src/components/Templates/layouts/PrivateLayout";
import { LoginPage } from "@src/pages/Login";
import { DashboardPage } from "@src/pages/Dashboard";
import NotFoundPage from "@src/pages/NotFound";
import UnauthorizedPage from "@src/pages/Unauthorized";

import { ROUTES_PATH } from "./routesConstants";
import { DashboardDesktopListPage } from "@src/pages/DashboardDesktopList";

const routesConfig = [
  {
    path: ROUTES_PATH.unauthorized,
    element: <UnauthorizedPage />,
  },
  {
    path: ROUTES_PATH.home,
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: ROUTES_PATH.dashboard,
        element: <DashboardPage />,
      },
      {
        path: ROUTES_PATH.dashboardDesktopList,
        element: <DashboardDesktopListPage />,
      },
    ],
  },
];

export default routesConfig;
