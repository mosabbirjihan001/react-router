import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData ();
    const {name, email , phone } = user ;
    return (
        <div className="ml-96 mt-10">
            <h2>User Details</h2>
            <h4 className="text-4xl"> user name : {name}</h4>
            <h3 className="text-4xl">email : {email}</h3>
            <h2 className="text-4xl"> phone : {phone} </h2>
        </div>
    );
};

export default UserDetails;