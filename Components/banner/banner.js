
import Wave from 'react-wavify'
import { HiArrowSmRight } from "react-icons/hi";

const Banner = () => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='sm:pt-44 px-1 sm:px-28 md:px-32 pt-32 text-white z-[2] mt-[-10rem]'>
                <div className=''>
                    <h1 className='text-3xl sm:text-5xl text-center mb-1 sm:mb-6 text text-white font-bold'>
                        Empower your team with
                        project management software
                    </h1>
                    <p className='text-center text-1xl text-white'>
                        Collaborate, plan projects and manage resources with powerful features that your whole team can use.
                    </p>
                    <div className='sm:text-3xl text-white text-center font-semibold'>If you want  know more about us?
                        <br /> <button className="btn text-blue-300 text-2xl btn-ghost">Learn More <HiArrowSmRight className='inline-block' /></button></div>

                </div>

            </div>
        </div>
    );
};

export default Banner;