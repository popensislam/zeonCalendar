import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    plans: [
        {
            title: 'hello',
            text: 'go to shop',
            data: '24 Jun 2022'
        },
    ],
    selectedData: ''
}

export const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        getPlan(state, action) {
            const foundData = state.plans.find(item => item.data == action.payload.data)

            if (foundData) {
                console.log(foundData.data)
                const plans = state.plans.filter(item => item.data != foundData.data)
                plans.push(action.payload)
                state.plans = plans
                return
            }
            state.plans.push(action.payload)
        },
        getSelectedData(state, action) {
            state.selectedData = action.payload
        }
    }
})

export const { getPlan, getSelectedData } = planSlice.actions
export default planSlice.reducer