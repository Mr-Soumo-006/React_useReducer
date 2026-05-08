import { useEffect, useState } from "react";


function UseWindowWidth()
{
    const[width,setWidth]=useState(window.innerWidth)
    // Setting the current window width in the width variable
    // When the page is rendered
    useEffect(()=>{
        //It is setting the new width in the width Variable
        function handleResize()
        {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[])
    return width
}
export default UseWindowWidth