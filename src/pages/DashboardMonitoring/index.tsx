import { ContainerDashboard } from "@ui/Templates/ContainerDashboard";

import { UsersDaAsList } from "./UsersDaAsList";
import { BackButton } from "@ui/atoms/BackButton";
import { useUserContext } from "@context/user/userContext";

export function DashboardMonitoring() {
  const { user } = useUserContext();

  return (
    <ContainerDashboard>
      <BackButton withLabel className="absolute bottom-20 left-24" />
      <UsersDaAsList user={user} />
    </ContainerDashboard>
  );
}
