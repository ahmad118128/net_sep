import { IPagination } from "@src/types/services";

// users endpoints
export const E_USERS = "/users/";
export const E_USERS_DAAS = "/users/daas/";

export const E_USERS_UPDATE = (id: string) => `${E_USERS}${id}/`;
export const E_USERS_DELETE = (id: number) => `${E_USERS}${id}/`;
export const E_UPDATE_USER = (id: string | number) => `${E_USERS}${id}/`;
export const E_USERS_PAGINATION = ({ pageSize, page, filter }: IPagination) =>
  `${E_USERS}?page_size=${pageSize}&page=${page}${filter ? `&${filter}` : ""}`;

// users daas endpoints
export const E_USERS_DAAS_PAGINATION = ({
  pageSize,
  page,
  filter,
}: IPagination) =>
  `/users/daas/${
    filter ? `?${filter}&` : "?"
  }page_size=${pageSize}&page=${page}`;

export const E_USERS_DAAS_DELETE = (id: string) => `/users/daas/${id}/`;
export const E_USERS_DAAS_UPDATE = (id: string) => `/users/daas/${id}/`;
export const E_USERS_DAAS_RESET_USAGE = (id: string) =>
  `/users/reset_usage/${id}/`;

export const E_USERS_DAAS_RESET_ALL_USAGE = "/users/reset_usage/";

export const E_USERS_DAAS_UPDATE_USAGE = "users/daas/update_usage/";

export const E_USERS_PROFILE = "users/profile/";
export const E_USERS_LOGIN = "/users/login/";
