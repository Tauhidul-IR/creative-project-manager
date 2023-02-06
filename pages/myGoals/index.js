
import { FaUserEdit, FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Backgroud/Background";
import GoalCard from "../../Components/Goal/GoalCard";
import { AuthContext } from "../../Others/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";


const MyGoals = () => {
    const { user } = useContext(AuthContext)
    const [handleCloseModal, setHandleCloseModal] = useState(user?.email)
    // const date = format(new Date(), 'PP');

    const { data: goals = [], refetch, isLoading } = useQuery({
        queryKey: ['goals'],
        queryFn: async () => {
            // const res = await fetch(`http://localhost:5000/goals?email=${user?.email}`);
            const res = await fetch('https://creative-project-manager-server.vercel.app/goals');
            const data = await res.json();
            return data;
        }
    });


    const handleModal = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const goalName = form.goalName.value;
        const fName = form.fName.value;
        const lName = form.lName.value;
        const goalOwner = fName + ' ' + lName;
        const timeSlot = form.timeSlot.value;
        const privacy = form.privacy.value;
        const member = form.member.value;
        const goalModal = {
            goalName,
            goalOwner,
            email,
            timeSlot,
            privacy,
            member,
            goalCreateDate: format(new Date(), 'PP')
        }
        console.log(goalModal);
        fetch('https://creative-project-manager-server.vercel.app/goals', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(goalModal)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Goal added')
                    setHandleCloseModal(null)
                    refetch()

                }


            })

    }


    return (
        <div>
            <Navbar></Navbar>
            <Background></Background>
            <div className="bg-blue-100 pl-4 min-h-screen">
                <div className="flex justify-start items-center py-2">
                    <div className="mr-3 bg-purple-300 p-5 rounded-lg">
                        <FaUserEdit className="w-6"></FaUserEdit>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">My WorkSpace</h2>
                        <h3 className="font-bold">My Goals</h3>
                    </div>
                </div>
                <div className="divider"></div>

                <div>
                    <label htmlFor="goal-modal" className="btn btn-primary hover:bg-purple-300 hover:text-black btn-xs ">
                        <FaPlus></FaPlus>
                        <h5 className="ml-1">Add One</h5>
                    </label>
                </div>
                <div className="divider"></div>





                {/* ------------------------Modal------------------------- */}
                {
                    handleCloseModal && <div>
                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="goal-modal" className="modal-toggle" />
                        <div className="modal">

                            <form onSubmit={handleModal} className="modal-box relative bg-sky-200">
                                <h5 className="font-bold">Add Goal</h5>
                                <label htmlFor="goal-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <div className="divider"></div>
                                {/* name input */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold ">Name</span>
                                    </label>
                                    <input name="goalName" type="text" placeholder="Enter goal name" className="input input-bordered w-full " />
                                </div>
                                {/* Goal owner input */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold ">Goal Owner</span>
                                    </label>
                                    <div className="flex gap-3">
                                        <input name="fName" type="text" placeholder="FirstName" className="input input-bordered w-full " required />
                                        <input name="lName" type="text" placeholder="LastName" className="input input-bordered w-full " required />
                                    </div>
                                </div>
                                {/* Goal owner input */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold ">Email</span>
                                    </label>
                                    <input name="email" defaultValue={user?.email} readOnly type="email" placeholder="Email" className="input input-bordered w-full " />
                                </div>
                                {/* time period */}
                                <div className="flex gap-2">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold ">Time period</span>
                                        </label>
                                        <select name="timeSlot" className="select select-bordered">
                                            <option value={'Q1-Jan-Mar'}>Q1- <span className="text-sm">Jan-Mar</span></option>
                                            <option value={'Q1-Jan-Mar'}>Q2- <span className="text-sm">April-June</span></option>
                                            <option value={'Q1-Jan-Mar'}>Q3- <span className="text-sm">July-Sep</span></option>
                                            <option value={'Q1-Jan-Mar'}>Q4- <span className="text-sm">Oct-Dec</span></option>
                                        </select>
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold ">Privecy</span>
                                        </label>
                                        <select name="privacy" className="select select-bordered">
                                            <option value={'Public'}>Public</option>
                                            <option value={'Private'}>Private</option>

                                        </select>
                                    </div>
                                </div>
                                {/* Members input */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold ">Members</span>
                                    </label>
                                    <input type="text" name="member" placeholder="Add a Member" className="input input-bordered w-full " />
                                </div>
                                <input className='w-full mt-5 btn btn-primary' type="submit" value="Save Goal" />
                            </form>
                        </div>
                    </div>
                }
                {/* -------------------------modal end--------------------- */}


                {/* Goal Card */}
                <GoalCard goals={goals}></GoalCard>

            </div>
        </div>
    );
};


export default MyGoals;

