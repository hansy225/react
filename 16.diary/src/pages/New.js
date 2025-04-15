import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "./Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispathContext } from "../App";

const New = () => {
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispathContext);
    const onSubmit = (input) => {
        onCreate(
            input.createDate.getTime(),
            input.emotionId,
            input.content
        )
        nav("/", { replace: true })
    }

    return (
        <div>
            <Header 
                title={"새 일기 쓰기"}
                leftChild={<Button text={"이전"} onClick={() => {nav(-1)}}/>}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New;