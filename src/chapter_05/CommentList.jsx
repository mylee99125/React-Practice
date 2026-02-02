import Comment from './Comment';

const comments = [
    {
        name: '맹구',
        comment: '안녕, 나는 맹구야!',
    },
    {
        name: '짱구',
        comment: '리액트 재미있어요~!',
    },
    {
        name: '유리',
        comment: '저도 리액트 배워보고 싶어요!',
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment 
                        name={comment.name}
                        comment={comment.comment}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;