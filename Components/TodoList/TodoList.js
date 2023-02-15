import { ChevronDownIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid'
import { HiDotsVertical } from 'react-icons/hi';
import TodoCard from './TodoCard';
import { DragDropContext, Droppable, useScrolling, ScrollContainer } from "react-beautiful-dnd";
import todoList from '../data/data.json';
import { useState } from 'react';
import { useEffect } from 'react';


//fo create id
function createGuidId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


const TodoList = () => {
    const [ready, setReady] = useState(false)
    const [listData, setData] = useState(todoList)
    const [showForm, setShowForm] = useState(false)
    const [selectedBoard, setSelectedBoard] = useState(0)

    // const onDragStart = (result) => {
    //     const { source, destination } = result
    // }

    // const onDragUpdate = (result) => {
    //     const { source, destination } = result
    // }


    const handleDragEnd = (result) => {
        if (!result.destination) return;
        let newListedData = listData;
        var dragItem =
            newListedData[parseInt(result.source.droppableId)].items[result.source.index];
        newListedData[parseInt(result.source.droppableId)].items.splice(
            result.source.index,
            1
        );
        newListedData[parseInt(result.destination.droppableId)].items.splice(
            result.destination.index,
            0,
            dragItem
        );
        setData(newListedData);

    }
    // let newListData = listData;
    // let dragItem = newListData[parseInt(result.source.droppableId)].items[result.source.index];
    // newListData[parseInt(result.source.droppableId)].items.splice(result.source.index, 1);
    // newListData[parseInt(result.destination.droppableId)].items.splice(result.destination.index, 0, dragItem);
    // setData(newListData);


    useEffect(() => {
        if (process.browser) {
            setReady(true)

        }
    }, [])



    const onTextAreaKeyPress = (e) => {
        if (e.keyCode === 13) {
            const textValue = e.target.value;
            if (textValue.length === 0) {
                setShowForm(false);
            }
            else {
                const boardId = e.target.attributes['data-id'].value;
                const item = {
                    id: createGuidId(),
                    title: textValue,
                    priority: 0,
                    chat: 0,
                    attachment: 0,
                    // assignees: []
                }


                const url = 'https://creative-project-manager-server.vercel.app/todoTask'
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => console.log(err))
                console.log(item)

                let newBoardData = listData;
                newBoardData[boardId].items.push(item);
                setData(newBoardData);
                setShowForm(false);
                e.target.value = '';
            }
        }

    }

    console.log(listData)




    return (
        <div className="p-18">
            <div className='flex justify-between'>
                <div className="flex items-center">
                    <h4 className='text-4xl font-bold text-gray-900'>Task Board</h4>
                    <ChevronDownIcon className='w-8 h-8 rounded bg-white ml-5 shadow-xl ' />
                </div>

                <div>
                    <ul className='flex space-x-3'>
                        <li>
                            <img
                                src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg"
                                width="36"
                                height="36"
                                // objectFit="cover"
                                className="rounded-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg"
                                width="36"
                                height="36"
                                // objectFit="cover"
                                className="rounded-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg"
                                width="36"
                                height="36"
                                // objectFit="cover"
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
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 my-5 mx-auto px-10'>
                        {
                            todoList.map((list, ind) => {
                                return (
                                    <div key={list.name}>
                                        <Droppable droppableId={ind.toString()}>

                                            {(provided, snapshot) => (
                                                <div {...provided.droppableProps} ref={provided.innerRef} >

                                                    <div
                                                        className={`bg-gray-300 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden
                                                        ${snapshot.isDraggingOver && "bg-blue-300"}`} >

                                                        <span className='w-full h-1 bg-gradient-to-r from-bg-pink-700 to bg-red-400 absolute inset-x-0 top-0'></span>
                                                        <h4 className='flex justify-between items-center mb-2'>
                                                            <span className='text-2xl text-gray-800'>{list.name}</span>
                                                            <HiDotsVertical className='w-5 h-5 text-gray-800' />
                                                        </h4>
                                                        <div className='overflow-y-auto overflow-x-hidden h-auto'
                                                            style={{ maxHeight: 'calc(100vh -290px)' }}>


                                                            {
                                                                list.items.length > 0 && (
                                                                    list.items.map((item, i) => {
                                                                        return (<TodoCard key={item.id} data={item} index={i}></TodoCard>)
                                                                    })
                                                                )

                                                            }
                                                            {provided.placeholder}
                                                        </div>
                                                        {
                                                            showForm && selectedBoard === ind ? (
                                                                <div className="p-3">
                                                                    <textarea className="border-gray-300 rounded focus:ring-purple-400 w-full"
                                                                        rows={3} placeholder="Task info"
                                                                        data-id={ind}
                                                                        onKeyDown={(e) => onTextAreaKeyPress(e)} />
                                                                </div>
                                                            ) : (
                                                                <button
                                                                    className="flex justify-center items-center my-3 space-x-2 text-lg"
                                                                    onClick={() => { setSelectedBoard(ind); setShowForm(true); }}
                                                                >
                                                                    <span>Add task</span>
                                                                    <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                                                                </button>
                                                            )
                                                        }
                                                    </div>
                                                </div>

                                            )}
                                        </Droppable>
                                    </div>
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