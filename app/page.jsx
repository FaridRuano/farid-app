'use client'

import Image from 'next/image'
import AeIcon from '@public/assets/icons/ae-icon.png'
import AiIcon from '@public/assets/icons/ai-icon.png'
import BlIcon from '@public/assets/icons/bl-icon.png'
import CsIcon from '@public/assets/icons/css-icon.png'
import HtIcon from '@public/assets/icons/html-icon.png'
import JsIcon from '@public/assets/icons/js-icon.png'
import RtIcon from '@public/assets/icons/react-icon.png'
import LgIcon from '@public/assets/icons/lg-icon.png'
import NxIcon from '@public/assets/icons/next-icon.png'
import PhpIcon from '@public/assets/icons/php-icon.png'
import PrIcon from '@public/assets/icons/pr-icon.png'
import PsIcon from '@public/assets/icons/ps-icon.png'
import SaIcon from '@public/assets/icons/sa-icon.png'
import ArrowRight from '@public/assets/icons/arrowRight.png'
import GFit from '@public/assets/icons/logo-gfit.png'
import Sf from '@public/assets/icons/logo-sf.png'
import Gif1 from '@public/assets/videos/giphy.gif'
import Gif2 from '@public/assets/videos/giphy1.gif'
import Gif3 from '@public/assets/videos/giphy2.gif'

import Script from 'next/script'
import { useState } from 'react'


