import React from 'react'
import { useParams } from 'react-router-dom';

const Number = () => {
    const { word, bgColor, textColor } = useParams();


return (
    <div>
        {
            isNaN(word)?
            <h1 style={{color: textColor, backgroundColor: bgColor, margin: "50px auto", width: "60%", padding: "10px"}}>
                The string in the url is: {word}
            </h1>
            :
            <h1 style={{margin: "50px auto", width: "60%", padding: "10px"}}>
                The number in the URL is: {word}
            </h1>
        }
    </div>
)
}

export default Number