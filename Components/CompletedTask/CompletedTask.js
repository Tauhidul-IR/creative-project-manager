
const CompletedTask = () => {
    return (
        <div className="h-screen  grid grid-cols-1 border-separate border-yellow-200 gap-4">
            <h1 className="my-4 text-3xl underline">My Completed Task</h1>
            <div className="card bg-black w-96 text-white shadow-xl">
                <div className="card-body">
                    <h1 className="chat-header">Project Name.........</h1>
                    <p>Task what user write</p>
                    <h3>Who is the user and assigned this task</h3>
                    <p>Task Complete time from: 2023/2/22 to: 2023/2/22</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="chat-header">Project Name.........</h1>
                    <p>Task what user write</p>
                    <h3>Who is the user and assigned this task</h3>
                    <p>Task Complete time from: 2023/2/22 to: 2023/2/22</p>

                </div>
            </div>
        </div>
    );
};

export default CompletedTask;