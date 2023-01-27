// import { FaUserEdit } from "react-icons/Fa";
// import { AiOutlinePlus } from "react-icons/Ai";
// import { useState } from "react";
// import GoalCard from "./GoalCard";

// const Goal = () => {
//     const [taskData, setTaskData] = useState(null);

//     const handleModal = (event) => {
//         event.preventDefault();
//         setTaskData('abc')
//         setTaskData(null)
//     }

//     return (
//         <div className="bg-blue-100 pl-4 min-h-screen">
//             <div className="flex justify-start items-center py-2">
//                 <div className="mr-3 bg-purple-300 p-5 rounded-lg">
//                     <FaUserEdit className="w-6"></FaUserEdit>
//                 </div>
//                 <div>
//                     <h2 className="text-2xl font-bold">My WorkSpace</h2>
//                     <h3 className="font-bold">My Goals</h3>
//                 </div>
//             </div>
//             <div className="divider"></div>

//             <div>
//                 <label htmlFor="goal-modal" className="btn btn-primary hover:bg-purple-300 hover:text-black btn-xs ">
//                     <AiOutlinePlus></AiOutlinePlus>
//                     <h5 className="ml-1">Add One</h5>
//                 </label>
//             </div>
//             <div className="divider"></div>





//             {/* ------------------------Modal------------------------- */}
//             <div>


//                 {/* Put this part before </body> tag */}
//                 <input type="checkbox" id="goal-modal" className="modal-toggle" />
//                 <div className="modal">

//                     <form onSubmit={handleModal} className="modal-box relative bg-sky-200">
//                         <h5 className="font-bold">Add Goal</h5>
//                         <label htmlFor="goal-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                         <div className="divider"></div>
//                         {/* name input */}
//                         <div className="form-control w-full">
//                             <label className="label">
//                                 <span className="label-text font-bold ">Name</span>
//                             </label>
//                             <input type="text" placeholder="Enter goal name" className="input input-bordered w-full " />
//                         </div>
//                         {/* Goal owner input */}
//                         <div className="form-control w-full">
//                             <label className="label">
//                                 <span className="label-text font-bold ">Goal Owner</span>
//                             </label>
//                             <input type="text" placeholder="Name or Email" className="input input-bordered w-full " />
//                         </div>
//                         {/* time period */}
//                         <div className="flex gap-2">
//                             <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text font-bold ">Time period</span>
//                                 </label>
//                                 <select name="timeSlot" className="select select-bordered">
//                                     <option value={'Q1-Jan-Mar'}>Q1- <span className="text-sm">Jan-Mar</span></option>
//                                     <option value={'Q1-Jan-Mar'}>Q2- <span className="text-sm">April-June</span></option>
//                                     <option value={'Q1-Jan-Mar'}>Q3- <span className="text-sm">July-Sep</span></option>
//                                     <option value={'Q1-Jan-Mar'}>Q4- <span className="text-sm">Oct-Dec</span></option>
//                                 </select>
//                             </div>
//                             <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text font-bold ">Privecy</span>
//                                 </label>
//                                 <select name="timeSlot" className="select select-bordered">
//                                     <option value={'Public'}>Public</option>
//                                     <option value={'Private'}>Private</option>

//                                 </select>
//                             </div>
//                         </div>
//                         {/* Members input */}
//                         <div className="form-control w-full">
//                             <label className="label">
//                                 <span className="label-text font-bold ">Members</span>
//                             </label>
//                             <input type="text" placeholder="Add a Member" className="input input-bordered w-full " />
//                         </div>
//                         <input className='w-full mt-5 btn btn-primary' type="submit" value="Save Goal" />
//                     </form>
//                 </div>
//             </div>
//             {/* -------------------------modal end--------------------- */}


//             {/* Goal Card */}
//             <GoalCard></GoalCard>

//         </div>
//     );
// };

// export default Goal;