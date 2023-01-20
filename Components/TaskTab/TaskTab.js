import { Tab } from '@headlessui/react';
import classNames from 'classname'
import TaskForm from '../TaskForm/TaskForm';

const TaskTab = () => {
    return (
        <div>
                 <div className='className=" mt-16'>
            <Tab.Group manual>
                <Tab.List className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
                 

                    <Tab className={({ selected }) => classNames("  py-5 text-2xl font-medium leading-5 text-blue-700", selected ? "underline text-black " : "text-blue-700")}> Create  Task</Tab>

                    <Tab className={({ selected }) => classNames("  py-5 text-2xl font-medium leading-5 text-blue-700", selected ? "underline text-black " : "text-blue-700")}>Complete Task</Tab>

                    <Tab className={({ selected }) => classNames(" py-5 text-2xl font-medium  text-blue-700", selected ? "underline text-black " : "text-blue-400")}>Pending Task</Tab>
                </Tab.List>

                <Tab.Panels>

                    <Tab.Panel >
                   <div className='grid place-items-center' >
               <TaskForm></TaskForm>
                   </div>
                    </Tab.Panel>


                    <Tab.Panel >
                    <div className='grid place-items-center'>
                    <h2 className=' text-black'> Complete Task Coming</h2>
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