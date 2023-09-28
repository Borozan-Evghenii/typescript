import  {useEffect, useState} from 'react';
import axios from "axios";
import {IUser} from "../components/globalTypes.ts";
import UserItem from "../components/UserItem.tsx";
import UniversalList from "../components/UniversalList.tsx";
import {useNavigate} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <br/>
            <hr/>
            <br/>
            <h1>Users Page</h1>
            <br/>

            <UniversalList
                items={users}
                renderItem={
                    (user:IUser) =>
                        <UserItem
                            onClick={() => navigate(`${user.id}`)}
                            user={user}
                            key={user.id}
                        />
                }
            />
        </div>
    );
};

export default Users;