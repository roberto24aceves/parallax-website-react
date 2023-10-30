import {useEffect, useRef, useState} from "react";

const CursorComponent = () =>{
    const cursor = useRef(null);
    const handleMoveCursor = (e) =>{
        const cursorX = e.clientX;
        const cursorY= e.clientY;
        cursor.current.style.top = `${cursorY}px`;
        cursor.current.style.left = `${cursorX}px`;
    }
    useEffect(()=>{
        document.body.addEventListener('mousemove',handleMoveCursor);
    },[])
    return (
        <div ref={cursor} className="cursor-element"></div>
    )
}
export default CursorComponent;