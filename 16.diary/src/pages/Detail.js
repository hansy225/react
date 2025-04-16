import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getEmotionImg } from './../util/emotion-img';

const Detail = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [data, setData] = useEffect();


    return (
        <div>
            <Header 
                title={"일기 상세보기"}
                leftChild={<Button text={"이전"} onClick={() => {nav(-1)}}/>}
                rightChild = {<Button text={"수정하기"} onClick={() => nav('/edit/emotionItem.id')} />}
            />
            <section className="img_section">
                <h4>오늘의 감정</h4>
                <div>
                    <img src={getEmotionImg(EmotionItem.id)} />
                </div>
            </section>
        </div>
    )
}

export default Detail;