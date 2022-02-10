import React, {useState} from 'react'
import {ReactComponent as Arrow} from '../assets/arrow.svg'
function Gallery() {
    const [image, setImage] = useState(0);
    const images = [
        'https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-41.jpg',
        'https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-39.jpg',
        'https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-37.jpg',
        'https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-31.jpg',
        'https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-29.jpg',
    ]

    const add = () =>{
        let temp = image+1;
        if(temp > images.length-1){
            temp = 0;
        }
        setImage(temp);
    }

    const sub = () =>{
        let temp = image-1;
        if(temp < 0){
            temp = images.length-1;
        }
        setImage(temp);
    }

  return (
    <div className='p-20'>
        <div className='text-4xl' id="gallery">Gallery</div>
        <div className='flex flex-row items-center justify-center'>
            <div className='mr-10 hover:bg-slate-200 p-5 rounded-full transition-all duration-500'
            onClick={sub}
            >
                <Arrow className = 'rotate-180'></Arrow>
            </div>
            <img src = {images[image]} className = 'w-1/3'></img>
            <div className='mr-10 hover:bg-slate-200 p-5 rounded-full transition-all duration-500'
            onClick = {add}>
                <Arrow></Arrow>
            </div>
        </div>
        <div className='p-20'>
            Through this album, I wanted to capture the combination of wood and concrete used on the interior. I also wanted to show how the building utilizes natural lighting, and is extremely well lit during the day. Both these factors make the hall pleasing and comfortable to be in. Images from <a href = 'https://larryspeck.com/photography/walt-disney-concert-hall/' className='text-blue-500 underline mb-10'>https://larryspeck.com/photography/walt-disney-concert-hall/</a>.
</div>
    </div>
  )
}

export default Gallery