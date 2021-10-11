import { FeaturesModelsProvider } from './featureModelProvider';
import { initFeaturesModels } from './initFeaturesModels';
import { initServices } from './initServices';
import { ServicesProvider } from './servicesProvider';

function initAppEntities() {
  const services = initServices();
  return { features: initFeaturesModels(services), services };
}

function DepsProvider({ children }) {
  const appEntities = initAppEntities();
  return (
    <ServicesProvider value={appEntities.services}>
      <FeaturesModelsProvider value={appEntities.features}>
        {children}
      </FeaturesModelsProvider>
    </ServicesProvider>
  );
}

export { DepsProvider };
