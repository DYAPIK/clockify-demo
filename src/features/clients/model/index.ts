import { createStore } from 'effector';
import { Services } from 'services/types';

import { Client } from 'shared/types/models';

import { createCommunication } from 'shared/helpers';
import { createLoadClientsEffect } from './effects';

function createModel(services: Services) {
  const clients$ = createStore<Client[]>([]);

  const loadClientsFx = createLoadClientsEffect(services);
  const loadingClients = createCommunication(loadClientsFx);

  clients$.on(loadClientsFx.doneData, (_, clients) => clients);

  return {
    communication: {
      loadingClients
    },
    loadClientsFx,
    clients$,
  };
}

export type ClientsModel = ReturnType<typeof createModel>;

export { createModel };
