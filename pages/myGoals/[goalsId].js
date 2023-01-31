
import Background from "../../Components/Backgroud/Background";
import GoalDetails from "../../Components/Goal/GoalDetails";

const GoalsDetails = ({ goal }) => {


    return (
        <div>
            <Background></Background>

            {/* <GoalDetails goal={goal}></GoalDetails> */}

            <div className="my-6 flex flex-col w-3/4 mx-auto min-h-screen lg:flex-row">
                <div className=" w-2/3  justify-start">
                    <div className="">
                        <div>
                            <h2 className="text-4xl font-bold mb-5">{goal?.goalName}</h2>
                            <div className="flex justify-around">
                                <h2 className="font-bold">This Goal is <span>on track</span> </h2>
                                <button className="btn btn-primary btn-xs">update</button>
                            </div>
                        </div>
                        <div className="divider w-full"></div>
                        <div className="w-full ml-10">
                            <h1>Status Update - 22</h1>
                            <h4>summary</h4>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid w-1/4 flex-grow h-32 card rounded-box place-items-center">
                    <div>
                        <div>
                            <h2>About This Goal</h2>
                            <h4>{goal?.goalOwner}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`http://localhost:5000/goals/${params?.goalsId}`);
    const data = await res.json();

    console.log(data._id, '--------------------------------------------------------');

    return {
        props: {
            goal: data
        }
    }
}



export const getStaticPaths = async () => {

    const res = await fetch("http://localhost:5000/goals");
    const goals = await res.json();

    // console.log(goals[0]._id);

    const paths = goals.map(goal => {
        return {
            params: {
                goalsId: `${goal._id}`
            }
        }
    })


    return {
        paths,
        fallback: false
    }

}

export default GoalsDetails;