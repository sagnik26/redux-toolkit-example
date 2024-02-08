import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            return {
                ...state,
                tasks: [...state.tasks, {id: new Date().getTime(), data: action.payload}]
            }
        },
        deletetodo: (state, action) => {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        }
    }
})

export const { addTodo, deletetodo } = todoSlice.actions;
export default todoSlice.reducer;
