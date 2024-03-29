import Image from 'next/image'
import Sf from '@public/assets/icons/logo-sf.png'
import Sf1 from '@public/assets/images/sf-1.jpg'
import Sf2 from '@public/assets/images/sf-2.jpg'
import Git from '@public/assets/icons/git.jpg'


const Project1 = ({disable, setDisable}) => {
    const hanldeChange = () => {
        setDisable()
    }
  return (
    <div className={disable?"p1-holder disabled":"p1-holder"}>
        <span className='p1-close'onClick={()=>hanldeChange()}>
            X
        </span>
        <div className='p1-warp'>
            <div className="p1-logo">
                <Image src={Sf} width='300' height='auto' alt='Sanfra Logo'/>
            </div>            
            <div className='p1-info'>
                <div className='info-ids'>
                    <div className="ids-item">
                        <h1>
                            Category:
                        </h1>
                        <span>
                            Web UX/UI Design
                        </span>
                    </div>
                    <div className="ids-item">
                        <h1>
                            Client:
                        </h1>
                        <span>
                            San Francisco Ltda
                        </span>
                    </div>
                    <div className="ids-item">
                        <h1>
                            Year:
                        </h1>
                        <span>
                            2023
                        </span>
                    </div>
                </div>
                <div className='info-desc'>
                    <p>
                    San Francisco Ltda is a finance company whose purpose is to provide 
                    the best possible service to its clients. The construction of 
                    its website has been guided by the graphic line that has been used 
                    on social networks, with a dynamic approach to all the information 
                    that it must provide to its clients throughout Ecuador.
                    </p>
                </div>
            </div>
            <div className='p1-images'>
                <div className='img-container'>
                    <Image width={400} height={'auto'} src={Sf1}/>
                </div>
                <div className='img-container'>
                    <Image width={400} height={'auto'} src={Sf2}/>
                </div>
            </div>
            <div className='p1-buttons'>
                <div className='live-btn'>
                    <a href='https://sanfra.vercel.app' target="_blank">
                        View Live Demo
                    </a>
                </div>
                <div className='git-btn'>
                    <a href='https://github.com/FaridRuano/sanfra' target="_blank">
                        <Image src={Git} width={50} height={'auto'} alt='Git'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project1