import logo from "../../assets/logoLight.png";
import down from "../../assets/Icon feather-chevron-down.svg";
import searchLogo from "../../assets/searchLogo.svg";
import gitMan from "../../assets/git man.png";
import Globe from "../../assets/gitGlobe.png";
import { COLORS } from "../../components/colors";

const Hero = () => {
  return (
    <div
      className="hero"
      id="hero"
      style={{ height: "105vh", paddingBottom: 30, position: "relative" }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }} className="left">
          <img style={{ width: 32 }} src={logo} alt="" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: COLORS.white,
                marginLeft: 22,
              }}
            >
              Why GitHub?
            </h4>
            <img
              style={{ width: 10, opacity: 0.5, marginLeft: 5 }}
              src={down}
              alt=""
            />
          </div>
          <h5
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: COLORS.white,
              marginLeft: 18,
            }}
          >
            Team
          </h5>
          <h5
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: COLORS.white,
              marginLeft: 18,
            }}
          >
            Enterprise
          </h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: COLORS.white,
                marginLeft: 18,
              }}
            >
              Explore
            </h5>
            <img
              style={{ width: 10, opacity: 0.5, marginLeft: 5 }}
              src={down}
              alt=""
            />
          </div>
          <h5
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: COLORS.white,
              marginLeft: 18,
            }}
          >
            Marketplace
          </h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: COLORS.white,
                marginLeft: 18,
              }}
            >
              Pricing
            </h5>
            <img
              style={{ width: 10, opacity: 0.5, marginLeft: 5 }}
              src={down}
              alt=""
            />
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center" }}
          className="right"
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: COLORS.searchBar,
              border: "none",
              width: 240,
              justifyContent: "space-between",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 5,
            }}
          >
            <h5
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: COLORS.white,
                marginLeft: 10,
                opacity: 0.5,
              }}
            >
              Search GitHub
            </h5>
            <img
              style={{ width: 18, marginRight: 10, opacity: 0.8 }}
              src={searchLogo}
              alt=""
            />
          </button>
          <h5
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: COLORS.white,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            Sign in
          </h5>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "1px solid white",
              justifyContent: "space-between",
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 5,
            }}
          >
            <h5
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: COLORS.white,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              Sign up
            </h5>
          </button>
        </div>
      </nav>

      <div
        className="container"
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          height: "85%",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 80,
              color: COLORS.white,
              maxWidth: 700,
              lineHeight: 0.9,
              marginBottom: 25,
              letterSpacing: -5,
            }}
          >
            Where the world builds software
          </h1>
          <h5
            style={{
              fontSize: 25,
              fontWeight: 400,
              maxWidth: 600,
              color: COLORS.white,
              opacity: 0.5,
              marginBottom: 25,
              lineHeight: 1.5,
            }}
          >
            Millions of developers and companies build, ship, and meintain their
            software on GitHub-the largest and most advances development
            platform in the world
          </h5>
          <div style={{ display: "flex" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: COLORS.white,
                border: "none",
                width: 350,
                marginRight: 10,
                justifyContent: "space-between",
                paddingTop: 15,
                paddingBottom: 15,
                borderRadius: 5,
              }}
            >
              <h5
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: COLORS.black,
                  marginLeft: 10,
                  opacity: 0.6,
                }}
              >
                Email
              </h5>
            </button>
            <button
              style={{
                alignItems: "center",
                backgroundColor: COLORS.greenButton,
                border: "none",
                justifyContent: "space-between",
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 5,
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <h5
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: COLORS.white,
                }}
              >
                Sign up for GitHub
              </h5>
            </button>
          </div>
        </div>

        <img
          src={Globe}
          style={{
            width: "45rem",
            height: "35rem",
            position: "absolute",
            right: -100,
            top: "auto",
          }}
        />
      </div>
      <div
        className="container"
        style={{
          borderTop: "1px solid rgba(219, 219, 219, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          height: "10%",
          paddingTop: 20,
          marginTop: -80,
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h5
              style={{
                color: COLORS.white,
                marginRight: 100,
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              65+ million
            </h5>
            <p style={{ color: COLORS.white, fontSize: 12, opacity: 0.5 }}>
              Developers
            </p>
          </div>
          <div>
            <h5
              style={{
                color: COLORS.white,
                marginRight: 100,
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              3+ million
            </h5>
            <p style={{ color: COLORS.white, fontSize: 12, opacity: 0.5 }}>
              Organizations
            </p>
          </div>
          <div>
            <h5
              style={{
                color: COLORS.white,
                marginRight: 100,
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              200+ million
            </h5>
            <p style={{ color: COLORS.white, fontSize: 12, opacity: 0.5 }}>
              Repositories
            </p>
          </div>
          <div>
            <h5
              style={{
                color: COLORS.white,
                marginRight: 100,
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              72%
            </h5>
            <p style={{ color: COLORS.white, fontSize: 12, opacity: 0.5 }}>
              Fortune 50
            </p>
          </div>
        </div>
        <img
          style={{
            width: 500,
            height: 480,
            position: "absolute",
            right: 10,
            bottom: -60,
            zIndex: 1,
          }}
          src={gitMan}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
