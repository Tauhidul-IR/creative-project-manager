import TaskArticle from "../../Components/TaskArticle/TaskArticle";
import TaskForm from "../../Components/TaskForm/TaskForm";
import { Link } from 'next/link';

const TaskManagement = () => {
    return (
        <div className="">
            <TaskArticle />
            <div className="btn-group lg:m-6 md:m-6 sm:mx-auto">
                <button onClick="TaskForm" className="btn border-white">Create Task</button>
                <button className="btn border-white">Pending Task</button>
                <button className="btn border-white">Do Later</button>
            </div>
            <TaskForm />
        </div>
    );
};


export default TaskManagement;