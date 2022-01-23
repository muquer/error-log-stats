// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { retrieveLogAsList } from '../external_data_mock/ExternalData'
import { logsApiResult } from './types'

// Define a service using a base URL and expected endpoints
export const logsApi = createApi({
    reducerPath: 'logsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://some-random-api.ml/joke' }),
    endpoints: (builder) => ({
        getLogsList: builder.query<logsApiResult, number>({
            queryFn: (page: number) => {
                const data: logsApiResult = retrieveLogAsList(page)
                return { data: data }
            },
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetLogsListQuery } = logsApi