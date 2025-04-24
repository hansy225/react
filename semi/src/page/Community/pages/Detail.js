import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Detail.css';

const Detail = () => {
  const { id } = useParams();  // URL 파라미터에서 id를 가져옴
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); // 뒤로 가기
  const currentUser = localStorage.getItem("userId");  // 로그인한 사용자

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("게시글 불러오기 실패:", error);
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost:8080/posts/${id}`)
        .then(() => {
          alert("삭제 완료되었습니다.");
          navigate("/community");
        })
        .catch((error) => {
          console.error("삭제 실패:", error);
          alert("삭제에 실패했습니다.");
        });
    }
  };

  if (!post) {
    return <p>게시글을 불러오는 중...</p>;
  }

  return (
    <div className="detail">
      <h1 className="dtitle">{post.title}</h1>
      <p className="dname">작성자: {post.userName}</p>
      <p className="dcontent">{post.content}</p>
      <button className="detail-btn" onClick={() => navigate(-1)}>이전</button>

      {/* 작성자와 로그인 유저가 같을 경우에만 수정/삭제 버튼 표시 */}
      {currentUser === post.userId && (
        <div className="detail-button-group">
          <button className="detail-button edit" onClick={handleEdit}>수정</button>
          <button className="detail-button delete" onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default Detail;
