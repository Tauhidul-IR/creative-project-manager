import { useRouter } from "next/router";


const GoalDetails = ({ goal }) => {
    console.log(goal);

    const router = useRouter();

    const handleBack = () => {
        router.push("/Goals/Goals")
    }
    return (
        <div>
            {/* <div className="card mx-10 my-10 bg-primary text-primary-content">
                <div className="card-body">
                    <p>PostId:{goal?._id}</p>
                    <h2 className="card-title">Title: </h2>
                    <p>Post: {goal?.body}</p>
                    <button onClick={handleBack} className="btn btn-primary">Back to post</button>
                </div>
            </div> */}
            <div className="my-6 flex flex-col w-3/4 mx-auto min-h-screen lg:flex-row">
                <div className=" w-2/3  justify-start">
                    <div className="">
                        <div>
                            <h2 className="text-4xl font-bold mb-5">{goal?.goalName}</h2>
                            <div className="flex justify-around">
                                <h2 className="font-bold">This Goal is <span>on track</span> </h2>
                                <button className="btn btn-primary btn-xs">update</button>
                            </div>
                        </div>
                        <div className="divider w-full"></div>
                        <div className="w-full ml-10">
                            <h1>Status Update - 22</h1>
                            <h4>summary</h4>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid w-1/4 flex-grow h-32 card rounded-box place-items-center">
                    <div>
                        <div>
                            <h2>About This Goals</h2>
                            <h4>{goal?.goalOwner}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalDetails;