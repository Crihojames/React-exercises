import React,{useState, useEffect, useRef} from 'react';

const Timer = () => {
    const [timer, setTimer, useRef] = useState(0)

    // const refInterval.current = useRef()

    useEffect(()=>{
        const refInterval = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1 )
        }, 1000)
        return ()=>{
            clearInterval(refInterval.current)
        }
    },[])

    return (
        <div>
            <h2>timer is {timer}</h2>
            <button onClick={()=> clearInterval(refInterval.current)}>Clear timer</button>
        </div>
    );
};

export default Timer;