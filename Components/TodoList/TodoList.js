import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid'
import { HiDotsVertical } from 'react-icons/hi';
import TodoCard from './TodoCard';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import todoList from '../data/data.json';
import { useState } from 'react';
import { useEffect } from 'react';




const TodoList = () => {
    const [ready, setReady] = useState(false)
    const [listData, setData] = useState(todoList)

    // const onDragStart = (result) => {
    //     const { source, destination } = result
    // }

    // const onDragUpdate = (result) => {
    //     const { source, destination } = result
    // }


    const handleDragEnd = (result) => {
        let newListData = listData;
        let dragItem = newListData[parseInt(result.source.droppableId)].items[result.source.index];
        newListData[parseInt(result.source.droppableId)].items.splice(result.source.index, 1);
        newListData[parseInt(result.destination.droppableId)].items.splice(result.destination.index, 0, dragItem);
        setData(newListData);

    }


    useEffect(() => {
        if (process.browser) {
            setReady(true)

        }
    }, [])

    return (
        <div className="p-18">
            <div className='flex justify-between'>
                <div className="flex items-center">
                    <h4 className='text-4xl font-bold text-gray-900'>Studio Board</h4>
                    <ChevronDownIcon className='w-8 h-8 rounded bg-white ml-5 shadow-xl ' />
                </div>

                <div>
                    <ul className='flex space-x-3'>
                        <li>
                            <img
                                src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg"
                                width="36"
                                height="36"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg"
                                width="36"
                                height="36"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg"
                                width="36"
                                height="36"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </li>
                        <button className='border border-dashed flex items-center w-9 h-9 rounded-full'>
                            <PlusIcon className='w-5 h-5 text-gray-900' />
                        </button>
                    </ul>
                </div>


            </div>
            {/* body */}

            {ready && (
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className='grid grid-cols-3 gap-5 my-5 mx-auto px-10'>
                        {
                            todoList.map((list, index) => {
                                return (
                                    <Droppable droppableId={list.items}>

                                        {(provided) => (
                                            <div
                                                key={index}
                                                {...provided.droppableProps} ref={provided.innerRef} className='bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden' >
                                                <span className='w-full h-1 bg-gradient-to-r from-bg-pink-700 to bg-red-400 absolute inset-x-0 top-0'></span>
                                                <h4 className='flex justify-between items-center mb-2'>
                                                    <span className='text-2xl text-gray-800'>{list.name}</span>
                                                    <HiDotsVertical className='w-5 h-5 text-gray-800' />
                                                </h4>
                                                {
                                                    list.items.length > 0 && (
                                                        list.items.map((item, i) => {
                                                            return <TodoCard key={i} data={item}></TodoCard>
                                                        })
                                                    )

                                                }

                                            </div>

                                        )}
                                    </Droppable>
                                )
                            })
                        }

                    </div>
                </DragDropContext>
            )
            }
        </div >
    );
};

export default TodoList;