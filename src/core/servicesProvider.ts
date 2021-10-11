import { useContext, createContext } from 'react';

import { Api } from 'services';

export type Services = {
  readonly api: Api;
};

const servicesContext = createContext<Services | null>(null);
const ServicesProvider = servicesContext.Provider;

function useService<T extends keyof Services>(serviceName: T): Services[T] {
  const context = useContext(servicesContext);
  if (context) {
    return context[serviceName];
  }
  throw Error('Service Provider or services in Service Provider are not provided!');
}

export { useService, ServicesProvider };
