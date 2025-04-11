import { useState, useEffect } from 'react';
import {  Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
    let {pindex} = useParams();
    console.log(pindex);

    /* pindex는 문자열 "2"이고 인덱스로 해석됨
    let id = props.product[pindex].id;
    console.log('id : ', id);
    */

    let findId = props.product.find((v) => v.id === Number(pindex));
    console.log('findId : ', findId);

    let[alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);

    useEffect(() => {
        console.log("timer 실행");
        let timer = setTimeout(() => {setAlert(false)}, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [])
    

    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {
            alert('숫자만 입력하세요.');
        }
    }, [num])

    return (
        <div className='detail'>
            {/* <input onChange={(e) => {setNum(e.target.value)}} /> */}
            {
                alert ? <div>3초 이내에 클릭 시 30% 할인</div> : null
            }
            <div className='detail_img'>
                <img src={`${process.env.PUBLIC_URL}/img/img${findId.id}.png`} width="25%" />
            </div>
            <div className='detail_text'>
            <h3>{findId.title}</h3>
                <p>{findId.content}</p> 
                <p>{findId.price}원</p>
                <Button variant="outline-secondary">주문하기</Button>
            </div>

            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link-0">뷰티에 대하여</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link-1">정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link-2">기타</Nav.Link>
                </Nav.Item>
            </Nav>

            {/* 1. 삼항연산자로
            { tab == 0 ? <div>화장품으로 얼굴을 꾸미는 행동을 말한다.</div> : tab == 1 ? <div>피부 건강이나 청결, 화장 등의 외모 관리를 위해 얼굴이나 머리카락 등의 신체에 쓰는 용품</div> : <div>내용들</div>} 
             */}
            < TabContent tab = {tab} />

        </div>
    )
}
function TabContent ({tab}) {
    console.log(tab);
    return ( 
        <div className='end'>
            [<div>화장품으로 얼굴을 꾸미는 행동을 말한다.</div>, <div>피부 건강이나 청결, 화장 등의 외모 관리를 위해 얼굴이나 머리카락 등의 신체에 쓰는 용품</div>, <div>내용들</div>] [tab];
        </div>
    )
}

/*
function TabContent ({tab}) {
    // 2. if문으로
    if(tab == 0) {
        return <div>화장품으로 얼굴을 꾸미는 행동을 말한다.</div>
    } else if(tab == 1) {
        return <div>피부 건강이나 청결, 화장 등의 외모 관리를 위해 얼굴이나 머리카락 등의 신체에 쓰는 용품</div>
    } else {
        return <div>내용들</div>
    }
    
    // 3. 배열로
    let tabArr = [<div>화장품으로 얼굴을 꾸미는 행동을 말한다.</div>, <div>피부 건강이나 청결, 화장 등의 외모 관리를 위해 얼굴이나 머리카락 등의 신체에 쓰는 용품</div>, <div>내용들</div>];
    return tabArr[tab];
    

    // 4. 3번을 한줄로
    return [<div>화장품으로 얼굴을 꾸미는 행동을 말한다.</div>, <div>피부 건강이나 청결, 화장 등의 외모 관리를 위해 얼굴이나 머리카락 등의 신체에 쓰는 용품</div>, <div>내용들</div>] [tab];
}
*/

export default Detail;