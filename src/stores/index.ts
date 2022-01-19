import { configureStore } from '@reduxjs/toolkit'
import { logsApi } from '../services/logsEndpoint'
import { setupListeners } from '@reduxjs/toolkit/query'
/*
Redux store to handle the api calls
*/
export const store = configureStore({
    reducer: {
        [logsApi.reducerPath]: logsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logsApi.middleware),
})


setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch