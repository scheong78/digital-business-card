import emailIcon from '../assets/mail.png'
import linkedinIcon from '../assets/linkedin.png'

export default function Info () {
    return (
        <div className="info">
            <h2 className="info--name">Stanley Cheong</h2>
            <h3 className="info--profession">Full Stack Developer</h3>
            <p className="info--website">stanleycheong.website</p>
            <div className="info--cta--wrapper">
                <a className="info--cta info--cta-email" href="#"><img src={emailIcon} className='info--cta-icon'/>Email</a>
                <a className="info--cta info--cta-linkedin" href="#" ><img src={linkedinIcon} className='info--cta-icon' />LinkedIn</a>
            </div>
        </div>
    )
}