'use client'
import Script from 'next/script'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="nav-warp">
                <ul className="nav-items">
                    <li id="whoiamnav" className="nav-item" onClick={()=>scrollToSection('whoiam')}>
                        Who I am?
                    </li>
                    <li id="skillsnav" className="nav-item" onClick={()=>scrollToSection('skills')}>
                        Skills
                    </li>
                    <li id="experiencenav"className="nav-item" onClick={()=>scrollToSection('experience')}>
                        Experience
                    </li>
                    <li id="contactnav" className="nav-item" onClick={()=>scrollToSection('contact')}>
                        Contact me
                    </li>
                </ul>
            </div>
        </div>
        <Script src="/utils/scrollSection.js"/>
    </>
  )
}

export default Navbar