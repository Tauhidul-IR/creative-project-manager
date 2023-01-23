import { Tab } from '@headlessui/react';
import classNames from 'classname'
import TaskForm from '../TaskForm/TaskForm';
import WorkingTask from '../WorkingTask/WorkingTask';
import CompletedTask from './../CompletedTask/CompletedTask';

const TaskTab = () => {


    return (
        <div>
            <div className='className=" mt-16 bg-slate-300'>
                <Tab.Group manual>
                    <Tab.List className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  ">


                        <Tab className={({ selected }) => classNames("  py-5 text-2xl font-medium leading-5 text-blue-700", selected ? "underline text-black " : "text-blue-700")}> Create  Task</Tab>

                        <Tab className={({ selected }) => classNames("  py-5 text-2xl font-medium leading-5 text-blue-700", selected ? "underline text-black " : "text-blue-700")}>Working Task</Tab>

                        <Tab className={({ selected }) => classNames("  py-5 text-2xl font-medium leading-5 text-blue-700", selected ? "underline text-black " : "text-blue-700")}>Complete Task</Tab>

                        <Tab className={({ selected }) => classNames(" py-5 text-2xl font-medium  text-blue-700", selected ? "underline text-black " : "text-blue-400")}>Do Later Task</Tab>
                    </Tab.List>

                    <Tab.Panels>

                        <Tab.Panel >
                            <div className='grid place-items-center bg-gradient-to-r from-slate-600 to-blue-900'>
                                <TaskForm></TaskForm>
                            </div>
                        </Tab.Panel>


                        <Tab.Panel >
                            <div className='grid place-items-center bg-gradient-to-r from-slate-600 to-blue-900'>
                                <WorkingTask></WorkingTask>
                            </div>
                        </Tab.Panel>

                        <Tab.Panel >
                            <div className='grid grid-cols-2 border border-red-700 place-items-center bg-gradient-to-r from-slate-600 to-blue-900'>
                                <CompletedTask></CompletedTask>
                                <div className='border-yellow-500'>
                                    <h1>
                                        My Completed Task
                                    </h1>
                                </div>
                            </div>
                        </Tab.Panel>

                        <Tab.Panel >
                            <div className='grid place-items-center'>
                                <h2 className=' text-black'> Pending Task Coming</h2>
                            </div>
                        </Tab.Panel>

                    </Tab.Panels>


                </Tab.Group>


            </div>
        </div>
    );
};

export default TaskTab;