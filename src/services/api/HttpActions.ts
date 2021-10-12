import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

import { getEnvParams } from 'core/getEnvParams';

import { defaultAxiosConfig } from './defaultAxiosConfig';

interface IHttpActionParams {
  url: string;
  options?: AxiosRequestConfig;
  data?: any;
  domainType?: DomainType;
}

type DomainType = 'baseApi' | 'reportsApi';

class HttpActions {
  private baseURL = getEnvParams().baseAPI!;
  private reportsApiURL = getEnvParams().reportsAPI!;

  constructor() {

    if (!this.baseURL) {
      console.error('Api not configured!');
    }
  }

  public get<T>(params: IHttpActionParams): AxiosPromise<T> {
    const { url, options, data, domainType = 'baseApi' } = params;
    const axiosInstance = this.getAxiosInstance(domainType);
    return axiosInstance.get(url, { ...options, params: data });
  }


  public post<T>(params: IHttpActionParams): AxiosPromise<T> {
    const { url, data, options, domainType = 'baseApi' } = params;
    const axiosInstance = this.getAxiosInstance(domainType);
    return axiosInstance.post(url, data, options)
  }

  public del<T>(params: IHttpActionParams): AxiosPromise<T> {
    const { url, data, options, domainType = 'baseApi' } = params;
    const axiosInstance = this.getAxiosInstance(domainType);
    return axiosInstance.delete(url, { ...options, data });
  }

  public put<T>(params: IHttpActionParams): AxiosPromise<T> {
    const { url, data, options, domainType = 'baseApi' } = params;
    const axiosInstance = this.getAxiosInstance(domainType);
    return axiosInstance.put(url, data, options);
  }

  private getAxiosInstance(domain: DomainType) {
    return axios.create({
      ...defaultAxiosConfig,
      baseURL: this.getBaseUrl(domain),
    });
  }

  private getBaseUrl(domain: DomainType) {
    const urls: Record<DomainType, string> = {
      baseApi: this.baseURL,
      reportsApi: this.reportsApiURL,
    };
    const url = urls[domain];
    return url;
  }

}

export default HttpActions;
