import React, { useEffect } from "react";
import { NavbarDashboard } from "@ui/organisms/Navbar/NavbarDashboard";
import { Outlet, useNavigate } from "react-router-dom";
import { LoadingPage } from "@ui/molecules/Loading";

import { withAuth } from "@src/helper/hoc/withAuth";
import { API_USERS_LOGIN, STORAGE_KEY_USER } from "@src/services/client/users";
import { ROUTES_PATH } from "@src/routes/routesConstants";
import { IUser } from "@src/services/client/users/types";

function LayoutCp() {
  const [loading, setLoading] = React.useState(false);
  const user = localStorage.getItem(STORAGE_KEY_USER);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async ({ email, password, is_admin }: IUser) => {
      setLoading(true);
      await API_USERS_LOGIN({ email, password, is_admin })
        .then(({ data }) => {
          localStorage.setItem(
            STORAGE_KEY_USER,
            JSON.stringify({ ...data, email, password, is_admin })
          );
        })
        .catch(() => {
          localStorage.clear();
          navigate(ROUTES_PATH.login);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (user) {
      const userLocal = JSON.parse(user) as IUser;
      getProfile(userLocal);
    } else {
      navigate(ROUTES_PATH.login);
    }
  }, [user]);

  if (!loading) {
    return (
      <div className="font-on w-full h-screen bg-gray-200 flex flex-col justify-center items-center 2xl:mx-auto overflow-y-hidden">
        <div className="w-full bg-white mb-1 flex flex-col justify-center items-center">
          <NavbarDashboard />
        </div>
        <div className="w-full h-full grid grid-cols-12 gap-1 flex-1">
          <div className="bg-white w-full col-span-12 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  return <LoadingPage description="لطفا شکیبا باشید" />;
}

export default withAuth(LayoutCp);
