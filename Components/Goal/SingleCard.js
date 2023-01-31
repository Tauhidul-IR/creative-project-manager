import Link from "next/link";


const SingleCard = ({ goal }) => {
    console.log(goal._id);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{goal?.goalName}</h2>
                    <p>Time Period : <span className="font-bold">{goal?.timeSlot}</span></p>
                    <Link href={`/myGoals/${goal?._id}`} className="card-actions justify-end">
                        <button className="btn btn-primary btn-xs">Go details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;