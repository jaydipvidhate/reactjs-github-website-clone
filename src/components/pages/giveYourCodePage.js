import { COLORS } from "../../components/colors";
import line from "../../assets/Group 13.png";
import lineCircle from "../../assets/Group 4.png";
import laptop from "../../assets/Icon material-laptop-chromebook.png";
import gitinstall from "../../assets/git instal img.png";
import earth from "../../assets/earth.png";
import Circle from "../../assets/Ellipse 2.png";




const Code = () => {
    return( <div
        style={{ margin: 20, backgroundColor: "#05112c", borderRadius: 20 }}
      >
        <div
          style={{ position: "absolute", top: 360, left: 168, opacity: 0.3 }}
        >
          <img src={line} alt="" />
        </div>
        <div
          id="code"
          className="container"
          style={{ paddingTop: 200, maxWidth: "72%" }}
        >
          <h1
            style={{
              fontSize: 72,
              color: COLORS.white,
              maxWidth: 600,
              lineHeight: 0.9,
              marginBottom: 25,
              letterSpacing: -5,
            }}
          >
            Give your code a home in the cloud
          </h1>
          <p
            style={{
              color: COLORS.white,
              fontWeight: 500,
              fontSize: 25,
              maxWidth: 500,
              lineHeight: 1.3,
              marginBottom: 20,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -48,
                opacity: 1,
                top: -80,
                backgroundColor: "#06132b",
                paddingTop: 80,
                paddingBottom: 5,
              }}
            >
              <img style={{}} src={Circle} alt="" />
            </div>
            <span style={{ color: COLORS.textColor2 }}>
              Record or rewind any change to your code to keep you and your
              team in sync.
            </span>
            Host it all for free with unlimited public and private
            repositories.
          </p>
          <a
            style={{ color: COLORS.white, fontSize: 18, fontWeight: 500 }}
            href="#"
          >
            Sign up for GitHub{" "}
          </a>
        </div>

        <div
          className="container"
          style={{
            paddingTop: 40,
            display: "flex",
            flexDirection: "column",
            maxWidth: "72%",
          }}
        >
          <h6 style={{ color: COLORS.white, fontSize: 16, fontWeight: 400,position:'relative',paddingBottom:20 }}>
            <span style={{ fontWeight: 700 }}>jaydipvidhate</span>{" "}
            <span style={{ color: COLORS.textColor2 }}>
              added some commits 8 min ago
            </span>
            <div
              style={{
                position: "absolute",
                left: -56,
                opacity: 1,
                backgroundColor: "#06132b",
                padding: "5px 0",
                top: 0
              }}
            >
              <img style={{width: 30}} src={laptop} alt="" />
            </div>
          </h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -62,
                opacity: 1,
                backgroundColor: "#06132b",
                padding: "5px 0",
              }}
            >
              <img style={{}} src={lineCircle} alt="" />
            </div>
            <img
              style={{ width: 40, marginTop: 10, opacity: 0.5 }}
              src={earth}
              alt=""
            />
            <p
              style={{
                color: COLORS.white,
                opacity: 0.2,
                fontSize: 12,
                marginLeft: 10,
              }}
            >
              Updated README.md
            </p>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img
          data-aos="zoom-in"
          data-aos-duration="600"
          id="commits"
          style={{ width: "80%", marginTop: 40 }}
          src="https://github.githubassets.com/images/modules/site/home/repo-browser.png"
          alt=""
        />
        </div>
        <div
          className="container"
          style={{
            paddingTop: 40,
            display: "flex",
            flexDirection: "column",
            maxWidth: "72%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -62,
                opacity: 1,
                backgroundColor: "#06132b",
                padding: "5px 0",
              }}
            >
              <img src={lineCircle} alt="" />
            </div>
            <img style={{ width: 40, opacity: 0.5 }} src={earth} alt="" />
            <p
              style={{
                color: COLORS.white,
                opacity: 0.2,
                fontSize: 12,
                marginLeft: 10,
              }}
            >
              Updated README.md
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: 5,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -62,
                opacity: 1,
                top: 20,
                backgroundColor: "#06132b",
                padding: "5px 0",
              }}
            >
              <img src={lineCircle} alt="" />
            </div>
            <img
              style={{ width: 40, opacity: 0.5, marginTop: 10 }}
              src={earth}
              alt=""
            />
            <p
              style={{
                color: COLORS.white,
                opacity: 0.2,
                fontSize: 12,
                marginLeft: 10,
              }}
            >
              Updated README.md
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 50,
          }}
        >
          <img
            id="commits"
            style={{
              width: "35%",
              height: 320,
              marginLeft: 200,
              borderRadius: 10,
              border: "1px solid #c4f8ff",
              zIndex: 1,
            }}
            src={gitinstall}
            alt=""
          />
          <div
            data-aos="fade-right"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            id="code"
            className="container"
            style={{ maxWidth: "50%" }}
          >
            <h1
              style={{
                fontSize: 60,
                color: COLORS.white,
                maxWidth: 600,
                lineHeight: 0.9,
                marginBottom: 25,
                letterSpacing: -5,
              }}
            >
              Build on what's been built
            </h1>
            <p
              style={{
                color: COLORS.white,
                fontWeight: 500,
                fontSize: 24,
                maxWidth: 500,
                lineHeight: 1.3,
                marginBottom: 20,
              }}
            >
              Write less code thanks to the world's largest software package
              registry.
              <span style={{ color: COLORS.textColor2, marginLeft: 5 }}>
                Find the best community-approved projects to accelerate your
                work, then share it with the world with npm and GitHub
                Packages.
              </span>
            </p>
          </div>
        </div>
        <div
          className="container"
          style={{
            paddingBottom: 100,
            display: "flex",
            flexDirection: "column",
            maxWidth: "72%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -47,
              opacity: 1,
              top: 10,
              backgroundColor: "#06132b",
              padding: "5px 0",
            }}
          >
            <img src={lineCircle} alt="" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: 40, opacity: 0.5 }} src={earth} alt="" />
            <p
              style={{
                color: COLORS.white,
                opacity: 0.2,
                fontSize: 12,
                marginLeft: 10,
              }}
            >
              Added package for javascrit linting
            </p>
          </div>
        </div>
      </div>)
}

export default Code;