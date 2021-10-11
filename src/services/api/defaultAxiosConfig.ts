import { AxiosRequestConfig } from "axios";

export const defaultAxiosConfig: AxiosRequestConfig = {
  validateStatus: (status: number) => status <= 526,
  withCredentials: false,
};
