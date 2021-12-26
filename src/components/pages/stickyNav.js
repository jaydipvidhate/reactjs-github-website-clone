import React,{useState,useEffect} from 'react';
import { COLORS } from "../../components/colors";


const StickyNav = () => {
    
    useEffect(() => {
        const topOfNav = 1295;
    
        function fixNav() {
          if (window.scrollY >= topOfNav) {
            setNavbar(true);
          } else {
            setNavbar(false);
          }
        }
        window.addEventListener("scroll", fixNav);
      }, []);

    const [navbar, setNavbar] = useState(false);

    return(
        <nav
          id="navbar"
          className={navbar ? "activeClass " : ""}
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: COLORS.white,
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 180,
            paddingRight: 180,
            transition: "all 0.3s ease",
            alignItems: "center",
          }}
        >
          <a
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: COLORS.black,
            }}
            className="navlinksbtn active"
            href="#code"
          >
            Code
          </a>

          <a
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: COLORS.black,
            }}
            className="navlinksbtn"
            href="#collaborate"
          >
            Collaborate
          </a>
          <a
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: COLORS.black,
            }}
            className="navlinksbtn"
            href="#develop"
            >
            Develop
          </a>
          <a
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: COLORS.black,
            }}
            className="navlinksbtn"
            href="#automate"
            >
            Automate
          </a>
          <a
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: COLORS.black,
            }}
            href="#secure"
            className="navlinksbtn"
            >
            Secure
          </a>
          <a
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: COLORS.black,
            }}
            className="navlinksbtn"
            href="#community"
          >
            Community
          </a>
          <button
            style={{
              alignItems: "center",
              backgroundColor: COLORS.greenButton,
              border: "none",
              justifyContent: "space-between",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 5,
              paddingLeft: 30,
              paddingRight: 30,
              color: COLORS.white,
              fontSize: 16,
              fontWeight: 600,
            }}
            className="btn"
          >
            Sign up
          </button>
        </nav>
    )
}

export default StickyNav;