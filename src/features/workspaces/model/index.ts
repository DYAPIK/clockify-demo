import { createEvent, createStore } from 'effector';

import { Services } from 'services/types';
import { createCommunication } from 'shared/helpers';

import { Workspace } from 'shared/types/models';

import { createLoadWorkspacesEffect } from './effects';

function createModel(services: Services) {
  const workspaces$ = createStore<Workspace[]>([]);
  const selectedWorkspacedId$ = createStore<string | null>(null);

  const selectWorkspaceId = createEvent<string>('workspaces:select_workspace');

  const loadWorkspacesFx = createLoadWorkspacesEffect(services)

  workspaces$.on(loadWorkspacesFx.doneData, (_, workspaces) => workspaces);
  selectedWorkspacedId$.on(selectWorkspaceId, (_, workspaceId) => workspaceId);

  const loadingWorkspaces = createCommunication(loadWorkspacesFx);

  return {
    communication: {
      loadingWorkspaces,
    },
    loadWorkspacesFx,
    workspaces$,
    selectedWorkspacedId$,
    selectWorkspaceId,
  };
}

export type WorkspaceModel = ReturnType<typeof createModel>;

export { createModel };
