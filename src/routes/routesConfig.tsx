import PrivateLayout from "@src/components/Templates/layouts/PrivateLayout";
import { LoginPage } from "@src/pages/Login";
import { DashboardPage } from "@src/pages/Dashboard";
import NotFoundPage from "@src/pages/NotFound";
import UnauthorizedPage from "@src/pages/Unauthorized";
import { DashboardDesktopListPage } from "@src/pages/DashboardDesktopList";
import { DashboardMonitoring } from "@src/pages/DashboardMonitoring";
import { ScannedFileListPage } from "@src/pages/ScannedFileListPage";

import { ROUTES_PATH } from "./routesConstants";
import { UbaPage } from "@src/pages/Uba";

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
      {
        path: ROUTES_PATH.monitoringDetails,
        element: <ScannedFileListPage />,
      },
      {
        path: ROUTES_PATH.monitoring,
        element: <DashboardMonitoring />,
      },
      {
        path: ROUTES_PATH.uba,
        element: <UbaPage />,
      },
    ],
  },
];

export default routesConfig;
