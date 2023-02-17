import axios from "axios";
import { useForm } from "react-hook-form";



const EditModal = ({ isOpen, modalData, handleCloseModal }) => {
    const { name, email, address, pNumber, designation, category, _id } = modalData;

    const { handleSubmit, register } = useForm({
        defaultValues: {
            name: name,
            email: email,
            address: address,
            phone: pNumber,
            designation: designation,
            category: category,
        }
    })
    // console.log(_id, email)

    const handleModalSubmit = async (modalInfo) => {
        console.log(modalInfo)
        handleCloseModal();

        const res = await axios.put(`http://localhost:5000/create_member`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modalInfo)

        }).then(data => console.log(data))

        // fetch('http://localhost:5000/create_member', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(modalInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))


    }



    return (

        <div className="fixed overflow-y-scroll inset-0 z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-700 opacity-75">
            <div className="m-auto max-w-md w-full bg-slate-900 py-8 px-4 rounded-lg">
                <form onSubmit={handleSubmit(handleModalSubmit)} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-medium mb-4">Form Title</h2>
                    <div className="mb-4">
                        <label className="block text-gray-900 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border border-gray-700 p-2 w-full"
                            name="name"
                            type="text"
                            {...register('name')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 font-medium mb-2" htmlFor="email">
                            email
                        </label>
                        <input
                            className=" p-2 w-full"
                            name="email"
                            type="email"
                            disabled
                            {...register('email')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 font-medium mb-2">
                            Address
                        </label>
                        <input className="border border-gray-900 p-2 mb-2 w-full"
                            name="address"
                            type="address"
                            {...register('address')}
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 font-medium mb-2">
                            Phone
                        </label>
                        <input className="border border-gray-900 p-2 mb-2 w-full"
                            name="phone" type="phone"
                            {...register('phone')}
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 font-medium mb-2">
                            Designation
                        </label>
                        <input className=" p-2 mb-2 w-full"
                            name="designation"
                            type="designation"
                            disabled
                            {...register('designation')} />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 font-medium mb-2">
                            Category
                        </label>
                        <input className=" p-2 mb-2 w-full"
                            name="category"
                            type="category"
                            disabled
                            {...register('category')} />

                    </div>

                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                        Submit
                    </button>
                </form>

                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                        onClick={handleCloseModal}
                    >
                        Cancel
                    </button>

                </div>
            </div>
        </div>


    );
}

export default EditModal;