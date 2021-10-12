import { useContext, createContext } from 'react';

import { WorkspaceModel } from 'features/workspaces/model';
import { ClientsModel } from 'features/clients/model';
import { SelectUserModel } from 'features/selectUser/model';
import { GetReportsModel } from 'features/getReports/model';

export type FeaturesModels = {
  readonly workspace: WorkspaceModel;
  readonly clients: ClientsModel;
  readonly selectUser: SelectUserModel;
  readonly getReports: GetReportsModel;
};

const featuresContext = createContext<FeaturesModels | null>(null);
const FeaturesModelsProvider = featuresContext.Provider;

function useFeature<T extends keyof FeaturesModels>(featureName: T) {
  const context = useContext(featuresContext);
  if (context) {
    return context[featureName];
  }
  throw Error('Feature Provider or features in Feature Provider are not provided!');
}

function makeFeatureContext<T extends keyof FeaturesModels>(featureName: T) {
  const useFeatureModel = () => {
    const context = useContext(featuresContext);
    if (context) {
      return context[featureName];
    }
    throw Error('Feature Provider or features in Feature Provider are not provided!');
  }

  return { useFeatureModel };
}

export { makeFeatureContext, FeaturesModelsProvider, featuresContext, useFeature };
