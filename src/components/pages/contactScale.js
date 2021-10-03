import { COLORS } from "../../components/colors";




const ContactScale = () =>{


    return(<div className="halfcurve">

    <div
      className="secondPage"
      style={{
        position: "absolute",
        backgroundColor: COLORS.white,
        width: "100%",
        height: 150,
      }}
    ></div>
    <div
      className="secondPageBack"
      style={{ backgroundColor: COLORS.white, width: "100%", height: 150 }}
    ></div>

    {/* Contact sale class */}

    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "82%",
          backgroundColor: COLORS.white,
          boxShadow: "1px 1px 10px #7D7D7D",
          border: "1px solid #E3E3E3",
          borderRadius: 10,
          position: "relative",
          marginTop: 20,
        }}
      >
        <div style={{ width: "100%", marginLeft: 50, paddingTop: 30 }}>
          <h4
            style={{
              fontSize: 35,
              fontWeight: 600,
              maxWidth: 380,
              letterSpacing: -2,
              lineHeight: 1,
              marginBottom: 5,
              color: COLORS.textColor,
            }}
          >
            Build like the best with GitHub Enterprise
          </h4>
          <p
            style={{
              maxWidth: 310,
              marginBottom: 10,
              opacity: 0.9,
              letterSpacing: -1,
              color: COLORS.textColor,
            }}
          >
            Take collaboration to the next level with security and
            administrative features built for teams.
          </p>
          <button
            style={{
              border: "1px solid",
              borderColor: COLORS.blueButton + "52",
              backgroundColor: "transparent",
              width: 180,
              height: 45,
              borderRadius: 4,
              marginBottom: 30,
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: COLORS.blueButton,
                fontWeight: 600,
              }}
            >
              Contact Sales
            </p>
          </button>
        </div>
        <img
          style={{
            width: 500,
            height: 180,
            right: 5,
            bottom: 0,
            position: "absolute",
          }}
          src="https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.jpg"
          alt=""
        />
      </div>
    </div>
    </div>)}

export default ContactScale;