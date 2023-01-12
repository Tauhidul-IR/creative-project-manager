
import Wave from 'react-wavify'
import { HiArrowSmRight } from "react-icons/hi";

const Banner = () => {
    return (
        <div
            className="bg-scroll bg-no-repeat bg-cover bg-[url('/image.png')] h-[600px] mx-0 pt-6">
            <div>
                <h1 className='text-5xl  text-center mb-6 text text-white font-bold'>
                    Empower your team with<br />
                    project management software
                </h1>
                <p className='text-center text-white'>
                    Collaborate, plan projects and manage resources with<br /> powerful features that your whole team can use
                </p>

            </div>
            <Wave mask="url(#mask)" fill="#1277b0" >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white" />
                        <stop offset="0.5" stopColor="black" />
                    </linearGradient>

                    <mask id="mask">
                        <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
                    </mask>
                </defs>

            </Wave>
            <h1 className='text-4xl text-white text-center font-semibold'>If you want  know <br /> more about us? <button className="btn text-blue-300 text-4xl btn-ghost">Learn More <HiArrowSmRight /></button></h1>



        </div>
    );
};

export default Banner;