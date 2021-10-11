import { createEffect } from 'effector';
import { Services } from 'services/types';

function createLoadClientsEffect(services: Services) {
  const effect = createEffect(async (workspaceID: string) => {
    const clients = await services.api.client.loadClients(workspaceID);
    return clients;
  });

  effect.fail.watch(({params, error}) => {
    console.error(error);
  });

  return effect;
}

export { createLoadClientsEffect };
