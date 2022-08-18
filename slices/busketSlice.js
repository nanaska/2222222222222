import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    filters: [],
    totalPrice: 0
}
const busketSlice = createSlice({
    name: "busket",
    initialState,
    reducers: {
        addItem(state, action){
            const findItem = state.items.find(obj => obj.id == action.payload.id)
            if (findItem){
                findItem.count++
            }else{
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum,obj) => {
                            return (obj.price * obj.count) + sum
                        }, 0)
        },
        removeItem(state, action){
            state.items =   state.items.filter(obj => obj.id !== action.payload)
        },

        minusItem(state,action){
            const findItem = state.items.find(obj => obj.id == action.payload)
            if(findItem){
                if(findItem.count !== 1) {findItem.count--

                }else{ state.items =   state.items.filter(obj => obj.id !== action.payload)}
            }
            state.totalPrice = state.items.reduce((sum,obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        clearItems(state){
            state.items = []
        },
        doFilter(state,action){
            const findItem = Array.isArray(state.filters) ? state.filters.find(elem => elem === action.payload) : null

            if(findItem !== null){
             state.filters = state.filters.filter(obj => obj !== action.payload)

            }
            if (findItem == null){
             state.filters.push(action.payload)

            }

        },
        clearFilter(state){
            state.filters = []
        }
    }
})
export const {addItem,removeItem,minusItem, clearItems, doFilter, clearFilter} = busketSlice.actions

export default busketSlice.reducer