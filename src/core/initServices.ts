import { Api } from 'services';

import { Services } from 'services/types';

function initServices(): Services {
  return {
    api: Api.getInstance(),
  };
}

export { initServices };
