import { autobind } from 'core-decorators';

import { Client } from 'shared/types/models';

import BaseApi from '../../BaseApi';

class ClientApi extends BaseApi {

  @autobind
  public async loadClients(workspaceId: string): Promise<Client[]> {
    const response = await this.actions.get<Client[]>({
      url: `/workspaces/${workspaceId}/clients`,
      options: { headers: this.authHeaders },
    });

    return this.handleResponse(response);
  }

}

export default ClientApi;
