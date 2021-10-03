import { COLORS } from "../../components/colors";
import gitlast from "../../assets/git last.png";


const MakeContributionPage = () => {
    return(
        <div id="secure" style={{ position: "relative", display: "flex" }}>
          <div className="halfCircle"></div>

          <img
            style={{ position: "absolute", top: -380, left: 0, right: 0,padding:35 }}
            src="https://github.githubassets.com/images/modules/site/home/footer-illustration.svg"
            alt=""
          />
          <div style={{ paddingTop: 400, paddingLeft: 180 }}>
            <h1
              style={{
                fontSize: 68,
                color: COLORS.white,
                maxWidth: 400,
                lineHeight: 1.2,
                marginBottom: 25,
                letterSpacing: -3,
              }}
            >
              Make your contribution
            </h1>
            <h5
              style={{
                fontSize: 22,
                fontWeight: 400,
                maxWidth: 600,
                color: COLORS.white,
                opacity: 0.5,
                marginBottom: 25,
                lineHeight: 1.5,
              }}
            >
              Small experiments, inspired inventions, and the software everyone
              depends on—the code you write on GitHub can reach one codebase or
              millions.
            </h5>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                style={{
                  alignItems: "center",
                  backgroundColor: COLORS.greenButton,
                  border: "none",
                  justifyContent: "space-between",
                  paddingTop: 16,
                  paddingBottom: 16,
                  borderRadius: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  width: 180,
                  marginBottom: 15,
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
              <button
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  justifyContent: "space-between",
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderRadius: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  width: 150,
                }}
              >
                <h5
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: COLORS.white,
                  }}
                >
                  Contact sales
                </h5>
              </button>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              right: 0,
              bottom: 140,
              width: 880,
              height: 500,
            }}
            src={gitlast}
            alt=""
          />
        </div>
    )
}

export default MakeContributionPage;