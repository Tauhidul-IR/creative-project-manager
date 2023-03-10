import Link from "next/link";
import SingleCard from "./SingleCard";


const GoalCard = ({ goals }) => {
    // console.log(goals);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 md:pl-6 lg:ml-0'>
                {
                    goals.map(goal => <SingleCard goal={goal}></SingleCard>)
                }

            </div>
        </div>
    );
};


export default GoalCard;