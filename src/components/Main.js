import React, { useState, useEffect }from 'react'
import { useSpring, animated } from 'react-spring'
import Loading from './Loading'
import Top from './Top'
import AboutSection from './AboutSection'

function Main() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("use");
        setTimeout(
            function() {
              setLoading(false);
        }, 3500);
    }, []);

    return (
        <div className={`${loading ? "overflow-hidden w-full h-screen" : ""}`}>
            <Top className="overflow-hidden w-full h-screen"></Top>
            <Loading className = "absolute"></Loading>
            <AboutSection></AboutSection>
        </div>
        
    ) 
    
}

export default Main