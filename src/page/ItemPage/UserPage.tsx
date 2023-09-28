import {FC, useEffect, useState} from "react";
import {IUser} from "../../components/globalTypes.ts";
import axios from "axios";
import {useParams} from "react-router-dom";
import Navigation from "../../components/Navigation.tsx";

type UserPageParams = {
    id: string;
}
const UserPage: FC = () => {
    const[user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserPageParams>()
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Navigation/>
            <div>
                <h1>{user?.name}</h1>
                <h2>{user?.address.city}</h2>
                <h3>{user?.email}</h3>
            </div>
        </>
    );
};

export default UserPage;