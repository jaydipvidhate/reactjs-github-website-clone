import { COLORS } from "../../components/colors";

const Comunity = () => {
  return (
    <div
      id="community"
      className="contactClass"
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "100px 20px",
      }}
    >
      <a
        style={{
          marginRight: 200,
          marginLeft: 60,
          fontSize: 30,
          letterSpacing: -1,
          fontWeight: 700,
        }}
        href="#hero"
      >
        GitHub
      </a>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: COLORS.black,
            letterSpacing: 1.5,
            padding: "5px 0",
            opacity: 0.9,
            fontSize: 15,
          }}
        >
          Product
        </p>
        <a href="https://github.com/features">Features</a>
        <a href="https://github.com/features">Security</a>
        <a href="https://github.com/features">Team</a>
        <a href="https://github.com/features">Enterprise</a>
        <a href="https://github.com/features">Customer stories</a>
        <a href="https://github.com/features">The ReadME Project</a>
        <a href="https://github.com/features">Pricing</a>
        <a href="https://github.com/features">Resources</a>
        <a href="https://github.com/features">Roadmap</a>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: COLORS.black,
            letterSpacing: 1.5,
            padding: "5px 0",
            opacity: 0.9,
            fontSize: 15,
          }}
        >
          Platform
        </p>
        <a href="https://github.com/features">Developer API</a>
        <a href="https://github.com/features">Partners</a>
        <a href="https://github.com/features">Atom</a>
        <a href="https://github.com/features">Electron</a>
        <a href="https://github.com/features">GitHub</a>
        <a href="https://github.com/features">Desktop</a>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: COLORS.black,
            letterSpacing: 1.5,
            padding: "5px 0",
            opacity: 0.9,
            fontSize: 15,
          }}
        >
          Support Docs
        </p>
        <a href="https://github.com/features">Community Forum</a>
        <a href="https://github.com/features">Professional Services</a>
        <a href="https://github.com/features">Learning Lab</a>
        <a href="https://github.com/features">Status</a>
        <a href="https://github.com/features"> Contact GitHub</a>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: COLORS.black,
            letterSpacing: 1.5,
            padding: "5px 0",
            opacity: 0.9,
            fontSize: 15,
          }}
        >
          Company
        </p>
        <a href="https://github.com/features">About</a>
        <a href="https://github.com/features">Blog</a>
        <a href="https://github.com/features">Careers</a>
        <a href="https://github.com/features">Press</a>
        <a href="https://github.com/features">Social Impact</a>
        <a href="https://github.com/features">Shop</a>
      </div>
    </div>
  );
};

export default Comunity;
