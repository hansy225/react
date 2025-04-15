import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
    const nav = useNavigate();
    // const { id } = useParams();
    // const [data, setData] = useEffect(null);

    // useEffect(() => {

    // })

    return (
        <div>
            <Header 
                title={"일기 상세보기"}
                leftChild={<Button text={"이전"} onClick={() => {nav(-1)}}/>}
            />
            <Editor />
        </div>
    )
}

export default Detail;