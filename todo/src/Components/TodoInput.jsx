import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxStore/TodoSlice";

const TodoInput = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        let url = URL.createObjectURL(data.image[0]);
        dispatch(addTodo({ ...data, image: url }));
        reset();
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Create a New To-Do
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <div className="flex flex-col">
                    <label
                        className="text-lg font-medium text-gray-700"
                        htmlFor="title"
                    >
                        Title *
                    </label>
                    <input
                        {...register("title", {
                            required: "Title is required",
                        })}
                        type="text"
                        id="title"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter title"
                    />
                    {errors.title && (
                        <span className="text-red-500 mt-1 text-sm">
                            {errors.title.message}
                        </span>
                    )}
                </div>

                {/* End Date */}
                <div className="flex flex-col">
                    <label
                        className="text-lg font-medium text-gray-700"
                        htmlFor="end-date"
                    >
                        End Date *
                    </label>
                    <input
                        {...register("date", {
                            required: "Date is required",
                        })}
                        type="date"
                        id="end-date"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.date && (
                        <span className="text-red-500 mt-1 text-sm">
                            {errors.date.message}
                        </span>
                    )}
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label
                        className="text-lg font-medium text-gray-700"
                        htmlFor="description"
                    >
                        Description *
                    </label>
                    <textarea
                        {...register("description", {
                            required: "Description is required",
                        })}
                        id="description"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        placeholder="Enter description"
                    />
                    {errors.description && (
                        <span className="text-red-500 mt-1 text-sm">
                            {errors.description.message}
                        </span>
                    )}
                </div>

                {/* Image Upload */}
                <div className="flex flex-col">
                    <label
                        className="text-lg font-medium text-gray-700"
                        htmlFor="image"
                    >
                        Image *
                    </label>
                    <input
                        {...register("image", {
                            required: "Image is required",
                        })}
                        type="file"
                        id="image"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        accept="image/*"
                    />
                    {errors.image && (
                        <span className="text-red-500 mt-1 text-sm">
                            {errors.image.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Create To-Do
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TodoInput;
