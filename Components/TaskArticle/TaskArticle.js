

const TaskArticle = () => {
    return (
        <section className="bg-blue-400 text-black">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center mt-5 md:mt-0 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-none sm:text-6xl">Task <span className="text-green-900"> Management</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        Task management is the process of monitoring your project's tasks through their various stages from start to finish.
                        <br className="hidden md:inline lg:hidden" />This involves actively making decisions for your tasks to accommodate changes that can occur real-time, with your end goal being the successful completion of your tasks.
                    </p>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="/articleImg.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default TaskArticle;