import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './MyPost.css'; 
import { Link } from "react-router-dom";


const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("userId"); // 또는 context/userState 등에서 가져오기
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/posts")
      .then((res) => {
        // console.log("서버에서 받은 데이터:", res.data);
        console.log("받은 전체 게시글:", res.data);
        const userId = localStorage.getItem("userId");  
        const myPosts = res.data.filter(post => String(post.userId) === String(userId));
        setPosts(myPosts);
      })
      .catch((err) => {
        console.error("내 게시글 가져오기 실패:", err);
        alert("게시글 로딩 실패");
      });
  }, [userId]);

  return (
    <div className="my-post-container">
      <div className="my-post-wrapper">
        <button className="detail-btn" onClick={() => navigate(-1)}>전체글</button>
        <h1 className="my-post-title">내가 쓴 글</h1>
  
        {posts.length > 0 ? (
          <div className="list-container">
            {posts.map((post) => (
              <div key={post.id} className="list-item">
                <Link to={`/post/${post.id}`} className="post-link">
                  <h2>{post.title}</h2>
                </Link>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="my-post-empty">작성한 게시글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MyPost;
