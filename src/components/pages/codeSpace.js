import React, { useEffect,useState } from 'react'
import line2 from "../../assets/Path 10.png";
import Circle from "../../assets/Ellipse 2.png";
import gitcode4 from "../../assets/gitcode4.png";
import vsCode from "../../assets/vscode.png";
import { COLORS } from "../../components/colors";

const CodeSpace = () => {

    const [codeSpace, setCodeSpace] = useState(false);

    useEffect(() => {
        function fixCodeSpace() {
          if (window.scrollY >= 6583 && window.scrollY <= 8100) {
            // document.body.App.classList.add('fixed-nav')
            setCodeSpace(true);
          } else {
            setCodeSpace(false);
            // document.body.App.classList.remove('fixed-nav')
          }
        }
    
        window.addEventListener("scroll", fixCodeSpace);
      }, []);
    return(
<div
            id="develop"
            className="codeSpaceClass"
            style={{
              margin: 20,
              backgroundColor: "#05112c",
              borderRadius: 20,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{ position: "absolute", top: 0, left: 178, opacity: 0.3 }}
            >
              <img src={line2} alt="" />
            </div>
            <div className="codeSpaceImg">
              <img
                className={codeSpace ? "activeClass" : ""}
                id="codespace"
                src={gitcode4}
              />
            </div>
            <div
              id="codespaces"
              className="container"
              style={{ paddingTop: 200, maxWidth: "72%", textAlign: "center" }}
            >
              <h1
                style={{
                  fontSize: 65,
                  color: COLORS.white,
                  maxWidth: 900,
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Instant dev environments with <span style={{}}>Codespaces</span>
              </h1>
              <a
                style={{
                  textAlign: "center",
                  color: COLORS.white,
                  fontSize: 20,
                  textDecoration: "none",
                  borderBottom: "2px solid white",
                }}
                href="#"
              >
                Learn more about GitHub Codespaces
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                marginTop: 50,
                width: "100%",
                marginTop: 260,
                marginBottom: 600,
              }}
            >
              <div style={{ marginLeft: 220, marginTop: 0 }}>
                <div style={{ position: "relative" }}>
                  <h4
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      maxWidth: 520,
                      color: COLORS.white,
                      marginBottom: 500,
                    }}
                  >
                    <span style={{ color: COLORS.textColor }}>
                      The future of code is in the cloud, not your local copy.
                    </span>
                    Codespaces gives you a complete, configurable dev environment
                    on top of a powerful VM in minutes.
                  </h4>
                  <div
                    style={{
                      position: "absolute",
                      left: -50,
                      top: 0,
                      opacity: 1,
                      backgroundColor: "#06132b",
                      padding: "5px 0",
                      marginTop: 10,
                    }}
                  >
                    <img style={{ opacity: 0.5 }} src={Circle} alt="" />
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <h4
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      maxWidth: 520,
                      color: COLORS.white,
                      marginBottom: 500,
                    }}
                  >
                    Visual Studio Code, in your browser, full stop.
                    <span style={{ color: COLORS.textColor }}>
                      Codespaces brings the world’s most popular desktop editor to
                      every repo. Code, build, test, use the terminal, and open
                      pull requests from anywhere.
                    </span>
                  </h4>
                  <div
                    style={{
                      position: "absolute",
                      left: -70,
                      top: 0,
                      opacity: 1,
                      backgroundColor: "#06132b",
                      padding: "2px 0",
                      marginTop: 10,
                    }}
                  >
                    <img style={{ opacity: 1, width: 50 }} src={vsCode} alt="" />
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <h4
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      maxWidth: 520,
                      color: COLORS.white,
                    }}
                  >
                    <span style={{ color: COLORS.textColor }}>
                      The future of code is in the cloud, not your local copy.
                    </span>
                    Codespaces gives you a complete, configurable dev environment
                    on top of a powerful VM in minutes.
                  </h4>
                  <div
                    style={{
                      position: "absolute",
                      left: -50,
                      top: 0,
                      opacity: 1,
                      backgroundColor: "#06132b",
                      padding: "5px 0",
                      marginTop: 10,
                    }}
                  >
                    <img style={{ opacity: 0.5 }} src={Circle} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}


export default CodeSpace
