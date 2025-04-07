import {useState} from "react";

const LightOnOff = () => {
    // light = true, false
    const [light, setLight] = useState(false);
    return (
        <>
            {/* 전구 ON, OFF*/}
            {light ? <h1 style={{color: 'gold'}}>전구 ON</h1> : <h1 style={{color: 'gray'}}>전구 OFF</h1>}
            <button onClick={()=>{setLight(!light)}}>
                {light ? "끄기" : "켜기"}
            </button>
        </>
    )
}
export default LightOnOff;