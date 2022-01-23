import { logsApiResult } from "../services/types"
import { LogDetails, LogSeverityStats } from "./types"

//mock data in text format 
export const externalData: string =
    '2016-09-20 16:23:10,994 INFO  Some info message\n2016-09-20 16:23:11,994 INFO  Some other info message \n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 INFO  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 INFO  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 INFO  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 INFO  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 ERROR  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 INFO  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 ERROR  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 INFO  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 ERROR  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 ERROR  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 ERROR  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 ERROR  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:12,994 WARNING  Some warning message\n2016-09-20 16:23:13,994 WARNING  Some other warning message\n2016-09-20 16:23:14,994 ERROR  Some error message\n2016-09-20 16:23:14,994 ERROR  Some error message\n2016-09-20 16:23:10,994 INFO  Some info message'


//split log string into an Array of strings of the format:
/*
0 => 2016-09-20 16:23:10,994 INFO  Some info message
1 => 2016-09-20 16:23:12,994 WARNING  Some warning message of reversed
2 => 2016-09-20 16:23:14,994 ERROR  Some error message
*/
export function retrieveLogAsList(page: number): logsApiResult {
    //number of entries to retrieve
    const n_entries: number = 10

    //split the data for the desired page
    const values: string[] = externalData.split('\n').slice(page * n_entries, page * n_entries + n_entries)

    //transform the data into an object and return
    const LogEntryList: LogDetails[] = values.map((value) => {
        return retrieveLogEntryDetails(value)
    })

    const stats: { [key: string]: LogSeverityStats } = LogEntryList.reduce((acc: { [key: string]: LogSeverityStats }, value: LogDetails, index: number) => {
        if (acc[value.severity] === undefined) {
            return {
                ...acc,
                [value.severity]: {
                    quantity: 1
                }
            }
        } else {
            return {
                ...acc,
                [value.severity]: { quantity: acc[value.severity].quantity + 1 }
            }
        }
    }, {})

    return { list: LogEntryList, stats: stats }
}

export function retrieveLogEntryDetails(log: string): LogDetails {
    const [date, time, severity, ...rest]: string[] = log.split(' ')
    return { datetime: `${date} ${time}`, severity: severity, message: rest.join(' ') }
}
