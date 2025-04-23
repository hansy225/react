import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate  } from "react-router-dom";
import './Detail.css'

const Detail = () => {
  const { id } = useParams();  // URL 파라미터에서 id를 가져옴
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); //뒤로가기

  useEffect(() => {
    // 게시글 데이터를 서버에서 가져옴
    axios
      .get(`http://localhost:8080/posts/${id}`)  // 게시글 상세 조회
      .then((response) => {
        setPost(response.data);  // 게시글 데이터 설정
      })
      .catch((error) => {
        console.error("게시글 불러오기 실패:", error);
      });
  }, [id]);  // id가 변경될 때마다 실행

  if (!post) {
    return <p>게시글을 불러오는 중...</p>;
  }

  return (
    <div className="detail">
      <h1 className="dtitle">{post.title}</h1>
      <p className="dname">작성자: {post.userName}</p>
      <p className="dcontent">{post.content}</p>
      <button className="detail-btn" onClick={() => navigate(-1)} >이전</button>
    </div>
  );
};

export default Detail;