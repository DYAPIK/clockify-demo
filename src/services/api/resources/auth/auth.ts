import { autobind } from 'core-decorators';

import HttpActions from '../../HttpActions';
import BaseApi from '../../BaseApi';

class Auth extends BaseApi {
  public onTokenChanged: (token: string | null) => void;

  constructor(actions: HttpActions, onTokenChanged: (token: string | null) => void) {
    super(actions);
    this.onTokenChanged = onTokenChanged;
  }

  @autobind
  public getToken(): string | null {
    return '';
  }

}

export default Auth;
