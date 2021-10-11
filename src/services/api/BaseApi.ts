import { AxiosResponse } from 'axios';

import { isErrorStatus } from './helpers';
import { ApiError } from './error';
import { Converter } from './types/response';

import HttpActions from './HttpActions';
import { getEnvParams } from 'core';

class BaseApi {
  protected actions: HttpActions;
  protected _token: string | null = null;

  set token(value: string | null) {
    this._token = value;
  }

  constructor(actions: HttpActions) {
    this.actions = actions;
  }

  protected handleResponse<ResponseData>(response: AxiosResponse<ResponseData>): ResponseData;
  protected handleResponse<ResponseData, Result>(
    response: AxiosResponse<ResponseData>,
    converter: Converter<ResponseData, Result>,
  ): Result;

  protected handleResponse<ResponseData, Result>(
    response: AxiosResponse<ResponseData>,
    converter?: Converter<ResponseData, Result>,
  ): Result | ResponseData {


    if (isErrorStatus(response.status)) {
      throw new ApiError({ response });
    }

    const responseData = response.data as ResponseData;
    if (converter) {
      return converter(responseData);
    }

    return responseData;
  }

  protected get authHeaders() {
    // if (!this._token) {
    //   console.error('Api token not found!');
    // }

    return { 'X-Api-Key': getEnvParams().apiKey! };
  }

}

export default BaseApi;
