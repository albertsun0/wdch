import React from 'react'
import { useSpring, animated, config} from 'react-spring'

function Top() {
    const props = useSpring({ 
        config:{config:config.gentle},
        from: { opacity:0.1, marginTop: 0, backgroundSize:'105%'}, 
        to: { 
            opacity: 1,
            marginTop:0,
            backgroundSize:'100%',
        }, 
        delay: 3200,
    })

    const anim2 = useSpring({
        config:{config:config.gentle},
        from: {opacity:0, marginTop:20}, 
        to: { 
            opacity:1,
            marginTop:0,
        }, 
        delay: 3500,
    })
    return (
        <animated.div className='w-full h-screen overflow-hidden bg-top' style={props}>
            <div className='p-32 text-white flex flex-col items-end space-y-10'>
                <animated.div style={anim2} className='bg-black p-10 flex flex-col'>
                    <div className='text-6xl font-bold'>
                        Walt Disney Concert Hall
                    </div>
                    <div className='text-2xl p-2 pt-4'>
                        Albert Sun ARC 308 
                    </div>
                </animated.div>
            
                <animated.div style={anim2} className='text-2xl px-10 bg-black p-2 flex flex-col items-end'>
                    <a href = "#about" className = 'z-50'>
                        About
                    </a>
                    <div>
                        Architecture
                    </div>
                    <div>
                        a
                    </div>
                </animated.div>
            </div>
            
        </animated.div>
    )
}

export default Top