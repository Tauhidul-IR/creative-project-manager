import Link from "next/link";
import Navbar from "../Components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        
        <div>
    
           

            <div className="mt-20">
    <img style={{width:"700px"}}
     className='rounded mx-auto d-block '
      src="https://shots.codepen.io/RishabhMishra/pen/wvwrpKL-1280.jpg?version=1567484579" alt="" />
  <h2 className="text-center text-2xl font-semibold"><Link href='/'>Back to home page
      </Link> </h2>
</div>

        </div>
    );
};

export default ErrorPage;