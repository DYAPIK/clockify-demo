import { createEvent, createStore } from 'effector';

import { Services } from 'services/types';
import { createCommunication } from 'shared/helpers';

import { User } from 'shared/types/models';

import { createLoadUsersByWorkspaceIdEffect } from './effects';

function createModel(services: Services) {
  const users$ = createStore<User[]>([]);
  const selectedUserIDs$ = createStore<string[]>([]);

  const loadUsersByWorkspaceIdFx = createLoadUsersByWorkspaceIdEffect(services);
  const loadingUsersByWorkspaceId = createCommunication(loadUsersByWorkspaceIdFx);

  const setSelectedUserIDs = createEvent<string[]>('select_user:select_user_id');

  users$.on(loadUsersByWorkspaceIdFx.doneData, (_, users) => users);
  selectedUserIDs$.on(setSelectedUserIDs, (_, userId) => userId);

  return {
    communication: {
      loadingUsersByWorkspaceId,
    },
    loadUsersByWorkspaceIdFx,
    users$,
    selectedUserIDs$,
    setSelectedUserIDs,
  }
}

export { createModel };

export type SelectUserModel = ReturnType<typeof createModel>;
