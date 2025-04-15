import Button from "./Button"
import './DiaryList.css'
import DiaryItem from "./DiaryItem";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DiaryList = ({data}) => {
    const [sortType,  setSortType] = useState('latest');
    const nav = useNavigate();

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    /* 
        Sort : 원본 파일이 변경되어 들어옴
        toSorted(a,b) : 원본은 그대로 유지하고 sort된 data만 반환 (Es2023 새로 생김)
        a-b를 한 결과
        음수면 자리바꿈 안함
        양수면 자리바꿈
    */
    const getSortedData = () => {
        return data.toSorted((a,b) => {
            if(sortType == "oldest") {
                return a.createDate - b.createDate;  // 내림차순
            } else {
                return b.createDate - a.createDate;  // 오름차순
            }
        })
    }

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신 순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"green"} onClick={() => nav("/new")} />
            </div>
            <div className="list_wrapper"></div>
                {sortedData.map((item) => <DiaryItem {...item} key={item.id} />)}
            </div>
    )
}

export default DiaryList;