
const WorkingTask = () => {
    return (
        <div className="h-screen grid lg:grid-cols-3 gap-3 sm:grid-cols-1 items-center">
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className="chat-header">Project Name.........</h1>
                        <p>Task what user write</p>
                        <h3>Who is the user and assigned this task</h3>
                        <p>Task Complete time from: 2023/2/22 to: 2023/2/22</p>
                        <div className="flex gap-3 justify-end">
                            <button className="btn btn-sm bg-blue-400 border-none hover:bg-green-500 active:bg-green-800">Complete</button>
                            <button className="btn btn-sm bg-black border-none hover: active:bg-black">Do later</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingTask;