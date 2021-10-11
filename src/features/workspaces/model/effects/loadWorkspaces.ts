import { createEffect } from 'effector';
import { Services } from 'services/types';

function createLoadWorkspacesEffect(services: Services) {
  const effect = createEffect(async () => {
    const workspaces = await services.api.workspace.loadWorkspaces();
    return workspaces;
  });

  effect.fail.watch(({params, error}) => {
    console.error(error);
  });

  return effect;
}

export { createLoadWorkspacesEffect };
