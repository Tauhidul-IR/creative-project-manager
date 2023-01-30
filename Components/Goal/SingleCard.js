import Link from "next/link";


const SingleCard = ({ goal }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{goal?.goalName}</h2>
                    <p>Time Period : <span className="font-bold">{goal?.timeSlot}</span></p>
                    <Link href={`/Goals/${goal?._id}`} className="card-actions justify-end">
                        <button className="btn btn-primary btn-xs">Go details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;