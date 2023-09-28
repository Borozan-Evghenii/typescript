import {FC} from "react";
import {IUser} from "./globalTypes.ts";

interface UserItemProps {
    user: IUser
    onClick: (user:IUser) => void
}
const UserItem:FC<UserItemProps> = ({user, onClick}) => {
    return (
        <h4 onClick={()=> onClick(user)}>
            {user.name}
        </h4>
    );
};

export default UserItem;