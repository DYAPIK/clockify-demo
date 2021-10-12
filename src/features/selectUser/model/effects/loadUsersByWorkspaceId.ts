import { createEffect } from 'effector';
import { Services } from 'services/types';

function createLoadUsersByWorkspaceIdEffect(services: Services) {
  const effect = createEffect(async (workspaceID: string) => {
    const users = await services.api.user.loadUsersByWorkspaceId(workspaceID);
    return users;
  });

  effect.fail.watch(({ params, error }) => {
    console.error(error);
  });

  return effect;
}

export { createLoadUsersByWorkspaceIdEffect };
