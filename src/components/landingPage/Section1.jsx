import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import heroVideo from '../../assets/hero_video.mp4'

const Section1 = () => {
  return (
    <div className="relative h-screen overflow-hidden">
        <NavBar />
        <HeroSection />
        <video
                className="w-screen h-screen object-cover absolute top-0 left-0 -z-20 brightness-50"
                autoPlay 
                loop
                muted
                preload="auto"
              >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <svg className="opacity-1 absolute xs:bottom-2 xs:scale-125 lg:scale-100 lg:-bottom-10 -z-10"
          style={{ filter: 'drop-shadow(0px -10px 0px rgba(255,255,255,0.75)) drop-shadow(0px -18px 0px rgba(255,255,255,0.5))' 
                }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,96L26.7,122.7C53.3,149,107,203,160,229.3C213.3,256,267,256,320,234.7C373.3,213,427,171,480,170.7C533.3,171,587,213,640,224C693.3,235,747,213,800,202.7C853.3,192,907,192,960,202.7C1013.3,213,1067,235,1120,250.7C1173.3,267,1227,277,1280,266.7C1333.3,256,1387,224,1413,208L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default Section1