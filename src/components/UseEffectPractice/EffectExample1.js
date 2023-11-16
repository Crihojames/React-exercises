import React,{useState, useEffect} from 'react';

const EffectExample1 = () => {
    const  [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `you clicked: ${count} times`
    })
    return (
        <div>
        {count}
            <button onClick={()=>setCount(count + 1)}>Click</button>
        </div>
    );
};

export default EffectExample1;