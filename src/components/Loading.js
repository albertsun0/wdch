import React from 'react'
import { useSpring, animated, config} from 'react-spring'
import {ReactComponent as Headphones} from '../assets/headphones.svg'
function Loading() {
    const props = useSpring({ 
        config:{config:config.gentle},
        from: { opacity:1, marginTop: 0, transform: 'scale(1)'}, 
        to: { 
            opacity: 0,
            marginTop: -10,
            transform: 'scale(0.98)',
           
        }, 
        delay: 3000,
    })

    return (
        <animated.div style={props} className = "absolute top-0 left-0 w-full h-screen bg-white items-center justify-center flex flex-col overflow-hidden">
            <animated.div className={"flex flex-col items-center space-y-4"}>
                <Headphones></Headphones>
                <div className='text-2xl font-serif'>
                    "Your best work is your expression of youself."
                </div>
                <div>
                    - Frank Gehry
                </div>
            </animated.div>
            
        </animated.div>
    )
}

export default Loading

