import {ChatBubbleLeftIcon} from '@heroicons/react/24/outline'

type comment = {
    id: number,
    userId: number,
    context: string,
}

interface CommentBox {
    comments: comment[]
    showComments: boolean
    setShowComments: (showComments: boolean) => void
    changeComment: (comment: comment) => void
    deleteComment: (comment: comment) => void
    addComment: (comment: comment) => void
}

const CommentBox = ({
                        comments,
                    }: CommentBox) => {
    return (
        <>
            <div className={`flex flex-row `}>
                <div className={`p-4`}>
                    <ChatBubbleLeftIcon className={`h-6 w-6`}/>
                </div>
                <p className={`py-4`}>
                    {comments.length}
                </p>
            </div>
        </>
    );
};

export default CommentBox;