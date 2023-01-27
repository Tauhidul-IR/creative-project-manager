import { HiChatAlt } from 'react-icons/hi';
import { PaperClipIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const TodoCard = ({ data }) => {

    return (

        <Draggable index={data.id} draggableId={data.id.toString()} >
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps} className='bg-white rounded-md p-3 mt-3'>
                    <label className='bg-gradient-to-r from-blue-600 to-blue-300 px-2 py-1 text-white text-sm'>Low priority</label>
                    <h5 className='text-md my-3 text-lg leading-6 '>Home page design </h5>
                    <div className='flex justify-between '>
                        <div className='flex space-x-4 items-center'>
                            <HiChatAlt className='w-4 h-4 text-gray-800 mr-2' />
                            <span>2</span>
                            <PaperClipIcon className='w-4 h-4 text-gray-800 mr-2' />
                            <span>5</span>
                        </div>
                        <ul className='flex space-x-3 justify-center items-center'>
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
                                <button className='border border-dashed flex items-center rounded-full'>
                                    <PlusIcon className='w-5 h-5 text-gray-800' />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </Draggable>

    );
};

export default TodoCard;