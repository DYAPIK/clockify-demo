import { useCallback } from 'react';
import { useStore } from 'effector-react';

import { block } from 'bem-cn';

import { MonthDatepicker } from 'shared/view/components';

import { useFeatureModel } from '../../context';

import './style.scss';
import { Button } from 'shared/view/elements';


const b = block('get-reports');

type Props = {
  workspaceId: string | null;
};

function GetReports({ workspaceId }: Props) {
  const { dateMonth$, setDateMonth, getReportByMonthFx } = useFeatureModel();

  const dateMonth = useStore(dateMonth$);

  const handleChange = useCallback((date: Date | null) => {
    setDateMonth(date);
  }, [setDateMonth]);

  const handleClickGetReport = useCallback(() => {
    if (workspaceId !== null) {
      getReportByMonthFx(workspaceId);
    }
  }, [getReportByMonthFx, workspaceId]);

  return (
    <div className={b()}>
      <MonthDatepicker
        value={dateMonth}
        onChange={handleChange}
      />
      <Button
        disabled={dateMonth === null}
        onClick={handleClickGetReport}
      >
        Загрузить отчет
      </Button>
    </div>
  );
}

export { GetReports };
