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
import Gif1 from '@public/assets/videos/giphy.gif'
import Gif2 from '@public/assets/videos/giphy1.gif'
import Script from 'next/script'


export default function Home() {
  return (
    <main>
      <Script src="/utils/scrollAnim.js"/>
      <section className="main-section">
        <div className="main-warp">
          <h2>
            Hi, my name is...
          </h2>
          <h1>
            FARID RUANO
          </h1>
          <p>
            I’ll make your ideas become a reality.
          </p>
          <p>
            Creative Freelancer ready to help you launch your projects with beautiful, 
            interactive and innovative web interfaces and with creative content for 
            your social media.
          </p>
          <p>
            I’m a 22 years old Software Engineering student at
            ‘Universidad Tecnica de Ambato’ in Ambato, Ecuador.
            Currently working with different enterprises as Creative
            Director and Web Developer. My work focus on helping small and big
            business to reach their goals in social media such as Instagram, Facebook,
            Tiktok, and also help them to become globaly visible with brand new
            Websites. Furthermore I build usefull Web Apps, to reach new goals in the enterprise.
          </p>
        </div>
        <div className="main-profile">
          
          <div className="video-holder">
            <video className="profile-video" loop muted autoPlay>
              <source src={require('../public/assets/videos/farid-profile.mp4')}/>
            </video>
          </div>
          <div className="gif-holder-1">
            <Image src={Gif1} width="120" height="auto"/>
          </div>
          <div className="gif-holder-2">
            <Image src={Gif2} width="220" height="auto"/>
          </div>
          <div className="border-profile"/>
          <span className="txt-holder">I love gifs!</span>
        </div>
      </section>
      <section className="title">
        <div className="title-warp">
          <h2>
            Skills
          </h2>
          <p>
            Programing tools and Softwares
          </p>
        </div>
      </section>
      <section className="skills-section">
        <div className="skill-warp">
          <div className="title-skills">
            <span>
              Coding Tools
            </span>
          </div>
          <p>
            For coding web apps.
          </p>
          <div className="skills-icons">
            <Image src={JsIcon} width="72" height="72"/>
            <Image src={HtIcon} width="72" height="72"/>
            <Image src={CsIcon} width="72" height="72"/>
            <Image src={SaIcon} width="72" height="72"/>
            <Image src={PhpIcon} width="72" height="72"/>
            <Image src={RtIcon} width="72" height="72"/>
            <Image src={NxIcon} width="72" height="72"/>

          </div>
        </div>
        <div className="skill-warp">
          <div className="title-skills">
            <span>
              Softwares
            </span>
          </div>
          <p>
            For content creation and edition.
          </p>
          <div className="skills-icons">
            <Image src={BlIcon} width="auto" height="72"/>
            <Image src={AiIcon} width="72" height="72"/>
            <Image src={PsIcon} width="72" height="72"/>
            <Image src={LgIcon} width="72" height="72"/>
            <Image src={PrIcon} width="72" height="72"/>
            <Image src={AeIcon} width="72" height="72"/>

          </div>
        </div>
      </section>

    </main>
  )
}
