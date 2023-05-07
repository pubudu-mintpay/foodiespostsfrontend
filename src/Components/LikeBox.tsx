import {HandThumbUpIcon as NotYetLiked} from "@heroicons/react/24/outline";
import {HandThumbUpIcon as Liked} from "@heroicons/react/24/solid";

interface Props {
    likes: number;
    likedUsers: number[];
    likeThisPost: () => void;
}

const LikeBox = ({likes, likedUsers, likeThisPost}: Props) => {
    const isLikedUser = () => {
        const myUserId = localStorage.getItem('userId');

        return likedUsers.find((userId) => userId.toString() === myUserId);
    }


    return (
        <div className={`flex flex-row px-10`}>
            <div className={`bg-red-200 p-4`} onClick={likeThisPost}>
                {isLikedUser() ? <Liked className={`h-6 w-6`}/> : <NotYetLiked className={`h-6 w-6 `}/>}
            </div>
            <p className={`py-4`}>
                {likes}
            </p>
        </div>
    );
};

export default LikeBox;