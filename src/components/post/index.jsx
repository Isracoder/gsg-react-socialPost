import "./style.css";
import React, { useState} from "react";

const Post = (props) => {
  const [commentList , setCommentList] = useState([""]) ;
  const [commentsHidden , setCommentsHidden ] = useState(false) ;
  const [likeNum , setLikeNum ] = useState(0) ;
  const {post} = props ;
  const addComment = (element) => {
    console.log(element.target.previousElementSibling.value) ;
    let inpValue = element.target.previousElementSibling.value ;
    setCommentList([...commentList , inpValue ]) ;
    post.comment++ ;
  }
  const addLikes = ()=> {
    post.like++ ;
    setLikeNum(likeNum+1) ;
  }
  const hideComments = ()=>{
    setCommentsHidden(!commentsHidden) ;
  }
  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <img className="post-avatar" src={post.profile} alt="Avatar" />
          <div>
            <div className="post-author">{post.author}</div>
            <div className="post-date">{post.date}</div>
          </div>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="post-image-container">
          <img className="post-image" src={post.image} alt="Post" />
        </div>

        <div className="post-actions">
          <div>
            <div
              onClick={addLikes}
            >
              Like : {post.like}
            </div>
          </div>
          <div>
            <div
              onClick={hideComments}
            >
              Comment : {post.comment}
            </div>
          </div>
        </div>


      </div>

      <div className="post-container comments-post">
        <div className="display-comments">
          <div>
            <img className="post-avatar" src={post.profile} alt="Avatar" />
          </div>
          <div className="comment-form">
            <h4>Comments : </h4>
            <div className="commentList">
              {
              commentsHidden ? <h5>The comments are currently hidden</h5>: (commentList.map(comment => {
                return <div key={Math.random()*10000}>{comment}</div>
              })) 
            }
              </div>
          </div>
        </div>
      </div>

      <div className="post-container comment-post">
        <div>
          <img className="post-avatar" src={post.profile} alt="Avatar" />
        </div>
        <div className="comment-form">
          <input
            className="comment-input"
            type="text"
            placeholder="Write a comment..."
          />
          <button className="comment-button" type="button" onClick={addComment}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
