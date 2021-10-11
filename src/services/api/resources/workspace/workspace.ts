import { autobind } from 'core-decorators';

import { Workspace } from 'shared/types/models';

import BaseApi from '../../BaseApi';

class Workspaces extends BaseApi {

  @autobind
  public async loadWorkspaces(): Promise<Workspace[]> {
    const response = await this.actions.get<Workspace[]>({
      url: `/workspaces`,
      options: { headers: this.authHeaders },
    });

    return this.handleResponse(response);
  }

}

export default Workspaces;
