import React, {FC, useRef, useState} from 'react';

const EventExample:FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const InputRef = useRef<HTMLInputElement>(null)
    const dragHandler = ( e: React.DragEvent<HTMLDivElement>) => {
        console.log(e, 'click')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input
                ref={InputRef}
                placeholder={'ref input'}
            />
            <input
                value={value}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                placeholder={'consrolable input'}
            />
            <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => console.log(value, InputRef.current?.value, e)}>gh</button>

            <div
                onDrag={dragHandler}
                draggable
                style={{width: '200px', height: '200px', background: 'red' }}
            ></div>
            <br/>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: '200px', height: '200px', background: `${isDrag ? 'red' : 'blue'}` }}></div>
        </div>
    );
};

export default EventExample;