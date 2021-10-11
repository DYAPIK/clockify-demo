import HttpActions from './HttpActions';

import { autobind } from 'core-decorators';

import Auth from './resources/auth/auth';
import Workspace from './resources/workspace/workspace';
import Client from './resources/client/client';

class Api {
  public static instance: Api | null = null;

  public auth: Auth;
  public workspace: Workspace;
  public client: Client;

  public static getInstance() {
    if (!Api.instance) {
      const instance = new Api();
      Api.instance = instance;
    }
    return Api.instance;
  }

  constructor() {
    const httpActions = new HttpActions();
    
    this.auth = new Auth(httpActions, this.setTokenForEachApi);
    this.workspace = new Workspace(httpActions);
    this.client = new Client(httpActions);

    const token = this.auth.getToken();
    this.setTokenForEachApi(token);
  }

  @autobind
  private setTokenForEachApi(token: string | null) {
    const entities: { token: string | null }[] = [
    ];
    entities.forEach((entity) => entity.token = token);
  }
}

export default Api;
