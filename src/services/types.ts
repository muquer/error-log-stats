import { LogDetails, LogSeverityStats } from "../external_data_mock/types";

export type logsApiResult = {
    list: LogDetails[],
    stats: {
        [key: string]: LogSeverityStats;
    }
}
