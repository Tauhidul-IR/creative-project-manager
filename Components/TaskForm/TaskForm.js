

const TaskForm = () => {
    return (
        <div>

            <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div class="mb-4">
                        <h1 class="text-grey-darkest text-3xl font-bold uppercase">Create Task</h1>
                        <div class="flex mt-4">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                            <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-blue hover:bg-green-500">Add</button>
                        </div>
                    </div>
                    <div>
                        <div class="flex mb-4 items-center">
                            <p class="w-full text-grey-darkest">My new Task</p>
                            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-blue hover:bg-green-500 text-green border-green">Done</button>
                            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red hover:bg-red-500">Remove</button>
                        </div>
                        <div class="flex mb-4 items-center">
                            <p class="w-full line-through text-green">my task 1</p>
                            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-blue text-grey border-grey hover:bg-green-500">Not Done</button>
                            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red hover:bg-red-500">Remove</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TaskForm;