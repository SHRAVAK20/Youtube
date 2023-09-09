import CommentList from "./Comment"
const commentData = [
  {
    name: "Shravak Choudhary",
    text: "One of the Best vedio on youtube",
    replies : [

    ]
  },
  {
    name: "Shravak Choudhary",
    text: "One of the Best vedio on youtube",
    replies : [
      {
        name: "Shravak Choudhary",
        text: "One of the Best vedio on youtube",
        replies : [
    
        ]
      },
      {
        name: "Shravak Choudhary",
        text: "One of the Best vedio on youtube",
        replies : [
          {
            name: "Shravak Choudhary",
            text: "One of the Best vedio on youtube",
            replies : [
        
            ]
          },
          {
            name: "Shravak Choudhary",
            text: "One of the Best vedio on youtube",
            replies : [
              {
                name: "Shravak Choudhary",
                text: "One of the Best vedio on youtube",
                replies : [
                  {
                    name: "Shravak Choudhary",
                    text: "One of the Best vedio on youtube",
                    replies : [
                
                    ]
                  },
            
                ]
              },
              {
                name: "Shravak Choudhary",
                text: "One of the Best vedio on youtube",
                replies : [
            
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Shravak Choudhary",
    text: "One of the Best vedio on youtube",
    replies : [

    ]
  },
  {
    name: "Shravak Choudhary",
    text: "One of the Best vedio on youtube",
    replies : [

    ]
  },
  
]

const CommentContainer = () => {
  return (<div className="m-5 p-2">
    <h1 className="text-xl font-bold">Comments :</h1>
    {/* <Comment data={commentData[0]}/> */}
    <CommentList comments={commentData}/>
    </div>)
};

export default CommentContainer;
