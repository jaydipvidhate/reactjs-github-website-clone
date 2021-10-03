import { COLORS } from "../../components/colors";

const AutomateSection = () => {
    return(
        <div
          id="automate"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "80px 0",
            backgroundColor: COLORS.white,
            marginBottom: 350,
          }}
        >
          <h1 style={{ fontSize: 75, letterSpacing: -4 }}>
            Automate anything with
          </h1>
          <h1 style={{ fontSize: 75, letterSpacing: -4 }} id="readyText">
            GitHub Actions
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
            Learn more about GitHub Actions
          </a>
        </div>
    )
}

export default AutomateSection;