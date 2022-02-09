import React from 'react'

function AboutSection() {
  return (
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
  )
}

export default AboutSection