import { autobind } from 'core-decorators';

import { Report } from 'shared/types/models';

import BaseApi from '../../BaseApi';

class ReportsApi extends BaseApi {

  @autobind
  public async getSummaryReportByUsersIDs(args: GetSummaryReportArgs): Promise<Report> {
    const { workspaceId, dateEnd, dateStart, usersIDs } = args;
    const response = await this.actions.post<Report>({
      url: `/workspaces/${workspaceId}/reports/summary`,
      data: {
        dateRangeStart: dateStart,
        dateRangeEnd: dateEnd,
        summaryFilter: {
          groups: ['USER'],
        },
        amountShown: 'HIDE_AMOUNT',
        users: {
          ids: usersIDs,
          contains: 'CONTAINS',
          status: 'ALL',
        },
      },
      options: { headers: this.authHeaders },
      domainType: 'reportsApi',
    });

    return this.handleResponse(response);
  }

}

type GetSummaryReportArgs = {
  workspaceId: string;
  dateStart: string;
  dateEnd: string;
  usersIDs: string[];
};

export default ReportsApi;
