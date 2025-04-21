import ReplyForm from "../component/ReplyForm";
import ReplyList from "../component/ReplyList";
import { useParams } from 'react-router-dom';

const Detail = ({post}) => {

    const { id } = useParams();
    const targetPost = post.find((p) => p.id === Number(id));
    return(
        <>
        <h4>상세보기</h4>
        <h2>제목 : {targetPost.title}</h2>
        <p>작성자 : {targetPost.writer} </p>
        <p>작성일 : {targetPost.date} </p>
        <p>내용 : </p>
        <div>{targetPost.content}</div>
        <p>조회수 : {targetPost.views}</p>


        <ReplyForm />
        <ReplyList />
        
        </>
    );
};

export default Detail;