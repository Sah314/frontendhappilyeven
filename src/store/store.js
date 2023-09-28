import { configureStore} from '@reduxjs/toolkit'
import {slotSlice} from '../features/slotslice'

const store = configureStore({
    reducer:slotSlice.reducer,
})

export default store;