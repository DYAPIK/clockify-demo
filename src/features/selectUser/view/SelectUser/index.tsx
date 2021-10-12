import { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

import { block } from 'bem-cn';

import { Preloader, Select } from 'shared/view/elements';
import { Option } from 'shared/types/utils';

import { useFeatureModel } from '../../context';

import './style.scss';

const b = block('select-user');

type Props = {
  workspaceId: string | null;
};

function SelectUser({ workspaceId }: Props) {
  const {
    loadUsersByWorkspaceIdFx, users$, selectedUserIDs$, setSelectedUserIDs,
    communication: { loadingUsersByWorkspaceId },
  } = useFeatureModel();
  const users = useStore(users$);
  const selectedUserIDs = useStore(selectedUserIDs$);
  const isLoadingUsers = useStore(loadingUsersByWorkspaceId.isLoading$);

  useEffect(() => {
    if (workspaceId !== null) {
      loadUsersByWorkspaceIdFx(workspaceId);
      setSelectedUserIDs([]);
    }
  }, [workspaceId, loadUsersByWorkspaceIdFx, setSelectedUserIDs]);

  const handleSelectUser = useCallback((options: Option<string>[]) => {
    setSelectedUserIDs(options.map(x => x.value));
  }, [setSelectedUserIDs]);

  return (
    <div className={b()}>
      <div className={b('label')}>Пользователь</div>
      <div className={b('select')}>
        <Select
          isMulti
          value={selectedUserIDs}
          options={users.map(({ id, name }) => ({ label: name, value: id }))}
          onChange={handleSelectUser}
          placeholder="Выберите пользователя"
        />
        <div className={b('preloader')}>
          {isLoadingUsers ? <Preloader size={25} isShow /> : null}
        </div>
      </div>
    </div>
  );
}

export { SelectUser };
