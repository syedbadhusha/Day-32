import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice(
    {
        name:"Cart Data",
        initialState:{
            cartData:[]
        },
        reducers:{
            fetchItems:(state,action)=>{
                state.cartData = action.payload;
                return state;
            },
            removeItem:(state,action)=>{
                state.cartData = state.cartData.filter((item)=>action.payload !== item.id)
                return state;
            }
        }
    }
)
export const {fetchItems,removeItem} = cartSlice.actions;