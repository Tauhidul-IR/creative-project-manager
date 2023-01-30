
import Background from "../../Components/Backgroud/Background";
import GoalDetails from "../../Components/Goal/GoalDetails";

const PostDetails = ({ goal }) => {
    console.log(goal);

    // const router = useRouter();

    // const handleBack = () => {
    //     router.push("/Goals/Goals")
    // }

    return (
        <div>
            <Background></Background>
            {/* <div className="card mx-10 my-10 bg-primary text-primary-content">
                <div className="card-body">
                    <p>PostId:{goal?._id}</p>
                    <h2 className="card-title">Title: </h2>
                    <p>Post: {goal?.body}</p>

                    <button onClick={handleBack} className="btn btn-primary">Back to post</button>
                </div>
            </div> */}
            <GoalDetails goal={goal} key={goal?._id}></GoalDetails>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`http://localhost:5000/goals/${params?.GoalId}`);
    const data = await res.json();

    return {
        props: {
            goal: data
        }
    }
}




export const getStaticPaths = async () => {

    const res = await fetch("http://localhost:5000/goals");
    const goals = await res.json();

    const paths = goals.map(goal => {
        return {
            params: {
                GoalId: `${goal._id}`
            }
        }
    })


    return {
        paths,
        fallback: false,
    }

}

export default PostDetails;