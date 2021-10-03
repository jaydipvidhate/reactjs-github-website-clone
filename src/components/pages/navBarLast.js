import { COLORS } from "../../components/colors";

import twitter from "../../assets/Icon awesome-twitter.png";
import facebook from "../../assets/Icon awesome-facebook-square.png";
import youtube from "../../assets/Icon awesome-youtube.png";
import linkdin from "../../assets/Icon awesome-linkedin-in.png";
import git from "../../assets/Icon awesome-github.png";


const NavBarLast = () => {
    return(
        <div className="navbarend" style={{display: 'flex',justifyContent:'space-around',padding: " 20px 8px",backgroundColor: "#F5F5F5"}}>

          <div style={{marginRight:200,display:'flex'}}>
            <p style={{color: COLORS.black,letterSpacing: 0.5, padding: "0 20px",opacity: 0.8,fontSize:12}}>© 2021 GitHub, Inc.</p>
            <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" target="blank">Terms</a>
            <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
            <a href="https://github.com/site-map">Site Map</a>
            <a href="https://github.com/git-guides">What is Git</a>
          </div>
          <div>
            <a href="https://twitter.com/github">

            <img src={twitter} alt="" />
            </a>
            <a href="https://www.facebook.com/GitHub">
            <img src={facebook} alt="" />
            </a>
            <a href="https://www.youtube.com/github">
            <img src={youtube} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/github/">
            <img src={linkdin} alt="" />
            </a>
            <a href="https://github.com/github">
            <img src={git} alt="" />
            </a>
          </div>
        </div>
    )
}

export default NavBarLast