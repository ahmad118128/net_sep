import { STORAGE_KEY_USER } from "@src/services/users";
import { IUser } from "@src/services/users/types";
import { ConfigForm } from "./ConfigForm";
import { DashboardCards } from "./DashboardCards";
import { ContainerDashboard } from "@ui/Templates/ContainerDashboard";

export function DashboardPage() {
  const user = JSON.parse(
    localStorage.getItem(STORAGE_KEY_USER) ?? ""
  ) as IUser;

  return user.http ? (
    <iframe
      width="100%"
      height="100%"
      src={user.http}
      title="Desktop As Service"
    />
  ) : (
    <ContainerDashboard>
      <DashboardCards />
      <ConfigForm user={user} />
    </ContainerDashboard>
  );
}
