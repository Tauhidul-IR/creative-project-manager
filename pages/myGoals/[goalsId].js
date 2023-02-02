
import { useContext } from "react";
import Background from "../../Components/Backgroud/Background";
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import GoalStatusModal from "../../Components/Goal/GoalStatusModal";



const GoalsDetails = ({ goal }) => {
    const { user } = useContext(AuthContext)

    // console.log(goalOwner?.split(' ')[0][0] + goalOwner?.split(' ')[1][0])


    return (
        <div>
            <Background></Background>

            {/* <GoalDetails goal={goal}></GoalDetails> */}

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
                        {/* ------goal summary ------------------------- */}
                        <div className="w-full " >
                            <button className="w-full rounded-md border-blue-400 bg-slate-300 text-left" >
                                <div className="m-10">
                                    <h1 className="text-2xl font-bold">Status Update - 22</h1>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold mt-4">summary</h4>
                                        <p className="text-sm font-bold text-primary">dynamic text</p>
                                    </div>
                                    <div className="flex  justify-between items-center">
                                        <div className="flex my-6 justify-left items-center">
                                            <div className="mr-3">
                                                {
                                                    user?.displayImage ? <img src="" alt="" /> :
                                                        <>
                                                            <div className="w-7 h-7 rounded-full bg-sky-400 flex justify-center items-center ">
                                                                <h6 className="uppercase font-bold text-sm">{goal?.goalOwner.split(' ')[0][0] + goal?.goalOwner.split(' ')[1][0]}</h6>
                                                            </div>
                                                        </>
                                                }
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{goal?.goalOwner}</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="status-modal" className="btn btn-sm btn-outline btn-info text-black font-bold">View Status</label>
                                        </div>
                                    </div>
                                </div>
                            </button>


                            {/* The button to open modal */}
                            {/* <label htmlFor="status-modal" className="btn">open modal</label> */}

                            {/* Put this part before </body> tag */}
                            {/* <input type="checkbox" id="status-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="status-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                </div>
                            </div> */}
                            {/* <GoalStatusModal></GoalStatusModal> */}
                        </div>




                        <div className="divider w-full"></div>
                        {/* progress--------------- */}
                        <div>
                            <h3 className="text-lg font-bold">Recent status updates <span className="text-green-800">Update date</span></h3>

                        </div>
                        <br />
                        <div>
                            <div className="flex justify-between">
                                <h3 className="font-bold text-xl">Goal Description</h3>
                                <button className="btn btn-sm btn-primary">Add</button>
                            </div>
                            <textarea className="textarea textarea-bordered w-full mt-3" placeholder="Goal"></textarea>
                        </div>
                        <div className="divider w-full"></div>
                        <div>
                            <div className="flex my-6 justify-left items-center">
                                <div className="mr-3">
                                    {
                                        user?.displayImage ? <img src="" alt="" /> :
                                            <>
                                                <div className="w-7 h-7 rounded-full bg-sky-400 flex justify-center items-center ">
                                                    <h6 className="uppercase font-bold text-sm">{goal?.goalOwner.split(' ')[0][0] + goal?.goalOwner.split(' ')[1][0]}</h6>
                                                </div>
                                            </>
                                    }
                                </div>
                                <div>
                                    <h4 className="font-bold">{goal?.goalOwner} is Created this Goal .</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid w-1/4 flex-grow h-32 card rounded-box place-items-center">
                    <div>
                        <div>
                            <h2 className="text-2xl font-bold">About This Goal</h2>
                            <div className="flex my-6 justify-center items-center">
                                <div className="mr-3">
                                    {
                                        user?.displayImage ? <img src="" alt="" /> :
                                            <>
                                                <div className="w-8 h-8 rounded-full bg-sky-400 flex justify-center items-center ">
                                                    <h6 className="uppercase font-bold text-sm">{goal?.goalOwner.split(' ')[0][0] + goal?.goalOwner.split(' ')[1][0]}</h6>
                                                </div>
                                            </>
                                    }
                                </div>
                                <div>
                                    <h6 className="text-xs font-bold
                                     text-slate-400">Goal Owner</h6>
                                    <h4 className="font-bold">{goal?.goalOwner}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        {/* -------------Time period part----------------- */}
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">Time Period</h2>
                                <h1 className=" font-bold text-gray-400">{goal?.timeSlot}</h1>
                            </div>
                            {/* <div className="mt-4">
                                <h2 className="text-lg font-bold">Custom due date</h2>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`http://localhost:5000/goals/${params?.goalsId}`);
    const data = await res.json();

    console.log(data._id, '--------------------------------------------------------');

    return {
        props: {
            goal: data
        }
    }
}



export const getStaticPaths = async () => {

    const res = await fetch("http://localhost:5000/goals");
    const goals = await res.json();

    // console.log(goals[0]._id);

    const paths = goals.map(goal => {
        return {
            params: {
                goalsId: `${goal._id}`
            }
        }
    })


    return {
        paths,
        fallback: false
    }

}

export default GoalsDetails;