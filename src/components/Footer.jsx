import twitter from "../assets/Twitter Icon.png"
import facebook from "../assets/Facebook Icon.png"
import instagram from "../assets/Instagram Icon.png"
import ghub from "../assets/Github Icon.png"
import linkedin from "../assets/Linkedin Icon.png"

export default function Footer () {
    return (
        <div className="footer">
            <a href="#"><img src={twitter} alt="twitter icon" /></a>
            <a href="#"><img src={facebook} alt="facebook icon" /></a>
            <a href="#"><img src={instagram} alt="instagram icon" /></a>
            <a href="#"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="#"><img src={ghub} alt="github icon" /></a> 
        </div>
    )
}