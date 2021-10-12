import { useCallback, useEffect } from 'react';

import { useStore } from 'effector-react';
import { block } from 'bem-cn';

import { Preloader, Select } from 'shared/view/elements';
import { Option } from 'shared/types/utils';

import { useFeatureModel } from '../../context';

import './style.scss';

const b = block('workspaces-table');

function SelectWorkspace() {
  const { 
    loadWorkspacesFx, workspaces$, selectedWorkspacedId$, selectWorkspaceId,
    communication: { loadingWorkspaces },
  } = useFeatureModel();

  const workspaces = useStore(workspaces$);
  const isLoadingWorkspaces = useStore(loadingWorkspaces.isLoading$);
  const selectedWorkspacedId = useStore(selectedWorkspacedId$);

  useEffect(() => {
    loadWorkspacesFx();
  }, [loadWorkspacesFx]);

  const handleSelectWorkspaceId = useCallback((options: Option<string>[]) => {
    if (options.length) {
      const [option] = options; 
      selectWorkspaceId(option.value);
    }
  }, [selectWorkspaceId]);

  return (
    <div className={b()}>
      <Select<string>
        value={selectedWorkspacedId ? [selectedWorkspacedId] : []}
        options={workspaces.map(({ name, id }) => ({ label: name, value: id }))}
        onChange={handleSelectWorkspaceId}
        placeholder="Выберите workspace"
      />
      <div className={b('preloader')}>
        {isLoadingWorkspaces ? <Preloader size={25} isShow /> : null}
      </div>
    </div>
  );
}

export { SelectWorkspace };
