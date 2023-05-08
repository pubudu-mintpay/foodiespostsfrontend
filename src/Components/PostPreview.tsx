type postImage = {
    src: string,
    alt?: string
    id: number
}

interface IPostPreview {
    data: postImage[]

}

const PostPreview = ({data}: IPostPreview) => {
    return (
        <div className={`py-5`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-1`}>
                {data.map((image) => {
                    return (
                        <img
                            key={image.id}
                            src={image.src} alt={image.alt} className={`w-full h-32 md:h-60 object-cover `}/>
                    )
                })}
            </div>

        </div>
    );
};

export default PostPreview;