import { Services } from 'services/types';

import { workspaceFeature, clientsFeature, selectUserFeature, getReportsFeature } from 'features';

import { FeaturesModels } from './featureModelProvider';

function initFeaturesModels(services: Services): FeaturesModels {
  const workspace = workspaceFeature.createModel(services);
  const clients = clientsFeature.createModel(services);
  const selectUser = selectUserFeature.createModel(services);

  const getReports = getReportsFeature.createModel(
    services,
    { selectedUserIDs$: selectUser.selectedUserIDs$ },
  );

  return {
    workspace,
    clients,
    selectUser,
    getReports,
  };
}

export { initFeaturesModels };
