import { useState, useEffect } from 'react';
import {  Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
    let {pindex} = useParams();
    console.log(pindex);

    let id = props.product[pindex].id;
    console.log('id : ', id);

    let findId = props.product.find(function(v) {
        return v.id == id;
    })

    let[alert, setAlert] = useState(true);

    useEffect(() => {
        setTimeout(() => {setAlert(false)}, 3000)
    }, [])

    return (
        <div className='detail'>
            {
                alert ? <div>3초 이내에 클릭 시 30% 할인</div> : null
            }
            <div className='detail_img'>
                <img src={`${process.env.PUBLIC_URL}/img/img${findId.id}.png`} width="25%" />
            </div>
            <div className='detail_text'>
            <h4>{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <Button variant="outline-secondary">주문하기</Button>
            </div>
        </div>
    )
}

export default Detail;