export default function Home() {

  return (
    <main>
      <Script src='/utils/scrollAnim.js'/>
      <Script src='/utils/projectPlay.js'/>
      <section className='main-section' id='whoiam'>
        <div className='main-warp'>
          <h2>
            Hi, my name is...
          </h2>
          <h1>
            FARID RUANO
          </h1>          
          <p>
            Creative Freelancer ready to help you launch your projects with beautiful, 
            interactive and innovative web interfaces and with creative content for 
            your social media.
          </p>
          <p>
            I’m a 22 years old Software Engineering student.
            Currently working with different enterprises as Creative
            Director and Web Developer. My work focus on helping small and big
            business to reach their goals in social media. Furthermore I build
            usefull Web Apps, to reach new goals in the enterprise.
          </p>
        </div>
        <div className='main-profile'>

          <div className='video-holder'>
            <video className='profile-video' loop muted autoPlay>
              <source src={require('../public/assets/videos/farid-profile.mp4')}/>
            </video>
          </div>
          <div className='gif-holder-1'>
            <Image src={Gif1} width='120' height='auto'/>
          </div>
          <div className='gif-holder-2'>
            <Image src={Gif2} width='220' height='auto'/>
          </div>
          <div className='border-profile'/>
          <span className='txt-holder'>I love gifs!</span>
        </div>
      </section>
      <div className='title'>
        <div className='title-warp'>
          <h2>
            Skills
          </h2>
          <p>
            Programing tools and Softwares
          </p>
        </div>
      </div>
      <section className='skills-section' id='skills'>
        <div className='skill-warp'>
          <div className='title-bg'>
            <span>
              Coding Tools
            </span>
          </div>
          <p>
            For coding web apps.
          </p>
          <div className='skills-icons'>
            <Image src={JsIcon} width='72' height='72'/>
            <Image src={HtIcon} width='72' height='72'/>
            <Image src={CsIcon} width='72' height='72'/>
            <Image src={SaIcon} width='72' height='72'/>
            <Image src={PhpIcon} width='72' height='72'/>
            <Image src={RtIcon} width='72' height='72'/>
            <Image src={NxIcon} width='72' height='72'/>

          </div>
        </div>
        <div className='skill-warp'>
          <div className='title-bg'>
            <span>
              Softwares
            </span>
          </div>
          <p>
            For content creation and edition.
          </p>
          <div className='skills-icons'>
            <Image src={BlIcon} width='auto' height='72'/>
            <Image src={AiIcon} width='72' height='72'/>
            <Image src={PsIcon} width='72' height='72'/>
            <Image src={LgIcon} width='72' height='72'/>
            <Image src={PrIcon} width='72' height='72'/>
            <Image src={AeIcon} width='72' height='72'/>

          </div>
        </div>
      </section>
      <div className='title'>
        <div className='title-warp'>
          <h2>
            Experience
          </h2>
          <p>
            In software and content creation.
          </p>
          <div className='bg'>
            <video id='event' loop muted autoPlay>
              <source src={require('../public/assets/videos/BG-EXPERIENCE.mp4')}/>
            </video>        
          </div>
        </div>
      </div>
      <section className='experience-section' id='experience'>
        <div className='expe-warp'>
          <div className='title-bg'>
            <span>
              Web Apps
            </span>
          </div>
          <p>
            Some projects for different type of clients.
          </p>
          <div className='softwares-warp'>
            <div className='types-warp'>
              <div className='type-item' data-video-id='sanfra'>
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>
                <span>
                  San Francisco Ltda.
                </span>
              </div>
              <div className='type-item' data-video-id='gym'>
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>      
                <span>
                  Guaytambos Fit
                </span>
              </div>              
            </div>
            <div className='software-holder'>
              <div className='software'>
                <div id='sanfra' className='project-software'>
                  <Image src={Sf} width={150} height={'auto'}/>
                </div>
                <div id='gym' className='project-software'>
                  <Image src={GFit} width={150} height={'auto'}/>
                </div>                                
                <div className='project-software bg'>
                  <Image src={Gif3} width={210} height={'auto'}/>
                </div>    
                <div className='project-software border'/>
              </div>
            </div>
          </div>
        </div>
        <div className='expe-warp'>
          <div className='title-bg'>
            <span>
              Creative Proyects
            </span>
          </div>
          <p>
            Some projects for different type of clients.
          </p>
          <div className='projects-warp'>
            <div className='types-warp'>
              <div className='type-item' data-video-id='resume' >
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>
                <span>
                  EVENT RESUME
                </span>
              </div>
              <div className='type-item' data-video-id='motion' >
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>      
                <span>
                  MOTION GRAPHICS
                </span>
              </div>
              <div className='type-item' data-video-id='vfx' >
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>
                <span>
                  VISUAL EFFECTS
                </span>
              </div>
              <div className='type-item' data-video-id='brand' >
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>
                <span>
                  BRAND ADVERTISING
                </span>
              </div>
              <div className='type-item' data-video-id='3d' >
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>
                <span>
                  3D ANIMATION
                </span>
              </div>
            </div>
            <div className='project-holder'>
              <div className='videos'>
                <video id='resume' className='project-video' loop muted autoPlay>
                  <source src={require('../public/assets/videos/INSCRIPCION.ANGELES.mp4')}/>
                </video>
                <video id='motion' className='project-video' loop muted autoPlay>
                  <source src={require('../public/assets/videos/SANFRA.APP.mp4')}/>
                </video>
                <video id='vfx' className='project-video' loop muted autoPlay>
                  <source src={require('../public/assets/videos/VFX-PORTAL.mp4')}/>
                </video>
                <video id='brand' className='project-video' loop muted autoPlay>
                  <source src={require('../public/assets/videos/brand-advertising.mp4')}/>
                </video>
                <video id='3d' className='project-video' loop muted autoPlay>
                  <source src={require('../public/assets/videos/3D-ANIM.mp4')}/>
                </video>
                <video id='3d' className='project-video bg' loop muted autoPlay>
                  <source src={require('../public/assets/videos/BG-VIDEOS.mp4')}/>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='title'>
                
        
        <div className='title-warp'>
          <h2>
            Contact me
          </h2>
          <p>
            For work purpouses.
          </p>
        </div>
      </div>
      <section className='contact-section' id='contact'>
        
      </section>
    </main>
  )
}
