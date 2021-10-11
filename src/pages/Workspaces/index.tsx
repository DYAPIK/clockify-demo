import { useStore } from 'effector-react';

import { block } from 'bem-cn';

import { useFeature } from 'core/featureModelProvider';

import { SelectWorkspace } from 'features/workspaces';
import { LoadClientsButton, ClientsList } from 'features/clients';

import { BaseLayout } from 'shared/view/components';

import './style.scss';

const b = block('workspaces-page');

function Workspaces() {
  const { selectedWorkspacedId$ } = useFeature('workspace');
  const selectedWorkspacedId = useStore(selectedWorkspacedId$);
  return (
    <BaseLayout>
      <div className={b()}>
        <div className={b('workspaces')}>
          <SelectWorkspace />
          <div className={b('load-clients-button')}>
            <LoadClientsButton workspaceId={selectedWorkspacedId} />
          </div>
        </div>
        <div className={b('clients-list')}>
          <ClientsList />
        </div>
      </div>
    </BaseLayout>
  );
}

export { Workspaces };
