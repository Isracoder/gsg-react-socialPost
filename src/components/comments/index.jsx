import "./style.css";
import React, { useState, useRef } from "react";

const Comment =(props)=>{
    const {post} = props ;
    return (
        <div className="post-container comments-post">
        <div className="display-comments">
          <div>
            <img className="post-avatar" src={post.profile} alt="Avatar" />
          </div>
          <div className="comment-form">
            <h4>comment Text</h4>
          </div>
        </div>
      </div>
    )
}
export default Comment ;