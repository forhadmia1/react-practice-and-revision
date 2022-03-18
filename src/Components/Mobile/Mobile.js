import React, {  useState } from 'react';

const Mobile = () => {
    const [battery,setBattery]=useState(100);
    const boostBattery=()=>{
        if(battery>0){
            setBattery(battery-10)
        }
    }
    return (
        <div>
            <h2>{battery}</h2>
            <button onClick={boostBattery}>Boost Battery</button>
        </div>
    );
};

export default Mobile;