
import user_logo from "../images/user.png";

const CommentList = ({comments}) => {
    return <div>{comments.map((comment, index) => 
    <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies}/>
        </div>
    </div>
    
    )

    }
    </div>
}

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className="flex shadow-md bg-gray-100 my-2">
    <div className="p-5">
      <img className="w-8 h-8" src={user_logo}/>
    </div>
    <div className="py-5">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    </div>
  )
}

export default CommentList
