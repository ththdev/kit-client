import React, { useState, useEffect } from 'react'

interface Props {
    img: any
}

const ResponsiveImage:React.FC<Props> = props => {
    let [width, setWidth] = useState(window.innerWidth);
    let [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const resizeListener = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        
        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])
    
    return (
        <img 
            src={props.img}
            style={{
                width: width >= 1680 ? width+"px" : "auto",
                height: width >= 1680 ? "auto" : height+"px"
            }}
        />
    )
}

export default ResponsiveImage