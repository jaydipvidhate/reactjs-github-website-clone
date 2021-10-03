import "./App.css";
import React from "react";


import Aos from "aos";
import "aos/dist/aos.css";


import Hero from "./components/pages/hero"
import ContactScale from "./components/pages/contactScale";
import StickyNav from "./components/pages/stickyNav";
import Code from "./components/pages/giveYourCodePage";
import OriginStatus from "./components/pages/originStatus";
import CodeSpace from "./components/pages/codeSpace";
import AutomateSection from "./components/pages/automateSection";
import MakeContributionPage from "./components/pages/makeContributionPage";
import Comunity from "./components/pages/comunity";
import NavBarLast from "./components/pages/navBarLast";



function App() {
  Aos.init();
  return (
    <div className="App">
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
  );
}

export default App;
