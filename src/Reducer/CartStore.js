import {configureStore} from "@reduxjs/toolkit"
import { cartSlice } from "./Cartdatareducer"

export const store = configureStore(
    {
        reducer:{
            app:cartSlice.reducer
        }
    }
)