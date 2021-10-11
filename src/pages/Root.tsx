import { Switch, Route, MemoryRouter } from 'react-router';

import { Workspaces } from './Workspaces';

function Root() {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="/" component={Workspaces} />
      </Switch>
    </MemoryRouter>
  );
}

export { Root };
