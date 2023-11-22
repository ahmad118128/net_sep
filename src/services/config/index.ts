import { http } from "@src/services/http";
import { IAxiosResponse } from "@src/types/services";
import { IAddConfig, IFileType } from "./types";
import {
  E_CONFIG,
  E_UPDATE_DELETE_CONFIG,
  E_WHITE_LIST_FILES,
} from "./endpoint";

export const API_ADD_CONFIG = (body: IAddConfig) =>
  http.post<IAddConfig, IAxiosResponse<IAddConfig[]>>(E_CONFIG, body);

export const API_ADD_UPDATE = (body: IAddConfig) =>
  http.patch<IAddConfig, IAxiosResponse<IAddConfig[]>>(
    E_UPDATE_DELETE_CONFIG(body.id as number),
    body
  );

export const API_CONFIG_LIST = () =>
  http.get<IAxiosResponse<IAddConfig[]>>(E_CONFIG);

export const API_DELETE_FILE_TYPE = (id: number) =>
  http.delete<IAxiosResponse<any>>(`${E_WHITE_LIST_FILES}${id}`);

export const API_UPDATE_FILE_TYPE = (body: IFileType) =>
  http.patch<IAxiosResponse<any>>(`${E_WHITE_LIST_FILES}${body.id}`, body);

export const API_CREATE_FILE_TYPE = (body: IFileType) =>
  http.post<IAxiosResponse<any>>(`${E_WHITE_LIST_FILES}`, body);
