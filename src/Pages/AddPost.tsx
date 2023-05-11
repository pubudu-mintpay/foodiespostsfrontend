import {storage} from "../../firebase.ts";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {useState} from "react";
import axios from "axios";

const AddPost = () => {

    const [image, setImage] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const uploadImage = (image: File) => {

        const imagesRef = ref(storage, image.name);
        uploadBytes(imagesRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
        }).then(() => {
            getDownloadURL(imagesRef)
                .then((url) => {
                    setImage(url)
                })
        });
    }

    const [error, setError] = useState<boolean>(false)

    const submitPost = () => {
        setError(false)
        if (!image || !title) {
            setError(true)
            return
        }



        axios.post('http://localhost:8080/api/posts', {
            postId: 0,
            caption: title,
            userId: localStorage.getItem('userId'),
            image: image,
            likesCount: 0,
            likedUsers: [],
            comments: [],

        }).then((response) => {
                console.log(response)
            }
        )
    }

    return (
        <div className={`mx-auto w-full  flex justify-center flex-col p-32 space-y-10`}>

            <h2 className={`font-bold text-xl justify-center w-full items-center bg-blue-200 text-center p-4 `}>Create a
                post</h2>
            {error && <p className={`text-red-500`}>Please fill out all fields</p>}

            <div className={`w-full`}>
                <p>Upload an image</p>
                <input
                    type={'file'}
                    accept={'image/*'}
                    onChange={(e) => {
                        if (e && e.target && e.target.files) {
                            uploadImage(e.target.files[0])
                        }
                    }}
                />
            </div>
            <div>
                <p>Caption</p>
                <input
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text" id={'title'}/>
            </div>

            <button
                onClick={() => {
                    submitPost()
                }}
                type="button"
                className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Submit
            </button>

        </div>
    );
};

export default AddPost;