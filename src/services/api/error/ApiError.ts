import { AxiosResponse } from 'axios';

export interface IApiError {
  response: AxiosResponse<any> | null;
}

export default class ApiError extends Error {
  public status: number | null = null;
  public isApiError = true;

  constructor({ response }: IApiError) {
    super(response ? response.data.message : 'unknown');
    this.status = response ? response.status : null;
  }
}

export function isApiError(error: any): error is ApiError {
  return error && error.isApiError && error instanceof Error;
}

export function isServerError(error: any): boolean {
  return Boolean(isApiError(error) && error.status && error.status >= 500);
}

