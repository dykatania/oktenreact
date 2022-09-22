import {useEffect, useState} from "react";
import User from "./User";



export default function Users() {
    let  [users, setUsers] = useState([]);
    let  [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users')
                     .then(value => value.json())
                     .then(value => {
                         setUsers(value);
            });
        }, []);

    return (<div className={'wrap'}>
        <hr/>
        <h3>{user?.id}. {user?.name}</h3>
        <p>
            Username: {user?.username} <br/>
            Email: {user?.email} <br/>
            Phone: {user?.phone} <br/>
            Website: {user?.website} <br/>
            Company: {user?.company?.name}
        </p>
            <hr/>
            {users.map((user, index) => (<User
                item={user}
                key={index}
                lift={lift}
            />))}
            </div>)
}