import { Services } from 'services/types';

import { workspaceFeature, clientsFeature } from 'features';

import { FeaturesModels } from './featureModelProvider';

function initFeaturesModels(services: Services): FeaturesModels {
  const workspace = workspaceFeature.createModel(services);
  const clients = clientsFeature.createModel(services);

  return {
    workspace,
    clients
  };
}

export { initFeaturesModels };
