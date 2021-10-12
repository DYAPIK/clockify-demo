import { attach, combine, createEffect, Store } from 'effector';
import { Services } from 'services/types';

import { startOfMonth, endOfMonth } from 'date-fns';

type Deps = {
  dateMonth$: Store<Date | null>;
  selectedUserIDs$: Store<string[]>
};

type EffectArguments = {
  dateMonth: Date | null;
  workspaceId: string;
  usersIDs: string[];
};

function createGetSummaryReportByMonth(services: Services, deps: Deps) {
  const effect = createEffect(async (args: EffectArguments) => {
    const { dateMonth, workspaceId, usersIDs } = args;

    // TODO: use guard
    if (dateMonth === null) {
      return;
    }

    const report = await services.api.reports.getSummaryReportByUsersIDs({
      usersIDs,
      workspaceId,
      dateStart: startOfMonth(dateMonth).toISOString(),
      dateEnd: endOfMonth(dateMonth).toISOString(),
    });
    return report;
  });

  const { dateMonth$, selectedUserIDs$ } = deps;
  const attachedEffect = attach({
    effect,
    source: combine({ dateMonth: dateMonth$, selectedUserIDs: selectedUserIDs$ }),
    mapParams: (workspaceId: string, state) => {
      const { dateMonth, selectedUserIDs } = state;
      return {
        workspaceId,
        dateMonth,
        usersIDs: selectedUserIDs,
      };
    },
  })

  attachedEffect.fail.watch(({ params, error }) => {
    console.error(error);
  });

  return attachedEffect;
}

export { createGetSummaryReportByMonth };
