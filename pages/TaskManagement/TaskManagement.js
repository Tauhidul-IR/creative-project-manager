

import TaskArticle from "../../Components/TaskArticle/TaskArticle";
import TaskTab from "../../Components/TaskTab/TaskTab";
import TodoList from "../../Components/TodoList/TodoList";

const TaskManagement = () => {

    return (
        <div className="p-18">
            <TaskArticle />
            {/* <TaskTab></TaskTab> */}
            <TodoList></TodoList>
            </div>
    );
};


export default TaskManagement;