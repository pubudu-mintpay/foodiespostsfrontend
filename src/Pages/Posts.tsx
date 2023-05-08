import UserDataBox from "../Components/UserDataBox.tsx";
import PostPreview from "../Components/PostPreview.tsx";
import LikeBox from "../Components/LikeBox.tsx";
import {useState} from "react";
import CommentBox from "../Components/CommentBox.tsx";

const Posts = () => {

    let data = {
        userId: 233231,
        postId: 233231,
        context: 'Hello this is test post',
        date: '2021-09-01',
        likes: 0,
        likedUsers: [222],
        commentIDArray: [222, 333, 444],
        imageIDArray: [222, 333, 444, 1111112],
    }

    const [likedUsers, setLikedUsers] = useState<number[]>(data.likedUsers)

    const USER = {
        id: 233231,
        name: 'Pubudu',
        username: 'pubs',
        email: 'pubbe@gmail.com',
        profilePicUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
    }

    const IMAGES = [
        {
            id: 222,
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
        },
        {
            id: 333,
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
        },
        {
            id: 444,
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
        },
        {
            id: 111,
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
        },
        {
            id: 112,
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
        },
        {
            id: 1111112,
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'
        },


    ]


    const COMMENTS = [
        {
            id: 222,
            userId: 233231,
            context: 'Hello this is test post comment 1',
        },
        {
            id: 333,
            userId: 233231,
            context: 'Hello this is test post comment 1',
        }, {
            id: 424,
            userId: 233231,
            context: 'Hello this is test post comment 1',
        }, {
            id: 1212,
            userId: 233231,
            context: 'Hello this is test post comment 1',
        },
        {
            id: 444,
            userId: 233231,
            context: 'Hello this is test post comment 1',
        }]


    const getPicturesById = () => {
        return IMAGES.filter((image) => {
            return data.imageIDArray.includes(image.id)
        })
    }

    const likeThisPost = () => {

        const myUserId = localStorage.getItem('userId');

        if (!myUserId || isNaN(parseInt(myUserId))) {
            return;
        }

        if (likedUsers.find((userId) => userId.toString() === myUserId)) {
            setLikedUsers(likedUsers.filter((userId) => userId.toString() !== myUserId))

        } else {
            setLikedUsers((prev) => [...prev, parseInt(myUserId)])
        }

    }

    return (
        <div className={`max-w-7xl mx-auto px-10 `}>
            <div>
                <UserDataBox
                    profilePic={USER.profilePicUrl}
                    userId={USER.id} name={USER.name} username={USER.username}/>
                <PostPreview data={getPicturesById()}/>
                <div className={`flex flex-row items-center space-x-4`}>
                    <LikeBox
                        likeThisPost={likeThisPost}
                        likes={likedUsers.length} likedUsers={likedUsers}/>
                    <CommentBox comments={COMMENTS}/>
                </div>
            </div>
        </div>
    );
};

export default Posts;