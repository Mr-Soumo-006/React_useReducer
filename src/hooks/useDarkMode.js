import { useEffect, useState } from "react";

function useDarkMode()
{
    const [isDark,setIsDark]=useState(false)

    function toggleMode()
    {
        setIsDark(prev=>!prev)
    }
    useEffect(()=>{
        document.body.style.backgroundColor=isDark?'black':'white'
        document.body.style.color=isDark?'white':'black'
    },[isDark])

    return [isDark,toggleMode]

}

export default useDarkMode