import Link from "next/link";


const GoalCard = ({ goals }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 md:pl-6 lg:ml-0'>
                {
                    goals.map(goal => <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{goal?.name}</h2>
                            <p>Time Period : <span>Q1</span></p>
                            <Link href={`/Goals/${goal?._id}`} className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">Go details</button>
                            </Link>
                        </div>
                    </div>)
                }
                {/* <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Task 2</h2>
                        <p>Time Period : <span>Q2</span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-sm">Go details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Task 3</h2>
                        <p>Time Period : <span>Q3</span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-sm">Go details</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}

export default GoalCard;