import Image from 'next/image'
import Sf from '@public/assets/icons/logo-gfit.png'
import Sf1 from '@public/assets/images/gy-1.jpg'
import Sf2 from '@public/assets/images/gy-2.jpg'
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
                            Admin Web App
                        </span>
                    </div>
                    <div className="ids-item">
                        <h1>
                            Client:
                        </h1>
                        <span>
                            Guaytambos Fit
                        </span>
                    </div>
                    <div className="ids-item">
                        <h1>
                            Year:
                        </h1>
                        <span>
                            2022
                        </span>
                    </div>
                </div>
                <div className='info-desc'>
                    <p>
                    Guaytambos Fit is a training center. This web app has been developed
                    with the purpouse of giving the owner the complete control over
                    his clients. It also integrate a plugin which allows clients to mark
                    asistance with biometric reader. Its a usefull tool that can be used
                    by different bussiness of the same category.
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
                <div className='live-btn disable'>
                    <a href='' target="_blank">
                        View Live Demo
                    </a>
                </div>
                <div className='git-btn'>
                    <a href='https://github.com/FaridRuano/GymApp' target="_blank">
                        <Image src={Git} width={50} height={'auto'} alt='Git'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project1