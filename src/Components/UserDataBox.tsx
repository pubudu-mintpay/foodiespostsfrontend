import {useEffect, useState} from "react";
import Dropdown from "./Dropdown.tsx";

interface IUserDataBox {
    name: string,
    username: string,
    userId: number,
    profilePic: string
}

const UserDataBox = ({name, username, userId, profilePic}: IUserDataBox) => {
    const [selfUserId, setSelfUserId] = useState('')

    useEffect(() => {
        const selfUserId = localStorage.getItem('userId')
        if (selfUserId) setSelfUserId(selfUserId)
    }, [userId])

    return (
        <div className={`flex flex-row justify-between items-center pt-4 `}>
            <div className={`flex flex-row`}>
                <img src={profilePic} className={`h-14 w-14`}/>
                <div className={`flex flex-col ml-4`}>
                    <p className={`font-bold text-lg`}>{name}</p>
                    <p>@{username}</p>
                </div>
            </div>
            {/*<EllipsisHorizontalIcon className={`h-8 w-8`}/>*/}
            <Dropdown/>
            {/*{selfUserId === userId.toString() && <EllipsisHorizontalIcon className={`h-8 w-8`}/>}*/}
        </div>
    );
};

export default UserDataBox;