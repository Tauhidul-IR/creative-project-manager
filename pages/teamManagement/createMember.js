import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useForm } from "react-hook-form";


export default () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const imgKey = process.env.HOST_KEY;
    // console.log(imgKey)
    const onSubmit = data => {

        console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = (`https://api.imgbb.com/1/upload?expiration=700&key=${imgKey}`)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        }).then(res => res.json())
            .then(imgData => console.log(imgData))
            .catch(error => console.error(error))

        fetch('http://localhost:5000/create_member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })



    }




    return (
        <div className="mt-20 p-18">
            <span className='flex items-center'>
                <PlusCircleIcon className='h-9 w-9' />
                <div className=' bg-gradient-to-r from-gray-900 via-yellow-500 to-gray-500 inline-block text-transparent bg-clip-text'>
                    <h1 className="text-4xl  font-bold">
                        Create Team Member
                    </h1>
                </div>
            </span>

            <section className="p-6 bg-blue-400 dark:text-white h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="container h-screen flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-blue-900">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="category" className="text-sm pb-3">Category</label>
                                <select {...register("category")} className="select select-success w-full text-black">
                                    <option disabled selected> Select category</option>
                                    <option value={"webDevelopment"}>Web Development</option>
                                    <option value={"androidAppDevelopment"}>Android App Development</option>
                                    <option value={"softwareDevelopment"}>Software Development</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="designation" className="text-sm pb-3">Designation</label>
                                <select {...register("designation")} className="select select-success w-full text-black">
                                    <option disabled selected>Select Designation</option>
                                    <option value={"fedJunior"}>Front-end Developer (Junior)</option>
                                    <option value={"bedJunior"}>Back-end developer (Junior)</option>
                                    <option value={"fsdJunior"}>Full Stack Developer (Junior)</option>
                                    <option value={"fedSenior"}>Front-end Developer (Senior)</option>
                                    <option value={"bedSenior"}>Back-end developer (Senior)</option>
                                    <option value={"fsdSenior"}>Full Stack Developer (Senior)</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="name" className="w-full h-8 p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" {...register("email", { required: true })} placeholder="Email" className="w-full h-8 p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="pNumber" className="text-sm">Phone</label>
                                <input id="pNumber" type="text" {...register("pNumber", { required: true })} placeholder="Phone" maxLength={"11"} className="w-full h-8 p-3
                                rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" type="text" {...register("address", { required: true })} placeholder="Address" className="w-full h-8 p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">

                                <h2 className='font-semibold'>Select Image</h2>
                                <div className="extraOutline p-4 bg-white w-max m-auto rounded-lg">
                                    <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                                        <svg className="text-green-800 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                        <div className="input_field flex flex-col w-max mx-auto text-center">
                                            <label>
                                                <input {...register("image", { required: true })} className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                                                <div className="text bg-green-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                                            </label>

                                            <div className="title text-indigo-500 uppercase">and drop files here</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" className='btn bg-green-600 hover:to-blue-500'>Submit</button>

                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}