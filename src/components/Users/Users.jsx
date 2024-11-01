import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();

    return (
        <div className="ml-80 mt-10">
            <h3 className="text-3xl mb-5">Our all Users : {users.length}</h3>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;