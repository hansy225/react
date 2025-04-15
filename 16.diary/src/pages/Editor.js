import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import './Editor.css';
import EmotionItem from './EmotionItem';
import { useEffect, useState } from 'react';


const emotionList = [
    {
        emotionId : 1,
        emotionName : "신남"
    },
    {
        emotionId : 2,
        emotionName : "좋음"
    },
    {
        emotionId : 3,
        emotionName : "나쁘지않음"
    },
    {
        emotionId : 4,
        emotionName : "안좋음"
    },
    {
        emotionId : 5,
        emotionName : "삐짐"
    },
    {
        emotionId : 6,
        emotionName : "짜증"
    },
    {
        emotionId : 7,
        emotionName : "울먹"
    },
]

const Editor = ({onSubmit, initData}) => {
    const nav = useNavigate();

    useEffect(() => {
        if(initData) {
            setInput({
                ...initData,
                createDate : new Date(initData.createDate)
            })
        }
    }, [initData])

    const [input, setInput] = useState({
        createDate : new Date(),
        emotionId : 7,
        content : ""
    })

    const getStringDate = (targetDate) => {
        // yyyy-01-01
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let date = targetDate.getDate()
        if(month < 10) {
            month = `0${month}`;
        }
        if(date < 10) {
            date = `0${date}`;
        }
        return `${year}-${month}-${date}`;
    }

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "createDate") {
            value = new Date(value);  // String을 Date로 바꿔서 넣어줌
        }

        setInput({
            ...input, [name] : value
        })
    }

    return (
        <div className="Editor">
            <section>
                <h4>오늘 날짜</h4>
                <input 
                    name="createDate" 
                    type="date" 
                    value={getStringDate(input.createDate)} 
                    onChange={onChangeInput}
                    />
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className="emotion_list">
                    {
                        emotionList.map((item) => (
                            <EmotionItem
                                onClick={() => 
                                    onChangeInput({
                                        target : {
                                            name : "emotionId",
                                            value : item.emotionId
                                        }
                                    })
                                }
                                {...item}
                                isSelected={item.emotionId == input.emotionId}
                            />
                        ))
                    }
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <textarea rows="5" cols="63" name="content" 
                    value={input.content} 
                    onChange={onChangeInput}
                />
            </section>
            <section className="editor_btn">
                <Button text={"취소하기"} onClick={() => nav(-1)}/>
                <Button text={"작성완료"} type={"green"} onClick={() => {onSubmit(input)}}/>
            </section>
        </div>
    )
}

export default Editor;