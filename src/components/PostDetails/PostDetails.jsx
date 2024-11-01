import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData ();
    const navigate = useNavigate();
    const {id , title , body} = post ;

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="ml-96 mt-10">
            <h2>Post details about :{id} </h2>
            <p><small>{title}</small></p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;