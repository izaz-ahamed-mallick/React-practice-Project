import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../reduxStore/TodoSlice";
import { useState } from "react";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todoList);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setEditedTitle(todo.title);
    };

    const handleSave = (id) => {
        dispatch(updateTodo({ id, title: editedTitle }));
        setEditId(null);
    };

    const handleCancel = () => {
        setEditId(null);
        setEditedTitle("");
    };

    const handleCheck = (id) => {
        dispatch(toggleTodo({ id }));
    };

    return (
        todos.length > 0 && (
            <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Todo List
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-4 px-6 text-left text-gray-800 font-semibold uppercase text-sm">
                                    Title
                                </th>
                                <th className="py-4 px-6 text-left text-gray-800 font-semibold uppercase text-sm">
                                    Description
                                </th>
                                <th className="py-4 px-6 text-left text-gray-800 font-semibold uppercase text-sm">
                                    End Date
                                </th>
                                <th className="py-4 px-6 text-left text-gray-800 font-semibold uppercase text-sm">
                                    Image
                                </th>
                                <th className="py-4 px-6 text-center text-gray-800 font-semibold uppercase text-sm">
                                    Completed
                                </th>
                                <th className="py-4 px-6 text-right text-gray-800 font-semibold uppercase text-sm">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo) => (
                                <tr
                                    key={todo.id}
                                    className={`  border-b last:border-0 border-gray-300 hover:bg-gray-100 
                                        
                                    `}
                                >
                                    <td
                                        className={`py-4 px-6 ${
                                            todo.isCompleted
                                                ? "active"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {editId === todo.id ? (
                                            <input
                                                value={editedTitle}
                                                onChange={(e) =>
                                                    setEditedTitle(
                                                        e.target.value
                                                    )
                                                }
                                                className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        ) : (
                                            todo.title
                                        )}
                                    </td>
                                    <td
                                        className={`py-4 px-6 ${
                                            todo.isCompleted
                                                ? "active"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {todo.description}
                                    </td>
                                    <td
                                        className={`py-4 px-6 ${
                                            todo.isCompleted
                                                ? "active"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {todo.date}
                                    </td>
                                    <td
                                        className={`py-4 px-6 ${
                                            todo.isCompleted
                                                ? "active"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {todo.image && (
                                            <img
                                                src={todo.image}
                                                alt={todo.title}
                                                className="w-16 h-16 object-cover rounded shadow-md"
                                            />
                                        )}
                                    </td>
                                    <td
                                        className={`py-4 px-6 ${
                                            todo.isCompleted
                                                ? "active"
                                                : "text-gray-800"
                                        } text-center`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={todo.isCompleted}
                                            onChange={() =>
                                                handleCheck(todo.id)
                                            }
                                            className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="py-4 px-6 flex items-center justify-end gap-2">
                                        {editId === todo.id ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleSave(todo.id)
                                                    }
                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEdit(todo)
                                                    }
                                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(todo.id)
                                                    }
                                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
};

export default TodoList;
