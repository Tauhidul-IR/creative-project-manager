import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date("2024/01/08"));

    return (
        <div className="w-">
            <div className=" h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-stone-300 rounded shadow p-6 m-4 w-full lg:w-6/5 lg:max-w-2xl">
                    <div className="mb-4">
                        <h1 className=" text-center text-grey-darkest text-3xl font-bold uppercase underline">Create Task</h1>
                        <div className=" mt-4">
                            <div className=" my-4 items-center">

                                <input className="shadow  appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker" placeholder="Project Name" />
                            </div>
                            <div className="my-4 flex gap-2">
                                from:<div>

                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                    />
                                </div>
                                to: <div>

                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                    />

                                </div>
                            </div>



                            <input className="shadow  appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Write Task" />

                            <input className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Assigned to" />

                            <div class="mt-4 flex justify-end ">
                                <button class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 active:bg-green-800">
                                    Save
                                </button>
                                <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 active:bg-red-800 ml-4">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TaskForm;