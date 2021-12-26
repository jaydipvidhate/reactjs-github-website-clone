

import React from 'react'
import { COLORS } from "../../components/colors";
import earth from "../../assets/earth.png";
import cheakout from "../../assets/Group 9.png";
import gitcode from "../../assets/gitcode.png";
import gitcode2 from "../../assets/gitcode2.png";
import gitcode3 from "../../assets/gitcode3.png";
import gitmobile from "../../assets/git mobile.png";
import Circle from "../../assets/Ellipse 2.png";
import branch from "../../assets/Icon metro-flow-branch.png";


const OriginStatus = () => {
    return(
<div id="collaborate" style={{ position: "relative" }}>
          <div style={{ marginLeft: 232 }}>
            <p style={{ position: "relative", opacity: 1 }}>
              <span style={{ opacity: 0.5, fontSize: 12 }}>
                git cheackout -b origin add-status-screens
              </span>
              <div
                style={{
                  position: "absolute",
                  left: -42,
                  opacity: 1,
                  top: 0,
                  padding: "1px 0 0 0",
                  backgroundColor: COLORS.white,
                }}
              >
                <img
                  style={{ width: 25, opacity: 0.7 }}
                  src={cheakout}
                  alt=""
                />
              </div>
            </p>
            <div style={{ marginTop: 180, marginLeft: 160 }}>
              <div>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: -15,
                    border: "1px solid #83909160",
                    width: 220,
                    borderRadius: 20,
                    padding: "5px 5px",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: 12, height: 14 }} src={branch} alt="" />
                  <p
                    style={{
                      color: COLORS.textColor3,
                      fontSize: 14,
                      opacity: 0.6,
                    }}
                  >
                    odigin/add-status-screens
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      left: -38,
                      opacity: 1,
                      backgroundColor: COLORS.white,
                      padding: "5px 0",
                    }}
                  >
                    <img style={{ opacity: 0.5 }} src={Circle} alt="" />
                  </div>
                </div>
                <div style={{ margin: "20px 0" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      style={{
                        position: "absolute",
                        width: 40,
                        opacity: 0.8,
                        padding: 0.1,
                        backgroundColor: COLORS.white,
                        borderRadius: 100,
                      }}
                      src={earth}
                      alt=""
                    />
                    <img
                      style={{
                        position: "absolute",
                        width: 40,
                        opacity: 0.8,
                        left: 10,
                        padding: 0.1,
                        backgroundColor: COLORS.white,
                        borderRadius: 100,
                      }}
                      src={earth}
                      alt=""
                    />
                    <img
                      style={{
                        position: "absolute",
                        width: 40,
                        opacity: 0.8,
                        left: 20,
                        padding: 0.1,
                        backgroundColor: COLORS.white,
                        borderRadius: 100,
                      }}
                      src={earth}
                      alt=""
                    />
                  </div>
                  <h6
                    style={{
                      fontSize: 18,
                      opacity: 0.2,
                      marginLeft: 75,
                      paddingTop: 10,
                    }}
                  >
                    +3 collaborators
                  </h6>
                </div>
                <h1 style={{ fontSize: 65, letterSpacing: -4, maxWidth: 600 }}>
                  <span id="readyText">Ready player two.</span>
                </h1>
                <h1
                  style={{
                    fontSize: 60,
                    letterSpacing: -4,
                    maxWidth: 530,
                    lineHeight: -1,
                    marginBottom: 10,
                  }}
                >
                  Scale your team to any size in the cloud.
                </h1>
                <a
                  style={{
                    fontSize: 22,
                    letterSpacing: -1,
                    textDecoration: "none",
                    fontWeight: 700,
                    borderBottom: "3px solid black",
                    color: COLORS.black,
                    opacity: 0.8,
                  }}
                  href="#"
                >
                  Create a new organization for free
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div>
                  <div data-aos="fade-right" data-aos-duration={200}>
                    <h4
                      style={{
                        fontSize: 24,
                        fontWeight: 500,
                        maxWidth: 520,
                        marginTop: 200,
                      }}
                    >
                      Better code starts with pull requests—{" "}
                      <span style={{ color: COLORS.textColor }}>
                        conversations around your code where you can experiment,
                        squash bugs, and build new features.
                      </span>
                    </h4>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: -50,
                      top: 0,
                      opacity: 1,
                      backgroundColor: COLORS.white,
                      padding: "5px 0",
                      marginTop: 200,
                    }}
                  >
                    <img style={{ opacity: 0.5 }} src={Circle} alt="" />
                  </div>
                </div>
                <div style={{ flexDirection: "column" }}>
                  <div style={{ opacity: 0.2 }}>
                    <h3
                      style={{
                        fontSize: 35,
                        letterSpacing: -1,
                        marginBottom: 20,
                      }}
                    >
                      Add sucess/failure screen #1337
                    </h3>
                    <div style={{ display: "flex", marginBottom: 20 }}>
                      <a
                        style={{
                          textDecoration: "none",
                          padding: "4px 30px",
                          marginRight: 5,
                          color: COLORS.white,
                          border: "none",
                          backgroundColor: COLORS.greenButton,
                          borderRadius: 20,
                        }}
                        href=""
                      >
                        Open
                      </a>
                      <p style={{ fontSize: 15 }}>
                        Kira-intern wants to mearge 13 commits into{" "}
                        <span>main</span> from <span>add-status</span>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: 10,
                        marginBottom: 20,
                      }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 18,
                          color: COLORS.black,
                          borderTop: "2px solid #7D7D7D",
                          borderRight: "2px solid black",
                          borderLeft: "2px solid black",
                          paddingTop: 5,
                          paddingLeft: 40,
                          paddingRight: 40,
                        }}
                        href="#"
                      >
                        Conversation 3
                      </a>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 18,
                          color: COLORS.black,
                          borderBottom: "2px solid #7D7D7D",
                          paddingLeft: 40,
                          paddingRight: 40,
                          paddingBottom: 5,
                        }}
                        href="#"
                      >
                        Commits 13
                      </a>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 18,
                          color: COLORS.black,
                          borderBottom: "2px solid #7D7D7D",
                          paddingLeft: 40,
                          paddingRight: 40,
                          paddingBottom: 5,
                        }}
                        href="#"
                      >
                        Cheaks 3
                      </a>
                    </div>
                  </div>
                  <img
                    data-aos="fade-left"
                    data-aos-duration={300}
                    id="gitcodes"
                    style={{
                      width: 500,
                      border: "1px solid #7D7D7D",
                      borderRadius: 10,
                    }}
                    src={gitcode}
                    alt=""
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div>
                  <div data-aos="fade-right" data-aos-duration={200}>
                    <h4
                      style={{
                        fontSize: 24,
                        fontWeight: 500,
                        maxWidth: 520,
                        marginTop: 200,
                      }}
                    >
                      Know when your pull request is ready to merge when
                      everything’s green.{" "}
                      <span style={{ color: COLORS.textColor }}>
                        Reviews approved? Check. Tests passing? Check check. No
                        conflicts? Ship it already.
                      </span>
                    </h4>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: -50,
                      top: 0,
                      opacity: 1,
                      backgroundColor: COLORS.white,
                      padding: "5px 0",
                      marginTop: 200,
                    }}
                  >
                    <img style={{ opacity: 0.5 }} src={Circle} alt="" />
                  </div>
                </div>
                <div style={{ flexDirection: "column" }}>
                  <div style={{ opacity: 0.2 }}>
                    <h3
                      style={{
                        fontSize: 35,
                        letterSpacing: -1,
                        marginBottom: 20,
                      }}
                    >
                      Remove sucess/failure #1337
                    </h3>
                    <div style={{ display: "flex", marginBottom: 20 }}>
                      <a
                        style={{
                          textDecoration: "none",
                          padding: "4px 30px",
                          marginRight: 5,
                          color: COLORS.white,
                          border: "none",
                          backgroundColor: COLORS.greenButton,
                          borderRadius: 20,
                        }}
                        href=""
                      >
                        Close
                      </a>
                      <p style={{ fontSize: 15 }}>
                        Kira-intern wants to mearge 13 commits into{" "}
                        <span>main</span> from <span>add-status</span>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: 10,
                        marginBottom: 20,
                      }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 18,
                          color: COLORS.black,
                          borderBottom: "2px solid #7D7D7D",
                          paddingLeft: 40,
                          paddingRight: 40,
                          paddingBottom: 5,
                        }}
                        href="#"
                      >
                        Conversation 3
                      </a>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 18,
                          color: COLORS.black,
                          borderBottom: "2px solid #7D7D7D",
                          paddingLeft: 40,
                          paddingRight: 40,
                          paddingBottom: 5,
                        }}
                        href="#"
                      >
                        Cheaks 3
                      </a>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 18,
                          color: COLORS.black,

                          borderTop: "2px solid #7D7D7D",
                          borderRight: "2px solid black",
                          borderLeft: "2px solid black",
                          paddingTop: 5,
                          paddingLeft: 40,
                          paddingRight: 40,
                        }}
                        href="#"
                      >
                        Commits 13
                      </a>
                    </div>
                  </div>
                  <img
                    data-aos="fade-left"
                    data-aos-duration={300}
                    id="gitcodes"
                    style={{
                      width: 500,
                      border: "1px solid #7D7D7D",
                      borderRadius: 10,
                    }}
                    src={gitcode2}
                    alt=""
                  />
                </div>
              </div>
              <p style={{ position: "relative", opacity: 1, marginTop: 100 }}>
                <span style={{ opacity: 0.5, fontSize: 12 }}>
                  git merge add-status-screen
                </span>
                <div
                  style={{
                    position: "absolute",
                    left: -55,
                    opacity: 1,
                    top: 0,
                    padding: "1px 0 0 0",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <img
                    style={{ width: 25, opacity: 0.7 }}
                    src={cheakout}
                    alt=""
                  />
                </div>
              </p>
            </div>
          </div>

          {/* git cheakout end */}

          {/* mobile view start */}

          <div
            style={{
              marginLeft: 400,
              marginTop: 260,
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              marginBottom: 200,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -207,
                opacity: 1,
                top: -75,
                backgroundColor: COLORS.white,
                padding: "5px 0",
              }}
            >
              <img style={{}} src={Circle} alt="" />
            </div>
            <div data-aos="zoom-in"
             data-aos-duration="250">
              <img
                style={{ width: 260, borderRadius: 50 }}
                src={gitmobile}
                alt=""
              />
            </div>

            <div  style={{position: 'relative'}}>
              <img
              data-aos="fade-left"
               style={{ width: 520,position:'absolute',zIndex:1,right: 270,bottom: 40,boxShadow: "15px 15px 20px #868686",borderRadius:15 }} src={gitcode3} alt="" />
              <img
              data-aos="fade-right"
               style={{ width: 740,position:"absolute",right: 0,top: 0,bottom: 0,borderRadius: 15}} src="https://github.githubassets.com/images/modules/site/home/gh-desktop.png" alt="" />
            </div>
          </div>
        </div>
    )
}


export default OriginStatus
