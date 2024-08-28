import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
    },

    reducers: {
        addTodo: (state, action) => {
            const { title, description, date, image } = action.payload;
            state.todoList.push({
                id: Date.now(),
                title,
                description,
                date,
                image,
                isCompleted: false,
            });
        },

        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(
                (todo) => todo.id !== action.payload
            );
        },

        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            state.todoList = state.todoList.map((todo) =>
                todo.id === id ? { ...todo, title: title } : todo
            );
        },
        toggleTodo: (state, action) => {
            const { id } = action.payload;
            state.todoList = state.todoList.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            );
        },
    },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
    TodoSlice.actions;

export default TodoSlice.reducer;
