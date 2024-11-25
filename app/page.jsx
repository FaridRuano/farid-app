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
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import Script from 'next/script'
import Project1 from '@public/components/Project1'
import Project2 from '@public/components/Project2'
import Git from '@public/assets/icons/git.jpg'
import Link from '@public/assets/icons/link-logo.jpg'



import { useState } from 'react'


export default function Home() {
  const [openP1, setOpen1] = useState(true)

  const handleP1 = () =>{
    setOpen1(!openP1)
  }

  const [openP2, setOpen2] = useState(true)

  const handleP2 = () =>{
    setOpen2(!openP2)
  }
  /* return (
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
            I’m a 22 years old Software Engineer.
            Currently working with different enterprises as Creative
            Director and Web Developer. My work focus on helping small and big
            business to reach their goals in social media. Furthermore I build
            usefull Web Apps, to reach new goals in the enterprise.
          </p>
        </div>
        <div className='main-profile'>

          <div className='video-holder'>
            <CldVideoPlayer width='340' height='340' src='profile-video' className='profile-video' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
          </div>
          <div className='gif-holder-1'>
            <CldImage width='120' height='130' src='yez8ke9200ailvie3eae' alt='Gif 1'/>
          </div>
          <div className='gif-holder-2'>
            <CldImage width={220} height={220} src="clmiontdz2u0srpcrzcb" alt='Gif 2'/>
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
            <Image src={JsIcon} width='72' height='72' alt='Javascript'/>
            <Image src={HtIcon} width='72' height='72' alt='Html'/>
            <Image src={CsIcon} width='72' height='72' alt='Css'/>
            <Image src={SaIcon} width='72' height='72' alt='Sass'/>
            <Image src={PhpIcon} width='72' height='72' alt='Php'/>
            <Image src={RtIcon} width='72' height='72' alt='React'/>
            <Image src={NxIcon} width='72' height='72' alt='NextJs'/>

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
            <Image src={BlIcon} width='auto' height='72' alt='Blender 3D'/>
            <Image src={AiIcon} width='72' height='72' alt='Illustrador'/>
            <Image src={PsIcon} width='72' height='72' alt='Photoshop'/>
            <Image src={LgIcon} width='72' height='72' alt='LightRoom'/>
            <Image src={PrIcon} width='72' height='72' alt='Premiere Pro'/>
            <Image src={AeIcon} width='72' height='72' alt='After Effects'/>

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
            <CldVideoPlayer width='1920' height='1080' src='BG-EXPERIENCE' className='bg-expe' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>                 
          </div>
        </div>
      </div>
      <section className='experience-section' id='experience'>
        <Project1 disable={openP1} setDisable={handleP1}/>
        <Project2 disable={openP2} setDisable={handleP2}/>
        <div className='expe-warp'>
          <div className='title-bg'>
            <span>
              Web Apps
            </span>
          </div>
          <p>
            Web Pages and Web Apps that show my design habilities to create beautifull and interactive
            interfaces, that create a unique experience for the user.
          </p>
          <div className='softwares-warp'>
            <div className='types-warp'>
              <div className='type-item' data-video-id='sanfra' onClick={()=>handleP1()}>
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>
                <span>
                  San Francisco Ltda.
                </span>
              </div>
              <div className='type-item' data-video-id='gym' onClick={()=>handleP2()}>
                <Image className='arrow' src={ArrowRight} width={10} height={'auto'} alt='Arrow Right Icon'/>      
                <span>
                  Guaytambos Fit
                </span>
              </div>              
            </div>
            <div className='software-holder'>
              <div className='software'>
                <div id='sanfra' className='project-software'>
                  <Image src={Sf} width={150} height={'auto'} alt='San Francisco Ltda.'/>
                </div>
                <div id='gym' className='project-software'>
                  <Image src={GFit} width={150} height={'auto'} alt='Guaytambos fit'/>
                </div>                                
                <div className='project-software bg'>
                  <CldImage width={210} height={210} src="gif3" alt='Default'/>
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
            Different style of videos for different communication purpouses, some ones include
            high VFX skills and creativity.
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
                <div id='resume' className='cl-video'>
                  <CldVideoPlayer className='cl-player' src='INSCRIPCION-ANGELES' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
                </div>
                <div id='motion' className='cl-video'>
                  <CldVideoPlayer className='cl-player' src='MOTION-GRAPHICS' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
                </div>
                <div id='vfx' className='cl-video'>
                  <CldVideoPlayer className='cl-player' src='VFX-PORTAL' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
                </div>
                <div id='brand' className='cl-video'>
                  <CldVideoPlayer className='cl-player' src='BRAND-ADVERTISING' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
                </div>
                <div id='3d' className='cl-video'>
                  <CldVideoPlayer className='cl-player' src='3D-ANIM' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
                </div>
                <CldVideoPlayer width='208' height='370' src='BG-VIDEO' className='cl-video bg' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>                 
                                
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
        <div className='info'>
          <div className='personal'>
            <h1 className='tit'>Contact Info</h1>
            <div>
              <h1>
                Email:
              </h1>
              <span>
                fruanocm2777@gmail.com
              </span>
            </div>
            <div>
              <h1>
                Phone:
              </h1>
              <span>
                (+593) 99-644-7884
              </span>
            </div>
            <div className='btn-wpp'>
              <a href='https://w.app/FaridRuano' target='_blank'>
                Send Me Message
              </a>
            </div>
          </div>
          <div className='social'>
            <div className='git-btn'>
              <a href='https://github.com/FaridRuano' target="_blank">
                <Image src={Git} width={100} height={'auto'} alt='Git'/>
              </a>
            </div>
            <div className='git-btn'>
              <a href='https://www.linkedin.com/in/farid-ruano-76878b287/' target='_blank'>
                <Image src={Link} width={100} height={'auto'} alt='Link'/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  ) */
  return (
    <main>
      Actualmente en Mantenimiento
    </main>
  )
}
