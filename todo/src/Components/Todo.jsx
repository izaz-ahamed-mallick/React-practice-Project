import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
    return (
        <div className="min-h-screen">
            <TodoInput />
            <div className="mt-6">
                <TodoList />
            </div>
        </div>
    );
};

export default Todo;
