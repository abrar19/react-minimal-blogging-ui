import React from 'react';
import './post.css'
import blog1 from './img/blog1.jpg'

const Post = () => {
    return (
        <div className='post'>
            <img src={blog1} alt="" className='postImg' />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <div className="postTitle">
                    Lorem ipsum dolor sit amet.
                </div>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quaerat in ratione praesentium aliquam dolor similique, ea deleniti at accusamus. 
             Odio earum nam cumque esse placeat accusantium. Veritatis distinctio culpa assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quaerat in ratione praesentium aliquam dolor similique, ea deleniti at accusamus. 
             Odio earum nam cumque esse placeat accusantium. Veritatis distinctio culpa assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quaerat in ratione praesentium aliquam dolor similique, ea deleniti at accusamus. 
             Odio earum nam cumque esse placeat accusantium. Veritatis distinctio culpa assumenda.</p>
        </div>
    );
}

export default Post;
