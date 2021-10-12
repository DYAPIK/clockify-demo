import { autobind } from 'core-decorators';

import { User } from 'shared/types/models';

import BaseApi from '../../BaseApi';

class UserApi extends BaseApi {

  @autobind
  public async loadUsersByWorkspaceId(workspaceId: string): Promise<User[]> {
    const response = await this.actions.get<User[]>({
      url: `/workspaces/${workspaceId}/users`,
      options: { headers: this.authHeaders },
    });

    return this.handleResponse(response);
  }

}

export default UserApi;
