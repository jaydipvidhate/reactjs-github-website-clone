import "./App.css";
import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/pages/hero";
import ContactScale from "./components/pages/contactScale";
import StickyNav from "./components/pages/stickyNav";
import Code from "./components/pages/giveYourCodePage";
import OriginStatus from "./components/pages/originStatus";
import CodeSpace from "./components/pages/codeSpace";
import AutomateSection from "./components/pages/automateSection";
import MakeContributionPage from "./components/pages/makeContributionPage";
import Comunity from "./components/pages/comunity";
import NavBarLast from "./components/pages/navBarLast";
import logo from "../src/assets/logo.png";

function App() {
  Aos.init();
  return (
    <>
      <div className="App">
        <a
          href="https://github.com/jaydipvidhate/reactjs-github-website-clone"
          target="_blank"
          className="sourceCode"
        >
          <img style={{ width: 32 }} src={logo} alt="" />
          <p>Source Code</p>
        </a>
        <Hero></Hero>

        <ContactScale></ContactScale>

        <div style={{ marginTop: 100, position: "relative" }}>
          <StickyNav></StickyNav>

          <Code></Code>

          <OriginStatus></OriginStatus>

          <CodeSpace></CodeSpace>

          <AutomateSection></AutomateSection>

          <MakeContributionPage></MakeContributionPage>

          <Comunity></Comunity>

          <NavBarLast></NavBarLast>
        </div>
      </div>
      <div className="AppMobile" style={{}}>
        <h1
          style={{
            color: "white",
            fontSize: 26,
            textAlign: "center",
          }}
        >
          Please view it on a laptop or desktop
        </h1>
        <p
          style={{
            color: "white",
            fontSize: 16,
            maxWidth: 600,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Currently, this website is not mobile responsive. We will try to do it
          responsive ASAP.
        </p>
      </div>
    </>
  );
}

export default App;
