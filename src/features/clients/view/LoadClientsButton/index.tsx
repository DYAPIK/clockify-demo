import { useCallback } from 'react';
import { useStore } from 'effector-react';

import { block } from 'bem-cn';

import { Button, Preloader } from 'shared/view';

import { useFeatureModel } from '../../context';

import './style.scss';

type Props = {
  workspaceId: string | null;
};

const b = block('load-clients-button');

function LoadClientsButton(props: Props) {
  const { workspaceId } = props;
  const { loadClientsFx, communication: { loadingClients } } = useFeatureModel();
  const isLoadingClients = useStore(loadingClients.isLoading$);

  const handleClick = useCallback(() => {
    if (workspaceId !== null) {
      loadClientsFx(workspaceId);
    }
  }, [loadClientsFx, workspaceId]);
  return (
    <div className={b()}>
      <Button
        onClick={handleClick}
        disabled={workspaceId === null}
      > 
        Загрузить компании по workspace
      </Button>
      <div className={b('preloader')}>
        {isLoadingClients ? <Preloader isShow={isLoadingClients} size={25} /> : null}
      </div>
    </div>
  );
}

export { LoadClientsButton };
