import React from 'react'
import Location from '../assets/location.png'
function AboutSection() {
  return (
    <div className = 'flex flex-col'>
      <div className='p-10 flex flex-row w-full'>
      <div className='flex flex-col p-20 w-1/2'>
        <div className='text-4xl mb-14' id='about'>
          About
        </div>
        <div className='leading-10'>
          The Walt Disney Concert Hall located in Los Angeles, California was constructed from 1999
           to 2003. It was designed by Frank Ghery and features a fluid stainless steel exterior with
            cascading panels representing sails. The main purpose of this building was as a concert hall
             for the LA Philharmonic and LA Master Choraleto perform in, but also serves as a venue with
              unrivaled acoustics for many other musical events. It also features a large public garden 
              and is a tourist attraction. To this day, it brings life to downtown Los Angeles and 
              illuminates the city at night.
        </div>
      </div>
      <div className='p-20 w-1/2 flex flex-col'>
        <img className = 'mb-2' src='https://images.adsttc.com/media/images/5264/ac6c/e8e4/4e88/a000/01ff/newsletter/Gehry_PhilippRuemmele_riotphotography.com.jpg?1382329446'></img>
        Walt Disney Concert Hall's exterior featuring curves, layered sloping segments, and the iconic "silver sails".
        <a href = 'https://www.archdaily.com/441358/ad-classics-walt-disney-concert-hall-frank-gehry' className='text-blue-500 underline'>https://www.archdaily.com/441358/ad-classics-walt-disney-concert-hall-frank-gehry</a>
      </div>
    </div>
    <div className = 'flex flex-row p-10'>

      <img className = 'w-1/3 p-10' src = "https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-16.jpg"></img>
      <img className = 'w-1/3 p-10' src = "https://larryspeck.com/wp-content/uploads/2011/04/Frank-Gehry-Walt-Disney-Concert-Hall-Los-Angeles-LA-California-Larry-Speck-UTSOA-13.jpg"></img>
      <div className = 'p-10 flex-col'>
        <div className = 'mb-6 text-2xl '>
        The Walt Disney Concert Hall Up Close	
        </div>
        <div>
        The entrances are seamlessly blended into the contours of the building, and the paths and windows are curved to match the shapes of the building. 
        </div>
        <div>
        <a href = 'https://larryspeck.com/photography/walt-disney-concert-hall/' className='text-blue-500 underline mb-10'>https://larryspeck.com/photography/walt-disney-concert-hall/</a>
        
        <img src = {Location} className = 'my-10'></img>
        <div>
        This building is located in an urban context, and is surrounded by mostly concrete and other buildings. It contributes green space with its gardens, making good use of the leftover space on the block. Additionally it’s unique architecture helps it stand out from many of the surrounding buildings.
        </div>
        </div>
      </div>
    </div>
    <div className = 'px-20 py-10 text-2xl'>Architectural Drawings</div>
    <div className = 'flex flex-row px-20'>
      <img className = 'w-1/2 p-10' src = 'http://wdch10.laphil.com/image/356/564/375'></img>
      <img className = 'w-1/2 p-10' src = 'http://wdch10.laphil.com/image/357/564/375'></img>
    </div>

    <div className = 'px-20 py-10 text-2xl'>Journals</div>
    <div className = 'flex flex-row px-20'>
      
    </div>

    </div>

  )
}

export default AboutSection