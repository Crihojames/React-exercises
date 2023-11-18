import React, {useEffect, useRef} from 'react';

const FocusInput = () => {
    useEffect(()=>{
        inputRef.current.focus();
    },[])


    const inputRef = useRef(null)
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
};

export default FocusInput;