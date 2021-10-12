import { createEvent, createStore, Store } from 'effector';

import { Services } from 'services/types';
import { Report } from 'shared/types/models';
// import { createCommunication } from 'shared/helpers';

// import { User } from 'shared/types/models';

import { createGetSummaryReportByMonth } from './effects';

type Deps = {
  selectedUserIDs$: Store<string[]>
}

function createModel(services: Services, deps: Deps) {
  const { selectedUserIDs$ } = deps;
  const dateMonth$ = createStore<Date | null>(null);
  const report$ = createStore<Report | null>(null);

  const setDateMonth = createEvent<Date | null>('get_reports:set_date_month');
  const getReportByMonthFx = createGetSummaryReportByMonth(services, { dateMonth$, selectedUserIDs$ });

  dateMonth$.on(setDateMonth, (_, date) => date);
  report$.on(getReportByMonthFx.doneData, (_, report) => report ?? null)

  return {
    getReportByMonthFx,
    setDateMonth,
    dateMonth$,
    report$,
  }
}

export { createModel };

export type GetReportsModel = ReturnType<typeof createModel>;
