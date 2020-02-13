import React from 'react';
import './Posts.css';

const Posts = props => {
  return (
    <div className="posts-container">
      <div id="posts-list">
        {props.posts.slice(0, props.limit).map(post => {
          return (
            <div key={post.id} className="card">
              <div className="card-img-caption">
                <div className="post-info">
                  <p className="post-date">{post.created_at.slice(0, 10)}</p>
                  {post.category ? (
                    <p className="post-category">{post.category.name}</p>
                  ) : (
                    <p className="post-category"></p>
                  )}
                </div>
                <img className="card-img" src={post.img_url} alt={post.title} />
              </div>
              <div className="card-body">
                <p className="card-title">{post.title}</p>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button onClick={props.onLoadMore} className="button">
          Meer laden
        </button>
      </div>
    </div>
  );
};

export default Posts;
