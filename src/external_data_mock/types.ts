export enum LogAttributes {
    datetime = "Date",
    severity = "Severity",
    message = "Message"
}

export type LogDetails = {
    datetime: string,
    severity: string,
    message: string
}

export type LogSeverityStats = {
    quantity: number
}