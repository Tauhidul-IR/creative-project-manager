import DatePicker from "react-datepicker";
import React, { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Others/AuthProvider/AuthProvider';

const TaskForm = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date("2024/01/08"));
    const formHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const pName = form.projectName.value;
        const email = form.email.value;
        const user = form.user.value;
        const task = form.task.value;
        const assigner = form.assigner.value;

        const taskData = {
            email, user, pName, task, assigner, startDate, endDate
        }
        console.log(taskData);

        const url = 'http://localhost:5000/task'


        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    alert('Task added')
                    form.reset()
                }
            })
            .catch(err => console.log(err));


    }

    return (
        <div>
            <div className=" h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-stone-300 rounded shadow p-6 m-4 w-full lg:w-6/5 lg:max-w-2xl sm:w-full flex sm:flex-wrap">
                    <div className="mb-4">
                        <h1 className=" text-center text-grey-darkest text-3xl font-bold uppercase underline">Create Task</h1>


                        <div className=" mt-4">
                            <form onSubmit={formHandler}>
                                <div className=" my-4 items-center">

                                    <input name="user" defaultValue={user?.displayName} disabled className="shadow  appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker" placeholder="User name" />

                                    <input name="email" defaultValue={user?.email} disabled className="shadow  appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker" placeholder="User email" />

                                    <input name="projectName" className="shadow  appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker" placeholder="Project Name" />
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

                                <input name="task" className="shadow  appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Write Task" />

                                <input name="assigner" className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Assigned to" />

                                <div class="mt-4 flex justify-end ">
                                    <button class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 active:bg-green-800">
                                        Save
                                    </button>
                                    <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 active:bg-red-800 ml-4">
                                        Delete
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default TaskForm;