import React, { useEffect, useState } from 'react';
import Dial from '../Dial/DIal';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    
    const increaseSteps = () =>{
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h2>this is my smart Watch!</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}> Count ...</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;