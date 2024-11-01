import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id , title} = post ;

    const navigate = useNavigate()

    const handleShowDetails = () => {
        navigate(`/posts/${id}`)
    }


    return (
        <div>
            <h3>Post of id : {id}</h3>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Post Details</Link>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;