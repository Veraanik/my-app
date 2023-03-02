import React, {useState} from 'react';

const Counter = () => {
    const [state,setN]=useState(0)
    const [currentN, setCurrent]=useState('1')
    let n = 0;
    const OnClick=(value:number)=>{
        setN(state + value);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value ={currentN}
                    onChange={(e)=>setCurrent(e.target.value)}
                />
            </div>
            <div>
                {state}
            </div>

            <div>
                <button onClick={()=>OnClick(+1)}>
                    Plus 1
                </button>

                <button onClick={()=>OnClick(-1)}>
                    Minus 1
                </button>
            </div>

            <div>
                <button onClick={()=>OnClick(+100)}>
                    Plus 100
                </button>

                <button onClick={()=>OnClick(- 100)}>
                    Minus 100
                </button>
            </div>
            <div>
                <button onClick={()=>OnClick(parseInt(currentN))}>
                    Plus N
                </button>
            </div>

        </div>
    );
};

export default Counter;